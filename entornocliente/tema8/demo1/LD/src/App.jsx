
import './App.css'
import Libro from './components/Libro'
import bibioteca from './assets/biblioteca.json'
import Cabecera from './components/estructura/Cabecera'
import Contenido from './components/estructura/Contenido'
import Navegacion from './components/estructura/Navegacion'
import PiePagina from './components/estructura/PiePagina'
const App=()=> {
  return (
    <>
    <Cabecera />
    <Navegacion />
    <Contenido />
    <PiePagina />

    </>
  )
}

export default App
