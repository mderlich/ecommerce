// Cargamos los componentes...
import { Contenedor } from "./components/Contenedor/Contenedor"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"


function App() {
  

  return (
    <>


      <NavBar/>
      
      <main>
        <ItemListContainer greeting={'Bienvenidos'} />
        <Contenedor/>
      </main>
      
      <footer>
        Hecho con <i class="fas fa-heart"></i> desde Argentina
      </footer>
    </>
  )
}

export default App
