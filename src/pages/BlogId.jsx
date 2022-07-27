import {useParams} from "react-router-dom"
import { useEffect, useState } from "react"

const parseJSON = (resp) => (resp.json ? resp.json() : resp);

const ckeckStatus = (resp) => {
    if (resp.status >= 200 && resp.status < 300) {
        return resp;
    }
    return parseJSON(resp).then(resp => {
        throw resp;
    })
}
const headers = { 'Content-Type': 'application/json' }

const BlogId = () => {
    const {id} = useParams();
    
    const [error, seterror] = useState(null)
    const [blogId, setblogId] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL_BACKEND}api/entradas/${id}?populate=*`, { headers, method: "GET" })
            .then(ckeckStatus)
            .then(parseJSON)
            .then(({ data }) => setblogId(data))
            .catch((error) => seterror(error))
    }, [id])
    if (error) {
        return <div className="container bg-fourth py-4">
            <span className="h3 primary-color">Ha ocurrido un error</span>
            <br />
            <span className="primary-color"> {error.message}</span>
        </div>
    }

    return (
        <>
            {

                blogId && blogId.length < 1 ?
                    <>
                        <div className="container bg-fourth py-4">
                            <span className="h3 primary-color">Cargando</span>
                            <br />
                            <span className="primary-color"> Por favor espere</span>
                        </div>
                    </>
                    :
                    <>
                        <div className="container-fluid bg-first my-5 ">
                            <div className="container px-4 bg-second py-4">
                                <div className="container p-0 portada-blogid mb-4">
                                    <div className="container-fluid h-100 p-0 img-blogId">
                                        <img
                                            className="card-img"
                                            src={blogId.attributes.portada_entrada.data.attributes.url}
                                            alt={blogId.attributes.portada_entrada.data.attributes.hash}
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                    <div className="container-fluid d-flex align-items-end p-0 h-100 title-blogId pb-3">
                                        <h1 className="fourth-color d-block py-4 mx-5 display-3 fw-bolder">{blogId.attributes.titulo}</h1>
                                    </div>

                                </div>

                                <div className="container py-3">
                                    <span className=" d-block py-4 text-light">
                                        {new Date(blogId.attributes.publishedAt).toLocaleDateString(
                                            "es-ES",
                                            {
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            }
                                        )
                                        }</span>
                                    <h1 className="fourth-color display-4 py-3">{blogId.attributes.titulo}</h1>
                                    <p className="text-light d-block py-3">{blogId.attributes.descripcion}</p>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default BlogId