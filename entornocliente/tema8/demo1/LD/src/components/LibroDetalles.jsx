import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import "../components/ALL_CSS/componentes/LibroDetalles.css";

const LibroDetalles = ({ libroBuscado }) => {
    if (!libroBuscado) {
        return <p>No se ha encontrado ningún libro.</p>;
    }
    return (
        <section className="libro-detalle">
            <div className="libro-detalle__info">
                <p className="libro-detalle__completado">
                    Estado: {libroBuscado.completado ?
                        <FontAwesomeIcon icon={faCircleCheck} className="libro-detalle__completado--true" title="Leído" /> :
                        <FontAwesomeIcon icon={faCircleXmark} className="libro-detalle__completado--false" title="No leído" />
                    }
                </p>
                <img className="libro-detalle__portada" src={libroBuscado.portada} alt={libroBuscado.titulo} />
                <h2 className="libro-detalle__titulo">{libroBuscado.titulo}</h2>
                <p className="libro-detalle__autor">Autor: {libroBuscado.autor}</p>
                <p className="libro-detalle__sinopsis">{libroBuscado.sinopsis}</p>


            </div>


            <div className="libro-detalle__botones">
                <input type='button' value='Eliminar de la biblioteca' className='boton boton--cancelar' />
                <input type='button' value='&lt; Atrás' className='boton boton--volver' />
            </div>
        </section>
    );
};

export default LibroDetalles;
