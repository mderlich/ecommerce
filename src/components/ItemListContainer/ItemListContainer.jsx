// REACT
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// COMPONENTES
import { ItemList } from "../ItemList/ItemList"
import { db } from "../../config/firebaseConfig"
import { collection, getDocs } from "firebase/firestore";

// Para insertar a la DB
import { seedProducts } from "../../config/utils/seedProducts";



// faltan...
// import "./ItemsListContainer.css";
// import Loader from "../Loader/Loader";
// import { collection, getDocs, getFirestore } from "firebase/firestore";


// --------------------------------------------------
export const ItemListContainer = ({ greeting }) => {

  const [productsList, setProductsList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  const { category } = useParams()  // util para parametro de navegacion, se vuelve a llamar al final del useEffect

  
  // productos desde DB ************************************
  const getProductsDB = () => {
    // referencia a nuestra coleccion de db
    //const myProducts = collection(db, "products");
    //const myProducts = collection(db, "products");
    const myProducts = collection(db, "products");
      
    //obtener los documentos de db
    getDocs(myProducts)
      .then(response => {
        //console.log(response.docs[0].id);
        //console.log(response.docs[0].data());
        /* 
         const item ={
           id: response.docs[0].id,
           ...response.docs[0].data(),
         }
         console.log(item) 
         */

        const productList = response.docs.map(doc => {
          const item = {
            id: doc.id,
            ...doc.data()
          }
          return item;
        })

        // console.log(productList)
        // guardamos nuestros productos ordenados
        setProductsList(productList);
        setLoading(false)
      })


  }
  // useEffect ************************************
  useEffect(() => {
    setLoading(true)
    getProductsDB(category)
    //seedProducts()
    
  }, [category])
  // when category change, reload and set a new products list on the app
  // *********************************************

  // spinner bootstrap from...
  // https://getbootstrap.com/docs/4.2/components/spinners/
  return (
    <>
      {
        loading ?
          <div>
            <h2>Cargando Productos...</h2>
            <div className="spinner-border" role="status"></div>
          </div>
          :
          <>
            {greeting && <h1>{greeting}</h1>}
            {error && <h1>{error}</h1>}
            {productsList && <ItemList productsList={productsList} />}

          </>
      }
    </>
  )
  // {error && <h1>{ error }</h1>}
  // {<ItemList productsList={productsList} />}
  // --------------------------------------------------



}
// --------------------------------------------------
