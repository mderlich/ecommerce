

import { useEffect, useState } from "react"

// COMPONENTES
import { Contenedor } from "../Contenedor/Contenedor"
import { ItemList } from "../ItemList/ItemList"

// LISTA DE PRODUCTOS
import { getProducts } from "../../AsyncMock"
import { useParams } from "react-router-dom"


export const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const{ genero } = useParams()
console.log(genero)

  useEffect(() => {

    setIsLoading(true)
    
    getProducts()
      // atrapamos la respuesta de la promesa...
      .then(resp => {
        if( genero ){
          const productsFilter = resp.filter( product => product.genero === genero)
          //console.log(productsFilter)
          setProducts(productsFilter);
        }else{
          setProducts(resp);
        }
        //console.log(resp)
        setIsLoading(false)
      })
  }, [ genero ])

  return (
    <>
      <h1>{greeting}</h1>
      {
        isLoading ? <h2>Cargando Productos...</h2> : 
        <>
        <ItemList products = { products }/>
        <Contenedor />        
        </>
      }
    </>

  )
}