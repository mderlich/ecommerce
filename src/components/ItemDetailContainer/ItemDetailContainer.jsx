import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import { ItemDetail } from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";


export const ItemDetailContainer = () => {

  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);


  const getProductDB = (id) => {
    const productRef = doc(db, "products", id);
    getDoc(productRef)
      .then(response => {

        const product = {
          id: response.id,
          ...response.data()
        }

        setItem(product);
      })
  }


  useEffect(() => {

    setLoading(true) // iniciamos el loading...




      .catch((error) => setError(error))

      .finally(() => setLoading(false));  // cortamos el loading...

  }, [])

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
            {error && <h1>{error}</h1>}
            {item && <ItemDetail {...item} />}
          </>
      }

    </>


  )
}