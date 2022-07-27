import { useEffect } from "react"
import Pages from "../components/Pages"

const Privacy = () => {
    useEffect(() => {
        document.title = `Política de Privacidad y Datos`
    }, [])

    return (
        <>
            <Pages titulo="Política de Privacidad y Datos" />

            <div className="container bg-first">
                <h1 className="py-5 fourth-color">Política de Privacidad Y Datos</h1>
            </div>
        </>
    )
}
export default Privacy
