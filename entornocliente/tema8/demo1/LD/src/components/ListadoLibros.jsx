import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Libro from "./Libro.jsx";
import biblioteca from "../assets/bbdd/biblioteca.json";
import "./ListadoLibros.css";
const ListadoLibros = () => {
    // Estado para este componente.
    const [biblioteca, setBiblioteca] = useState([]);
    // Funciones para manejar el estado.
    const inicializarBiblioteca = () => { setBiblioteca(coleccion.libros); }
    const borrarBiblioteca = () => { }
    const inventarLibro = () => {
        return {
            id: crypto.randomUUID(),
            titulo: "Yo, robot",
            autor: "Isaac Asimov",
            portada: "https://imagessl0.casadellibro.com/a/l/t7/40/9788435021340.jpg",
            completado: false,
            sinopsis: "Esta obra visionaria tuvo una gran influencia en la ciencia ficción posterior, pero también en la propia ciencia de la robótica. Asimov formuló por primeravez las tres leyes fundamentales de la robótica, con claras implicaciones éticas ypsicológicas. ¿Qué diferencia hay entre un robot inteligente y un ser humano? ¿Puede elcreador de un robot predecir su comportamiento? ¿Debe la lógica determinar lo que es mejor para la humanidad? Yo, robot conecta entre sí una serie de historias de todo tipo de máquinas inteligentes a través de la robopsicóloga Susan Calvin.Estos robots son cada vez más perfectos y llegan a desafiar en ocasiones a sus creadores.",
        };
    }; const insertarLibro = (libroAInsertar) => {...}
    useEffect(() => {
        inicializarBiblioteca(); // Se cargan los datos del estado.
    }, []);
    useEffect(() => {
        contarLibros();
        console.log(`La biblioteca contiene ${cantidad} libro(s).`);
    }, [biblioteca]);
    const contarLibros = () => {
        setCantidad(biblioteca.length);
    };
    return (

        <Fragment>
            <div>
                La biblioteca contiene {cantidad ? ` ${cantidad} libro(s).` : " cero libros."}
            </div>
            <div>
                <button className='boton' onClick={() => { inicializarBiblioteca }} > Cargar libros </button>
                <button className='boton' onClick={() => { borrarBiblioteca }} > Borrar biblioteca </button>
                <button className='boton' onClick={() => { insertarLibro }} > Insertar libro </button>
            </div >
            <section className='listado'>
                {Array.isArray(biblioteca) && biblioteca.length
                    ? biblioteca.map((datos_libro) => {
                        return (
                            <Link key={datos_libro.id} to='/mostrar' className='listado__libro'>
                                <Libro key={datos_libro.id} datos={datos_libro} />
                            </Link>
                        );
                    })
                    : "No se han encontrado libros."}
            </section>
            <listadoResumen biblioteca={biblioteca} />
        </Fragment >
    );
};
export default ListadoLibros;