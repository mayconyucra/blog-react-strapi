import { useEffect } from "react"

const Error404 = () => {
    useEffect(() => {
        document.title = `Página no Encontrada`
    }, [])

    return (
        <div className="container bg-first py-5">
            <h1 className="py-5 fourth-color">Ups! La Página no Existe</h1>
        </div>
    )
}

export default Error404