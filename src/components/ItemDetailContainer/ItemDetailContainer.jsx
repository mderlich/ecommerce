import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from "../../AsyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {

  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);


  useEffect(() => {

    setLoading(true) // iniciamos el loading...

    getProduct(id)
      .then(resp => {



        setItem(resp);



      })

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