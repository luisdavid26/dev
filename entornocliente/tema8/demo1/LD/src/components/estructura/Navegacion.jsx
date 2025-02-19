import React, { Fragment } from "react";
import "../ALL_CSS/componentes/estructura/Navegacion.css";
import { NavLink } from "react-router-dom";
const Navegacion = () => {
    return (
        <Fragment>
            <nav className='menu'>
                <ul className='menu__list'>
                    <li className='menu__item'>
                        <NavLink to='/'
                            className={
                                ({ isActive }) => isActive ? `menu__link menu__link--activo` : `menu__link`
                            }
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink to='/crear'
                            className={
                                ({ isActive }) => isActive ? `menu__link menu__link--activo` : `menu__link`
                            }
                        >Crear libro</NavLink>
                    </li>
                    <li className='menu__item'>
                        <NavLink to='/buscar'
                            className={
                                ({ isActive }) => isActive ? `menu__link menu__link--activo` : `menu__link`
                            }
                        >Buscar libros</NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>
    );
};
export default Navegacion;