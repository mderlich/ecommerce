
/*
id
    img
    price
    category
name
description
stock
*/
const products = [
    { id: "1", name: "Camisa", description: "Una camisa", stock: 4, genero: "mujer" },
    { id: "2", name: "Corbata", description: "Una Corbata", stock: 8, genero: "hombre" },
    { id: "3", name: "Pantalón", description: "Un Pantalón", stock: 10 , genero: "mujer"},
    { id: "4", name: "Zapatilla", description: "Una Zapatilla", stock: 10, genero: "mujer" },
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {

        if (products.length > 0) {
            // simulamos demora en servidor, de 2 segundos...
            setTimeout(() => {
                resolve(products);
            }, 2000);
        } else {
            reject("No hay productos")
        }
    })
}

