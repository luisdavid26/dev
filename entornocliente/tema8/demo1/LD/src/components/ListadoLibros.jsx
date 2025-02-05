import React, { Fragment } from "react";
import "./ALL_CSS/componentes/ListadoLibros.css";
import biblioteca from "../assets/biblioteca.json";
import Libro from "./Libro.jsx";
const ListadoLibros = () => {
    return (
        <Fragment>
        <h2>Listado de libros</h2>
        {/* Si libros es un array y contiene algún elemento... */}
        {Array.isArray(biblioteca.libros) && biblioteca.libros.length
        ? /* ...se recorre el array mostrando los libros. */
        biblioteca.libros.map((datos_libro) => {
        return (
        <Libro
        key={datos_libro.id}
        id={datos_libro.id}
        titulo={datos_libro.titulo}
        autor={datos_libro.autor}
        portada={datos_libro.portada}
        />
        );
        })
        : /* ...o se muestra un mensaje en su lugar. */
        "No se han encontrado libros."}
        </Fragment>
        );
};
export default ListadoLibros;