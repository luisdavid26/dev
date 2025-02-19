import React, { Fragment } from "react";
import LibroDetalles from "../LibroDetalles"; // Asegúrate de que este componente existe
import "../ALL_CSS/componentes/paginas/Mostrar.css";

const Mostrar = () => {
    const libro = {
        id: "85f06643-f095-4a85-9d93-b9a78eb48r54",
        titulo: "Yo, robot",
        autor: "Isaac Asimov",
        portada: "https://imagessl0.casadellibro.com/a/l/t7/40/9788435021340.jpg",
        completado: false,
        sinopsis:
            "Esta obra visionaria tuvo una gran influencia en la ciencia ficción posterior, pero también en la propia ciencia de la robótica. Asimov formuló por primera vez las tres leyes fundamentales de la robótica, con claras implicaciones éticas y psicológicas...",
    };

    return (
        <Fragment>
            <section className='mostrar'>
                {libro
                    ? <LibroDetalles libroBuscado={libro} />
                    : "No se ha encontrado ningún libro."
                }
            </section>
        </Fragment>
    );
};

export default Mostrar;
