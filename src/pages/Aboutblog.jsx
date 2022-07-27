import { useEffect } from "react"
import Pages from "../components/Pages"
const Aboutblog = () => {
    useEffect(() => {
        document.title = `Sobre el Sitio`
    }, [])

    return (
        <>

            <Pages titulo="Sobre el Blog" />

            <div className="container bg-first">
                <h1 className="py-5 fourth-color">Sobre el Blog aqui</h1>
            </div></>
    )
}

export default Aboutblog
