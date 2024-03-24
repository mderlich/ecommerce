// REACT
import { Link } from "react-router-dom";

// COMPONENTES...
import { CartWidget } from '../CartWidget/CartWidget'

// ESTILOS...
import '../NavBar/NavBar.css'

// ************************************************
export const NavBar = () => {
  return (

    <header >

      <Link to="/" className="logo">
        <img src="/img/logo-laundry.png" alt="Logo" />
      </Link>

      <nav className="navbar">

        <Link to="/category/hombre">Hombre</Link>
        <Link to="/category/mujer">Mujer</Link>
        <Link to="/category/ninos">Niños</Link>

        <CartWidget />

      </nav>

    </header>

  )
}
// ************************************************