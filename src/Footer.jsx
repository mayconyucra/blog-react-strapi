import { Link } from 'react-router-dom'
import Ruta from './components/Nombrerutas'
const Footer = () => {
    return (
        <>
            <footer className="container-fluid bg-first fourth-color mt-5 py-3">
                <div className="col d-flex justify-content-center py-2 ">
                    <a href="https://fb.com" target="_face" className="py-2">
                        <i className="bi bi-facebook h1 m-3 btn-purpure-default px-3" />
                    </a>
                    <a href="https://instagram.com" target="_insta" className="py-2">
                        <i className="bi bi-instagram h1 m-3 btn-purpure-default px-3"></i>
                    </a>
                    <a href="https://twitter.com" target="_twitt" className="py-2">
                        <i className="bi bi-twitter h1 m-3 btn-purpure-default px-3"></i>
                    </a>
                </div>
                <div className="col d-flex justify-content-center py-3">
                    <Link to={Ruta.terms} className="text-decoration-none h3 btn-purpure-default px-3 text-center">Términos de Uso</Link>
                    <Link to={Ruta.privacy} className="text-decoration-none h3 btn-purpure-default px-3 text-center">Aviso de Privacidad</Link>
                    <Link to={Ruta.aboutblog} className="text-decoration-none h3 btn-purpure-default px-3 text-center">Sobre el Blog</Link>
                </div>
                <div className="row">
                    <span className="d-block text-center py-3">&copy; 2022 Antony - Todos los derechos reservados.</span>
                </div>
            </footer>
        </>
    )
}

export default Footer