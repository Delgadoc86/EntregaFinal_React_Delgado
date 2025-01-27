const productos = [
    { 
        id: '1', 
        category: "Remera", 
        nombre: "Remera Hombre", 
        precio: 20000, 
        stock: 5,
        img: "/img/RemeraH.webp", 
        descripcion: "Cómoda y ligera, esta remera para hombre está diseñada con algodón de alta calidad para garantizar frescura durante todo el día." 
    },
    { 
        id: '2', 
        category: "Remera", 
        nombre: "Remera Mujer", 
        precio: 22000, 
        stock: 4,
        img: "/img/RemeraM.webp", 
        descripcion: "Elegante y versátil, esta remera para mujer combina estilo y comodidad, ideal para cualquier ocasión casual." 
    },
    { 
        id: '3', 
        category: "Jean", 
        nombre: "Jean Hombre", 
        precio: 45000, 
        stock: 6,
        img: "/img/JeanH.webp", 
        descripcion: "Este jean para hombre ofrece un diseño clásico con un ajuste perfecto, confeccionado con denim de alta resistencia para durar más tiempo." 
    },
    { 
        id: '4', 
        category: "Jean", 
        nombre: "Jean Mujer", 
        precio: 47000, 
        stock: 5,
        img: "/img/JeanM.webp", 
        descripcion: "Estilizado y moderno, este jean para mujer realza la figura con un corte ajustado y tela elástica de alta calidad." 
    },
    { 
        id: '5', 
        category: "Bermuda", 
        nombre: "Bermuda Hombre", 
        precio: 30000, 
        stock: 3,
        img: "/img/BermudaH.webp", 
        descripcion: "Perfecta para días cálidos, esta bermuda para hombre combina estilo y funcionalidad con múltiples bolsillos y tela transpirable." 
    },
    { 
        id: '6', 
        category: "Bermuda", 
        nombre: "Bermuda Mujer", 
        precio: 32000,
        stock: 2, 
        img: "/img/BermudaM.webp", 
        descripcion: "Ligera y fresca, esta bermuda para mujer es ideal para el verano, con un diseño cómodo y moderno que se adapta a cualquier look." 
    },
    { 
        id: '7', 
        category: "Zapatillas", 
        nombre: "Zapatillas Hombre", 
        precio: 160000,
        stock: 7, 
        img: "/img/ZapatillaH.webp", 
        descripcion: "Diseñadas para el máximo rendimiento, estas zapatillas para hombre ofrecen comodidad, durabilidad y un diseño deportivo único." 
    },
    { 
        id: '8', 
        category: "Zapatillas", 
        nombre: "Zapatillas Mujer", 
        precio: 122000, 
        stock: 1,
        img: "/img/ZapatillaM.webp", 
        descripcion: "Con un diseño elegante y cómodo, estas zapatillas para mujer son perfectas para entrenar o complementar tu outfit diario." 
    }
];



export const getProductos = () => {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve(productos); 
        }, 2000) 
    })
}

//Creamos una nueva función similar pero que nos retorne un solo item:
//Para ser utilizado en ItemDetailContainer 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productoBuscado = productos.find(item => item.id === id); 
            resolve(productoBuscado);
        }, 2000)
    }) 
}

//creamos una nueva funcion para que retornar los productos por categoría

export const getProductosPorCategoria = (idCategory) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosPorCat = productos.filter(item => item.category === idCategory);
            resolve(productosPorCat);
        }, 2000)
    })
}
