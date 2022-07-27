import { useEffect } from "react"
import Pages from "../components/Pages"
import Perfilimg from '../media/perfil.jpg'
const Aboutme = () => {
    useEffect(() => {
        document.title = `Acerca de Mí`
    }, [])

    return (
        <>
            <Pages titulo="Sobre Mi" />

            <section className="container bg-first shadow-purpure rounded-4 my-4 fourth-color">
                <div className="row">

                    <div className="col-lg-5 col-md-12 col-sm-12 py-4">
                        <div className="row align-items-center h-100 justify-content-center">
                            <div className="p-0 shadow-purpure" style={{ width: "450px", height: "450px" }}>
                                <img className="card-img p-3" width="100%" height="100%" src={Perfilimg} alt="perfilgottenpixabay.com" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="row align-items-center h-100">
                            <div className="container px-3">
                                <h1 className="third-color py-2">Antony Yu</h1>
                                <p className='text-light'>Hola, Soy <span className='fourth-color'>Antony</span>, mi pasión por la cocina comenzó desde que era un niño,
                                    cuando veía a mi madre cocinar con tanto amor para la familia.
                                    <br />
                                    <br />
                                    En mis primeros años de adolescencia, cuando estudiaba en la clase de economía,
                                    comencé a cortar todas las recetas de las revistas o a escribirlas en una libreta.
                                    Y las utilizaba como mi guía cuando mi mamá me deja cocinar para la familia.
                                    Desde que cambié de carrera a gastronomia he de confesar que todavía tengo la costumbre de
                                    cortar las recetas y también coleccionar libros de cocina.
                                    <br />
                                    <br />
                                    <span className='fourth-color'>En la Cocina Con Antony</span>, es una recopilación de mis recetas favoritas,
                                    tips para preparar deliciosos platillos
                                    y en este espacio pretendo compartir con ustedes un poquito de los sabores de mi tierra.
                                    Compartiremos un poco de estas recetas que han sido,
                                    son y serán las clásicas de donde he vivido toda mi vida,
                                    y como ha ido evolucionando así,
                                    podremos ponernos al día con la nueva cocina Puñena y Peruana. Asi es, soy Peruano de nacimiento y nacido
                                    en la hermosa ciudad de Puno.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutme