// REACT...
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// COMPONENTE...
import { ItemDetail } from "../ItemDetail/ItemDetail";

// DB FIREBASE...
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";


// *******************************************
export const ItemDetailContainer = () => {

  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);

  // producto desde DB ************************************
  const getProductDB = (id) => {

    // indicamos nuestro producto con id especifico
    const oneProduct = doc(db, "products", id);

    // getDoc...
    getDoc(oneProduct)
      .then(response => {
        if (response.exists()) {
          // El documento con el ID especificado existe en Firestore
          const product = {
            id: response.id,
            ...response.data()
          };
          setItem(product);
        } else {
          // El documento con el ID especificado no existe en Firestore
          const errorMessage = "No se encontró el producto";
          setError(errorMessage); // Almacena el mensaje de error en el estado
        }
      })
      .catch(error => {
        console.error('Error al obtener el producto:', error);
        // Si ocurre un error al obtener el producto, también puedes manejarlo y almacenarlo en el estado de error si es necesario
        setError("Error al obtener el producto");
      })
     
      .finally(() => {
        setLoading(false);
      });
    // --------------



  }


  useEffect(() => {
    setLoading(true)
    getProductDB(id);

  }, [])

  return (
    <>

      {
        loading ?
          <div>
            <h2>Cargando detalles del producto...</h2>
            <div className="spinner-border" role="status"></div>
          </div>
          :
          <>
            {error && <h2>No se encontró el producto</h2>}
            {item && <ItemDetail {...item} />}
          </>
      }

    </>


  )
}