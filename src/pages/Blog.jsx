import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Pages from "../components/Pages"

//analiza el json devuelto por la solicitud de red
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

//comprueba si la solicitud devolvio exito y error si no lo hizo
const checkstatus = (resp) => {
    if (resp.status >= 200 && resp.status < 300) {
        return resp;
    }
    return parseJSON(resp).then(resp => {
        throw resp;
    })
}
const headers = { 'Content-Type': 'application/json' };


const Blog = () => {
    useEffect(() => {
        document.title = `Blog de Recetas`
    }, [])



    const [error, setError] = useState(null)
    const [datablog, setdatablog] = useState([])
    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_URL_BACKEND}api/entradas?pagination[page]=1&pagination[pageSize]=4&sort=id%3Adesc&populate=*`,
            { headers, method: 'GET' })
            .then(checkstatus)
            .then(parseJSON)
            .then(({ data }) => setdatablog(data))
            .catch((error) => setError(error))
    }, [])

    if (error) {
        return <>
            <Pages titulo="El Blog de Antony" />

            <div className="container py-5 bg-second">
                <h1 className="text-center text-light">Ups! algo salió mal... espere por favor</h1>
                <br />
                <span className="text-light">{error.message}</span>
            </div>
        </>
    }

    return (
        <>
            <Pages titulo="El Blog de Antony" />

            <div className="container pb-4">
                <h1 className="text-light">Principales Entradas</h1>
            </div>
            <div className="container-fluid fourth-color mt-3 p-0">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12 ">

                            {
                                datablog.map(({ id, attributes }) =>

                                    <div key={id} className="container px-lg-4 px-md-0 px-sm-0 mb-4">
                                        <div className="row bg-second shadow-purpure rounded overflow-hidden">
                                            <div className="col-lg-4 col-md-12 col-sm-12 p-0 blog-card-img">
                                                <img src={attributes.portada_entrada.data.attributes.url} alt="..." width="100%" height="100%" />
                                            </div>
                                            <div className="col-lg-8 col-md-12 col-sm-12 pt-4">
                                                <div className="container-fluid">
                                                    <h3 className="text-light m-0">{attributes.titulo}</h3>
                                                </div>
                                                <div className="container-fluid">
                                                    <p className="text-light pt-3 word-break">
                                                        {attributes.descripcion}
                                                    </p>
                                                </div>
                                                <div className="container-fluid">
                                                    <Link to={`/blog/${id}`} className="btn btn-purpure bg-fifeth primary-color px-4 my-3">Ver Más</Link>
                                                </div>
                                                <div className="container-fluid">
                                                    <small className="d-block mb-1">Publicado:
                                                        {new Date(attributes.publishedAt).toLocaleDateString(
                                                            "es-ES",
                                                            {
                                                                weekday: 'long',
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric'
                                                            }
                                                        )
                                                        }
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <h1 className="pr-3 m-0 text-light"> Ver También</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Blog