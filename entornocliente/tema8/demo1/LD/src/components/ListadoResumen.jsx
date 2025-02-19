import React,{ Fragment, useEffect, useState } from "react";

import "./ALL_CSS/componentes/ListadoResumen.css"
const ListadoResumen=((props))=>{
    const [cantidad,setCantidad]=useState(0);
    const contarLibros=()=>{
        setCantidad(biblioteca.length);
    }
    useEffect(()=>{
        contarLibros();
        console.log(`la biblioteca contiene ${cantidad} libros`);
    },props.biblioteca,cantidad,contarLibros)
    return(
        <Fragment>
            la biblioteca tiene ${cantidad};
        </Fragment>
    )
}