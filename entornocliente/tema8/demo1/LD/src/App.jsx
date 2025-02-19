import { Fragment } from 'react';
import Cabecera from './components/estructura/Cabecera';
import Navegacion from './components/estructura/Navegacion';
import Contenido from './components/estructura/Contenido';
import PiePagina from './components/estructura/PiePagina';
import Rutas from './components/estructura/Rutas';
import "./components/ALL_CSS/App.css";

const App = () => {
  return (
    <Fragment>
      <Cabecera />
      <Navegacion />
      <Rutas />
      <Contenido />
      <PiePagina />
    </Fragment>
  );
};

export default App;
