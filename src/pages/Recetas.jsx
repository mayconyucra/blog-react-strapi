import { useEffect } from "react"
import Pages from "../components/Pages"

const Recetas = () => {
    useEffect(() => {
        document.title = `Recetas Al Gusto`
    }, [])

    return (
        <>
            <Pages titulo="Recetas Al Gusto" />

            <div className="container bg-first">
                <h1 className="py-5 fourth-color">Recetas aqui</h1>
            </div>
        </>
    )
}
export default Recetas