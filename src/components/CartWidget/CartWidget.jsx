
import { Link } from 'react-router-dom'

// Cargamos los estilos...
import './CartWidget.css'

export const CartWidget = () => {
  return (
    <>

      <Link to="/cart" className="cart">
        <i className="fas fa-shopping-cart"></i>
        <span className="dot">0</span>
      </Link>

    </>
  )
}