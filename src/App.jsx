/// importar elementos de React Router
import { Routes, Route } from "react-router-dom";

///importar rutas establecidas
import Ruta from "./components/Nombrerutas"

/// elementos de todo el App
import Footer from "./Footer";
import Header from "./Header";

//Principales paginas
import Homepage from "./Homepage";
import Blog from "./pages/Blog";
import Recetas from "./pages/Recetas";
import Aboutme from "./pages/Aboutme";
import ContacMe from "./pages/ContactMe";

/// Paginas Secundarias
import UseTerms from "./pages/Useterms";
import Privacy from "./pages/Privacy";
import Aboutblog from "./pages/Aboutblog";

/// 404 not Found
import Error404 from "./Error404";
import BlogId from "./pages/BlogId";


const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path={Ruta.homepage} element={<Homepage />} />
        <Route path={Ruta.blog} element={<Blog />} />
        <Route path={Ruta.blogId} element ={<BlogId />} />
        <Route path={Ruta.recetas} element={<Recetas />} />
        <Route path={Ruta.aboutme} element={<Aboutme />} />
        <Route path={Ruta.contact} element={<ContacMe />} />

        <Route path={Ruta.terms} element={<UseTerms />} />
        <Route path={Ruta.privacy} element={<Privacy />} />
        <Route path={Ruta.aboutblog} element={< Aboutblog />} />

        <Route path="*" element={< Error404 />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App