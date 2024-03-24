import { Item } from "../Item/Item"


export const ItemList = ({ products }) => {
  return (

      <div className="d-flex  justify-content-between">
        {
          // OBS... requiere indicar key={product.id}
          products.map(product => (
            <Item key={product.id} {...product} />
          ))
          // --------------------------------------------
        }
      </div>

  )
}