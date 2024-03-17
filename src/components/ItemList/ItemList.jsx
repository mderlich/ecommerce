import { Item } from "../Item/Item"


export const ItemList = ({ productsList }) => {
  return (
    <>
      <div className="d-flex  justify-content-between">
        {
          // OBS... requiere indicar key={product.id}
          productsList.map(product => (
            <Item key={product.id} {...product} />
          ))
          // --------------------------------------------
        }
      </div>
    </>
  )
}