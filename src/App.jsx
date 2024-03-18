// NAVEGACION
import { BrowserRouter, Route, Routes } from "react-router-dom";


// COMPONENTES... 
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { Cart } from "./components/Cart/Cart";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";

// -----------------------------

const App = () => {




  return (
    <>

      <CartContextProvider>
        <BrowserRouter>
          <NavBar />

          <main>
            <Routes>

              <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />

              {/* PAGINA DE ERROR */}
              <Route path="*" element={<h1>Error 404</h1>} />

            </Routes>
          </main>

          <footer>
            Hecho con <i className="fas fa-heart"></i> desde Argentina
          </footer>

        </BrowserRouter>
      </CartContextProvider>

    </>
  )
}

export default App
