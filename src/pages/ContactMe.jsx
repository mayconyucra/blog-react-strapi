import { useEffect } from "react"
import Pages from "../components/Pages"

const ContactMe = () => {
    useEffect(() => {
        document.title = `Contacto`
    }, [])

    return (
        <>
            <Pages titulo="Contáctame" />

            <div className="container my-4 bg-first rounded-4 fourth-color">
                <div className="col py-3">
                    <h1 className="text-center pt-3">Envíame un Mensaje</h1>
                </div>
                <div className="col">
                    <span className="d-block text-center">¿Tiene alguna duda o sugerencia, o solo desea saludarme? :)</span>
                </div>
                <div className="row">
                    <div className="d-flex align-items-center justify-content-center col-lg-5 col-md-12 col-sm-12">
                        <div className="py-3 h5">
                            <div className="py-2">
                                <i className="bi bi-geo-alt-fill m-3 px-3"> Puno - Perú</i>
                            </div>
                            <div className="py-2">
                                <i className="bi bi-telephone-fill m-3 px-3"> +51 xxxx - xxxx </i>
                            </div>
                            <div className="py-2">
                                <i className="bi bi-envelope-fill m-3 px-3"> user@example.com</i>
                            </div>
                            <div className="text-center py-2 d-inline-block">
                                <a href="/" >
                                    <i className="bi bi-facebook m-3 btn-purpure-default px-3" />
                                </a>
                                <a href="/">
                                    <i className="bi bi-youtube m-3 btn-purpure-default px-3" />
                                </a>
                                <a href="/">
                                    <i className="bi bi-instagram m-3 btn-purpure-default px-3" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12 col-sm-12 py-4">
                        <form className="py-3 m-3">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Sus Nombres</label>
                                <input
                                    type="text"
                                    className="form-control form-style-app"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Su Correo Eelctrónico</label>
                                <input
                                    type="email"
                                    className="form-control form-style-app"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Su Mensaje</label>
                                <textarea
                                    className="form-control form-style-app"
                                    id="exampleFormControlTextarea1"
                                    rows="4"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary btn-purpure-default px-4 my-3">Enviar</button>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ContactMe