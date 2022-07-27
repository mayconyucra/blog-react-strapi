import { Link } from 'react-router-dom'
import Ruta from '../components/Nombrerutas'
import perfil from "../media/perfil.jpg"
const ShortPerfil = () => {
    return (
        <>
            <div className="container my-4 shadow-purpure rounded-4 bg-fifeth" >
                <div className="row d-flex" >
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="row align-items-center h-100">
                            <h1 className="display-5 primary-color text-center py-3">Hola, Soy Antony...</h1>
                            <span className="d-block text-center h4">Creador del Blog, amante de la cocina.</span>
                            <div className="text-center">
                                <Link to={Ruta.aboutme} className="btn btn-primary btn-purpure-default px-4 py-3 mb-3">Conóceme {`>`}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12" style={{ height: "370px" }}>
                        <div className="row d-flex align-items-center h-100 justify-content-center">
                            <div className="p-0 bg-first shadow-purpure rounded-circle" style={{ width: "300px", height: "300px" }}>
                                <img className="card-img rounded-circle p-4" width="100%" height="100%" src={perfil} alt="perfilgottenpixabay.com" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShortPerfil