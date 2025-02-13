import { useState, useEffect, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    // Cargar carrito desde localStorage
    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
        if (carritoGuardado) {
            setCarrito(carritoGuardado);
            setCantidadTotal(carritoGuardado.reduce((acc, prod) => acc + prod.cantidad, 0));
            setTotal(carritoGuardado.reduce((acc, prod) => acc + prod.item.precio * prod.cantidad, 0));
        }
    }, []);

    const agregarAlCarrito = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);

        if (!productoExistente) {
            const nuevoCarrito = [...carrito, { item, cantidad }];
            setCarrito(nuevoCarrito);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
            localStorage.setItem("carrito", JSON.stringify(nuevoCarrito)); // Guardamos en localStorage
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                }
                return prod;
            });
            setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
            localStorage.setItem("carrito", JSON.stringify(carritoActualizado)); // Guardamos en localStorage
        }
    };

    const eliminarProducto = (id) => {
        const productoEliminado = carrito.find(prod => prod.item.id === id);
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);

        setCarrito(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
        localStorage.setItem("carrito", JSON.stringify(carritoActualizado)); // Guardamos en localStorage
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setTotal(0);
        localStorage.removeItem("carrito"); // Limpiamos localStorage
    };

    return (
        <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};
