
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

// Los 'id' los borramos, ya que Firebase los crea
const products = 
[
    {
        name: "CAMISA CLAUS NEW RAY",
        price: 34159,
        category: "hombre",
        stock: 4,
        img: "CAMISA CLAUS NEW RAY",
        description: "Camisa Slim Fit con rayas muy finas, cuello solapa, manga larga y cierre frontal con botones."
    },
    {
        name: "CAMISA CLAUS NEW BASIC",
        price: 45999,
        stock: 3,
        category: "hombre",
        img: "CAMISA CLAUS NEW BASIC",
        description: "Camisa de cuello solapa, manga larga y cierre frontal con botones."
    },
    {
        name: "REMERA OWEN NEIL BIEST SKATEPARK",
        price: 19799,
        stock: 5,
        category: "hombre",
        img: "REMERA OWEN NEIL BIEST SKATEPARK",
        description: "Remera caja grande, estampada, cuello redondo y manga corta."
    },
    {
        name: "REMERA OVERAN BASIC",
        price: 19499,
        stock: 6,
        category: "hombre",
        img: "REMERA OVERAN BASIC",
        description: "Remera unisex oversize de jersey de algodón, escote redondo, cuello alto de ribb y etiqueta de tela en pecho."
    },
    {
        name: "REMERA RESKI PETER GIRLS",
        price: 12199,
        stock: 3,
        category: "mujer",
        img: "REMERA RESKI PETER GIRLS",
        description: "Remera manga corta y cuello redondo."
    },
    {
        name: "REMERA BLOCK LIN",
        price: 18199,
        stock: 5,
        category: "mujer",
        img: "REMERA BLOCK LIN",
        description: "Remera manga corta, cuello en V."
    },
    {
        name: "CAMISA ARABELLA VIYELA",
        price: 37799,
        stock: 4,
        category: "mujer",
        img: "CAMISA ARABELLA VIYELA",
        description: "Camisa de viyela cuadrillé, con bolsillo frontal."
    },
    {
        name: "MUSCULOSA CASUAL BASIC",
        price: 11549,
        stock: 6,
        category: "mujer",
        img: "MUSCULOSA CASUAL BASIC",
        description: "Musculosa básica de morley con cuello redondo."
    },
    {
        name: "MUSCULOSA ESTRELLA FRUNCES",
        price: 12949,
        stock: 10,
        category: "mujer",
        img: "MUSCULOSA ESTRELLA FRUNCES",
        description: "Musculosa de morley con lurex y frunces en los laterales."
    }
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
