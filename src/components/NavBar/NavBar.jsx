import { Link } from "react-router-dom";

// Cargamos los estilos...
import { CartWidget } from '../CartWidget/CartWidget'
import '../NavBar/NavBar.css'

export const NavBar = () => {
  return (

    <>
      <header >

        <Link to="/" className="logo">
          <img src="./img/logo-laundry.png" alt="Logo" />
        </Link>

        <nav className="navbar">

          <Link to="/genero/hombre">Hombre</Link>
          <Link to="/genero/mujer">Mujer</Link>
          <a href="#"><i className="fas fa-search"></i></a>
          <a href="#"><i className="fas fa-heart"></i></a>

          <CartWidget />

        </nav>

      </header>
    </>
  )
}