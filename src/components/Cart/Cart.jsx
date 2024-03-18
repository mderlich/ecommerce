import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const Cart = () => {

  // emplea el... useContext
  const { cart, clearCart, removeItem, totalPrice } = useContext(CartContext)
  console.log(cart)
  console.log("total..." + totalPrice)

  return (
    <>
      <h1>( Carrito Vacio )</h1>

      {/* mapeamos los items en carrito... */}
      {cart.map((item) => (

        <div key={item.id} className="border border-1 border-dark rounded-3  p-3 m-2">
          <h5> {item.name} </h5>
          <p>Cantidad: {item.quantity} </p>
          <p>Precio Unitario: ${item.price} </p>
          <p>Subtotal: ${item.subtotal}</p>

          <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
            Eliminar
          </button>
        </div>


      ))}

<h2>Total: ${totalPrice}</h2>
      <button className="btn btn-outline-success" onClick={clearCart}>
        Vaciar carrito
      </button>
    </>



  )
}