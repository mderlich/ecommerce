// REACT...
import { useContext } from "react"
import { Link } from "react-router-dom";

// CONTEXT...
import { CartContext } from "../../context/CartContext"

//SWEETALERT...
import Swal from "sweetalert2";


// **************************************************
export const Cart = () => {

  // emplea el... useContext
  const { cart, clearCart, removeItem, totalPrice } = useContext(CartContext)

  // SweetAlert - Delete
  const handleDeleteItem = (item) => {

    Swal.fire({
      icon: "question",
      title: `¿Estas seguro que deseas eliminar ${item.name} del carrito? `,
      showCancelButton: true,
      showConfirmButton: true,

    }).then(resp => {
      if (resp.isConfirmed) {
        removeItem(item.id)
        Swal.fire({
          icon: "success",
          title: "Producto eliminado"
        })
      }
    })

  }

  // ----------------------
  return (
    <>


      {/* mapeamos los items en carrito... */}
      {cart.map((item) => (

        <div key={item.id} className="border border-1 border-dark rounded-3  p-3 m-2">
          <h5> {item.name} </h5>
          <p>Cantidad: {item.quantity} </p>
          <p>Precio Unitario: ${item.price} </p>
          <p>Subtotal: ${item.subtotal}</p>

          <button className="btn btn-danger" onClick={() =>  handleDeleteItem(item)}>
            Eliminar
          </button>
        </div>


      ))}
      {

        totalPrice > 0 ?
          // Hay productos...
          <>
            <h2>Total: ${totalPrice}</h2>
            <button className="btn btn-outline-success" onClick={clearCart}>
              Vaciar carrito
            </button>
            <Link to="/checkout">
              <button className="ms-2 btn btn-success">Comprar</button>
            </Link>
          </>
          :
          // Sin productos...
          <h2>( Carrito Vacio )</h2>
      }


    </>



  )
}