import { useState, useContext } from "react";
import { db } from "../../services/Config";
import { CarritoContext } from "../../context/CarritoContext";
import { collection, addDoc, doc, runTransaction } from "firebase/firestore";
import './Checkout.css'

const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const actualizarStock = async () => {
    try {
      for (const producto of carrito) {
        const productoRef = doc(db, "productos", producto.item.id);

        await runTransaction(db, async (transaction) => {
          const productoSnap = await transaction.get(productoRef);

          if (!productoSnap.exists()) {
            throw new Error(`El producto ${producto.item.nombre} no existe.`);
          }

          const stockActual = productoSnap.data().stock;

          if (stockActual < producto.cantidad) {
            throw new Error(`Stock insuficiente para ${producto.item.nombre}.`);
          }

          transaction.update(productoRef, { stock: stockActual - producto.cantidad });
        });
      }
    } catch (error) {
      console.error("Error al actualizar stock:", error);
      throw error; // Para evitar que se complete la compra si hay un error
    }
  };

  const manejadorFormulario = async (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !direccion || !telefono || !email || !emailConfirmacion) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los emails deben coincidir");
      return;
    }

    const orden = {
      items: carrito.map(producto => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad
      })),
      total,
      fecha: new Date(),
      nombre,
      apellido,
      direccion,
      telefono,
      email
    };

    try {
      await actualizarStock(); // Descontar stock antes de guardar la orden

      const docRef = await addDoc(collection(db, "pedidos"), orden);
      setOrderId(docRef.id);
      vaciarCarrito();
      setError("");
      setNombre("");
      setApellido("");
      setDireccion("");
      setTelefono("");
      setEmail("");
      setEmailConfirmacion("");
    } catch (error) {
      setError("Error al procesar la compra. Intenta nuevamente.");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Realizar Pedido</h2>
      <form onSubmit={manejadorFormulario}>
        {carrito.map(producto => (
          <div key={producto.item.id}>
            <p>{producto.item.nombre} x {producto.cantidad}</p>
            <p>Precio: ${producto.item.precio}</p>
          </div>
        ))}
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
        <input type="text" placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
        <input type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="email" placeholder="Confirmar Email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} required />

        {error && <p>{error}</p>}

        <button type="submit">Realizar Pedido</button>

        {orderId && <p>¡Gracias por tu compra! Tu numero de pedido: {orderId}</p>}
      </form>
    </div>
  );
};

export default Checkout;
