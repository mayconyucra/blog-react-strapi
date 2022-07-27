import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const analizaJSON = (resp) => (resp.json ? resp.json() : resp)

const comprobarRed = (resp) => {
    if (resp.status >= 200 && resp.status < 300) {
        return resp
    }
    return analizaJSON(resp).then(resp => {
        throw resp;
    })
}

const encabezados = { "Content-Type": "application/json" }

const Threecards = () => {
    const [error, seterror] = useState(null)
    const [threecards, setthreecards] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL_BACKEND}api/entradas?pagination[page]=1&pagination[pageSize]=3&sort=id%3Adesc&populate=*`,
            { encabezados, method: 'GET' })
            .then(comprobarRed)
            .then(analizaJSON)
            .then(({ data }) => setthreecards(data))
            .catch((error) => seterror(error))
    }, [])

    if (error) {
        // Print errors if any
        return <div className='bg-third py-4'>Ha ocurrido un error: {error.message}</div>;
    }
    return (
        <>
            <div className="container my-3 py-3">
                <div className="col-12 text-light">
                    <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
                        {
                            !threecards
                                ?
                                <span className='text-light'>Cargando... espere por favor</span>
                                :
                                threecards.map(({id, attributes}) =>
                                    <div className="col" key={id}>
                                        <div className="card h-100 mx-1 shadow-purpure bg-first">
                                            <img src={attributes.portada_entrada.data.attributes.url} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h3 className="card-title mt-2">{attributes.titulo}</h3>
                                                <p className="card-text p-2 word-break">
                                                    {attributes.descripcion}
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <div>
                                                    <Link to={`/blog/${id}`} className="btn btn-primary btn-purpure-default px-4 mb-3">Ver Más</Link>
                                                </div>
                                                <small className="text-light">publicado: {new Date(attributes.publishedAt).toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</small>
                                            </div>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Threecards