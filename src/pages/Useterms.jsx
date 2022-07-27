import { useEffect } from "react"
import Pages from "../components/Pages"

const Useterms = () => {
    useEffect(() => {
        document.title = `Términos de Uso y Condiciones`
    }, [])

    return (
        <>
            <Pages titulo="Términos de Uso" />

            <div className="container bg-first">
                <h1 className="py-5 fourth-color">Términos de Uso ...</h1>
            </div>
        </>
    )
}
export default Useterms