import { Item } from "../Item/Item"



export const ItemList = ({ products }) => {
  return (

      <>
        {
          // OBS... requiere indicar key={product.id}
          products.map(product => (
            <Item key={product.id} {...product} />
          ))
          // --------------------------------------------
        }
        
      </>

  )
}