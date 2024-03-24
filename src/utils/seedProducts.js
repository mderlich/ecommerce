
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// Los 'id' los borramos, ya que Firebase los crea
const products = [
    { name: "Camisa", description: "Una camisa", category: "mujer", img: "urlimg", price: 120, stock: 4 },
    { name: "Corbata", description: "Una Corbata", category: "hombre", img: "urlimg", price: 100, stock: 8 },
    { name: "Pantalón", description: "Un Pantalón", category: "mujer", img: "urlimg", price: 200, stock: 10 },
    { name: "Zapatilla", description: "Una Zapatilla", category: "mujer", img: "urlimg", price: 300, stock: 10 },
];

// La siguiente funcion, la ejecutamos en el archivo 'ItemListContainer.jsx'
// OBS se debe generar una sola vez para cargar los datos y despues se borra
/*
useEffect(() => {
    seedProducts()
  }, [category])
*/

export const seedProducts = () => {

    products.forEach(product => {
        // Agregamos el producto a nuestra base de datos
        addDoc(collection(db, "products"), product)
    })

}
