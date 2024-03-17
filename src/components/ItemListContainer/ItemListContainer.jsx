// REACT
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

// COMPONENTES
import { Contenedor } from "../Contenedor/Contenedor"
import { ItemList } from "../ItemList/ItemList"

// LISTA DE PRODUCTOS
import { getProducts } from "../../AsyncMock";


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


  // useEffect ************************************
  useEffect(() => {

    setLoading(true) // iniciamos el loading...
    setError(null) // iniciamos el loading...
    setProductsList([]) // iniciamos el loading...

    // llamado de productos /////////////////////
    getProducts(category)

      // atrapamos la respuesta de la promesa...
      .then(resp => setProductsList(resp))

      .catch((error) => {
        setError(error)

      }
      )

      .finally(() => setLoading(false));  // cortamos el loading...

    // /////////////////////////////////////////


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
