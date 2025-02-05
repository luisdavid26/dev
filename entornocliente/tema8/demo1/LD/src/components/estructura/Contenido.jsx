import React, { Fragment } from "react";
import "../ALL_CSS/componentes/estructura/Contenido.css";
import ListadoLibros from "../ListadoLibros.jsx";
const Contenido = () => {
    return (
        <Fragment>
            <main className='main'>    <ListadoLibros />
            </main>
        </Fragment>
    );
};
export default Contenido;