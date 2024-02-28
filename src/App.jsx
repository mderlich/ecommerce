// NAVEGACION
import { BrowserRouter, Route, Routes } from "react-router-dom";


// COMPONENTES... 
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { Cart } from "./components/Cart/Cart";

// -----------------------------

const App = () => {




  return (
    <>

      <BrowserRouter>

        <NavBar />

        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
            <Route path="/genero/:genero" element={ <ItemListContainer/> } />

            <Route path="/cart" element={ <Cart/> } />
            
            {/* PAGINA DE ERROR */}
            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        </main>

        <footer>
          Hecho con <i className="fas fa-heart"></i> desde Argentina
        </footer>

      </BrowserRouter>

    </>
  )
}

export default App
