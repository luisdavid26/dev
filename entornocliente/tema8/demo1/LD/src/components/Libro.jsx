import React, { Fragment } from "react";
import "./ALL_CSS/componentes/Libro.css"
import sin_portada from "../assets/sin_portada.png";
const Libro = (props) => {
    // Se usa la desestructuración de objetos para recoger los datos que interesan.
    const { portada, titulo, autor, id } = props;
    return (
        <Fragment>
            <article id={id ? id : crypto.randomUUID()} className='libro'>
                <img className='libro__portada'
                    src={portada ? portada : sin_portada}
                    width="150"
                ></img>
                <div className='libro__titulo'>
                    {titulo ? titulo : "No se ha especificado título."}
                </div>
                <div className='libro__autor'>
                    {autor ? autor : "No se ha especificado autor."}
                </div>
            </article>
        </Fragment>
    );
};
export default Libro;