import { useEffect } from "react"
import Portada from "./homepage/Portada"
import ShortDescription from "./homepage/ShortDescription"
import ShortPerfil from "./homepage/ShortPerfil"
import Threecards from "./homepage/Threecards"
import Tiptoday from "./homepage/Tiptoday"

const Homepage = () => {

    useEffect(() => {
        document.title = `La Sazón de Antony - Página Principal`
    }, [])
    return (
        <>
            <Portada />
            <Threecards />
            <Tiptoday />
            <ShortDescription />
            <ShortPerfil />
        </>
    )
}

export default Homepage