
const products = [
    { id: "1", name: "Camisa", description: "Una camisa", category: "mujer", img: "urlimg", price: 23, stock: 4 },
    { id: "2", name: "Corbata", description: "Una Corbata", category: "hombre", img: "urlimg", price: 23, stock: 8 },
    { id: "3", name: "Pantalón", description: "Un Pantalón", category: "mujer", img: "urlimg", price: 23, stock: 10 },
    { id: "4", name: "Zapatilla", description: "Una Zapatilla", category: "mujer", img: "urlimg", price: 23, stock: 10 },
];

// //////////////////////////////////////////////////////////
// TODOS LOS PRODUCTOS /////////////////////////////////////

export const getProducts = (category) => {
    return new Promise((resolve, reject) => {

        // simulamos una demora en servidor, de 2 segundos...
        setTimeout(() => {

            // ---------------------------
            // resolve...
            if (products.length > 0) {  // verificamos que existan productos

                // si vienen indicados con 'categoria' filtramos...
                if (category) {
                    const productsFilter = products.filter(product => product.category === category)
                    productsFilter.length ? 
                    resolve(productsFilter) : 
                    reject("Categoria sin productos");
                }
                // si no se especifico categoria, enviamos todo el listado
                else {
                    resolve(products);
                }

            }
            // reject...
            else {
                reject("No hay productos")
            }
            // ---------------------------

        }, 2000);



    })
}


// ///////////////////////////////////////////////////////
// UN SOLO PRODUCTO /////////////////////////////////////

export const getProduct = (id) => {  // <= Observar que incluye 'id'

    return new Promise((resolve, reject) => {

        // simulamos una demora en servidor, de 2 segundos...
        setTimeout(() => {

            // ----------------------------------
            // resolve...
            if (products.length > 0) {  // verificamos que existan productos

                // buscamos el producto con el 'id'
                const product = products.find(p => p.id == id);

                //si existe el 'id'
                if (product) {
                    resolve(product);
                }

                //si no existe el 'id'
                else {
                    reject(`No se encontro el producto con el id ${id}`);
                }

            }

            // reject...
            else {
                reject("No hay productos")
            }
            // ----------------------------------

        }, 2000);

    })
}

