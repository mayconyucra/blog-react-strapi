import { useState, useEffect } from "react"


const Tiptoday = () => {
    const [tip, setTip] = useState([])

    useEffect(() => {
        CallApiTip();
    }, [])
    const CallApiTip = async () => {
        try {
            const dataTip = await fetch(`${import.meta.env.VITE_URL_BACKEND}api/tips?pagination[page]=1&pagination[pageSize]=1&sort=id%3Adesc&populate=*`)
            const result = await dataTip.json()
            setTip(result.data[0])
        } catch (error) {
            setTip(false)
        }
    }

    return (
        <>
            {
                tip && tip.length < 1 ?
                    <div className="container py-5">
                        cargando...
                    </div>
                    :
                    <div className="container my-3 bg-fifeth py-4 rounded-4 shadow-purpure">
                        <div className="row">
                            <div className="col-lg-7 col-md-12 py-3">
                                <h1 className="display-4 text-center m-0 primary-color">El Tip del Día</h1>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <span className="d-flex align-items-center h-100 justify-content-end justify-content-md-center justify-content-sm-center px-4 py-2 h3">
                                    {new Date(tip.attributes.publishedAt).toLocaleDateString("es-ES", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                            </div>
                        </div>
                        <div className="row flex-column-reverse flex-lg-row h-100">
                            <div className="col-lg-7 d-flex align-items-center">
                                <div className="row">
                                    <h1 className="text-center py-4">{tip.attributes.titulo_tip}</h1>
                                    <p className="d-block px-4"> {tip.attributes.desc_tip}</p>
                                </div>
                            </div>
                            <div className="col-lg-5 my-3" style={{ height: "290px" }}>
                                <img src={tip.attributes.img_tip.data.attributes.url} alt={tip.attributes.img_tip.data.attributes.hash} className="card-img h-100 rounded shadow-purpure" />
                            </div>
                        </div>
                    </div>
            }
        </>

    )
}

export default Tiptoday

/*

            <div className="container my-3 third-color bg-second py-4 rounded-4 shadow-purpure">
                <div className="row">
                    <div className="col-lg-7 col-md-12 py-3">
                        <h1 className="display-4 text-center m-0">El Tip del Día</h1>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <span className="d-flex align-items-center h-100 justify-content-end justify-content-md-center justify-content-sm-center px-4 py-2 h3">fecha de Hoy</span>
                    </div>
                </div>
                <div className="row flex-column-reverse flex-lg-row h-100">
                    <div className="col-lg-7 d-flex align-items-center">
                        <div className="row">
                            <h1 className="text-center py-4">Secreto para una buena coccion de arroz</h1>
                            <p className="d-block px-4"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis accusantium illo possimus aliquam amet voluptates, est facilis perspiciatis qui, odio, dolor similique mollitia expedita harum iusto nisi ab dolores laboriosam.
                                Maiores asperiores id ab molestiae! Recusandae, doloribus quo! Quos facere, molestias perspiciatis iure obcaecati veritatis sed repellendus, ad laudantium nesciunt architecto dignissimos provident. Ullam, magni doloremque? Quasi modi expedita aliquid.</p>
                        </div>
                    </div>
                    <div className="col-lg-5 my-3" style={{ height: "390px" }}>
                        <img src="https://cdn.pixabay.com/photo/2019/02/15/03/28/rice-3997767_960_720.jpg" alt="arrozxd" className="card-img h-100 rounded shadow-purpure" />
                    </div>
                </div>
            </div> */