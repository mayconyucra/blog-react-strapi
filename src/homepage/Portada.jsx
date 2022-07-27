import { useEffect, useState } from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
// Parses the JSON returned by a network request
const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// Checks if a network request came back fine, and throws an error if not
const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  }

  return parseJSON(resp).then((resp) => {
    throw resp;
  });
};

const headers = { "Content-Type": "application/json" };

const Portada = () => {
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL_BACKEND}api/portada?populate=*`, {
      headers,
      method: "GET",
    })
      .then(checkStatus)
      .then(parseJSON)
      .then(({ data }) => setImages(data.attributes.images.data))
      .then((error) => setError(error));
  }, []);

  if (error) {
    return (
      <div className="bg-danger container text-center">
        Ha ocurrido un error: {error.message}
      </div>
    );
  }
  const imagenes = images.map((item) => ({
    src: `${item.attributes.url}`,
  }));

  return (
    <>
      <div className="container my-5 container-carousel-app bg-second rounded-4 p-0 shadow-purpure">
        <Carousel
          className=""
          images={imagenes}
          isLoop
          isAutoPlaying
          hasMediaButton={false}
          hasSizeButton={false}
          hasIndexBoard={false}
          hasThumbnails={false}
          shouldSwipeOnMouse={false}
          objectFit="cover"
        />
      </div>
      <div className="container py-3">
        <h1 className="text-center fourth-color display-4">
          Blog Dedicado a la Cocina Casera
        </h1>
        <span className="d-block text-center text-light h4">
          Disfruta de algunas recetas que tenemos para ti...
        </span>
      </div>
    </>
  );
};

export default Portada;
