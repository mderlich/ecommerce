

// Cargamos los estilos...
import { CartWidget } from '../CartWidget/CartWidget'
import '../NavBar/NavBar.css'

export const NavBar = () => {
  return (
    
    <>
        <header >

        <a href="" class="logo">
          <img src="./img/logo-laundry.png" alt="Logo" />
        </a>

        <nav class="navbar">
          
          <a href="#">Hombre</a>
          <a href="#">Mujer</a>
          <a href="#">Accesorios</a>
          <a href="#">Gift Cards</a>
          <a href="#"><i class="fas fa-search"></i></a>
          <a href="#"><i class="fas fa-heart"></i></a>

          <CartWidget/>
          
        </nav>

        </header>
    </>
  )
}