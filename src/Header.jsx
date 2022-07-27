import React, { useState } from 'react'
import Ruta from './components/Nombrerutas'
import { NavLink, Link } from 'react-router-dom'
const Header = () => {
    const [click, setclick] = useState(true)
    const handleClick = (e) => {
        e.preventDefault()
        setclick(false)
    }

    return (
        <>
            <div className={`bg-success ${click ? `d-block` : `d-none`}`}>
                <span className="text-light text-center d-block py-1">
                    Este Blog solo fue hecho con fines de práctica de programación, los recursos como imagenes fueron obtenidas de
                    <a className="text-light" href="https://pixabay.com" target="_pixabay"> Pixabay</a>.
                    <button onClick={handleClick} className="text-light bg-danger p-1 mx-1 border-danger"> Entendido X.</button>
                </span>
            </div>

            <div className="col">
                <Link to={Ruta.homepage} className='d-block text-decoration-none text-center fourth-color py-3 display-3'>La Sazón de Antony</Link>
            </div>

            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid px-4">
                    <button className="navbar-toggler bg-fifeth" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon " />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link mx-3 fourth-color primary-border" : "nav-link mx-3 text-light"}
                                to={Ruta.homepage}
                            >Inicio
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link mx-3 fourth-color primary-border" : "nav-link mx-3 text-light"}
                                to={Ruta.blog}
                            >Blog
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link mx-3 fourth-color primary-border" : "nav-link mx-3 text-light"}
                                to={Ruta.recetas}
                            >Recetas
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link mx-3 fourth-color primary-border" : "nav-link mx-3 text-light"}
                                to={Ruta.aboutme}
                            >Acerca de Mi
                            </NavLink>
                            <NavLink
                                className={({ isActive }) => isActive ? "nav-link mx-3 fourth-color primary-border" : "nav-link mx-3 text-light"}
                                to={Ruta.contact}
                            >Contáctame
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header