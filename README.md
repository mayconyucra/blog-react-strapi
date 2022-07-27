# Sitio Web usando React, Strapi, Railway, Netlify y Vite

Este proyecto se implementó con Vite, front-end hecho en React y desplegado en Netlify, backend hecho con Strapi y desplegado en Railway, y Vite.


View: https://blog-react-strapi.netlify.app/

### ------- React Router on Netlify ---------------

Por defecto al instalar "React Router" y manejar las rutas; por ende para crear el famoso 404
hacemos en React lo siguiente:

`<Routes>`
`   <Route path:"/*" element = { <YourComponent404 /> } />`
`</Routes>`

Esto funciona si, pero para Netlify no lo reconoce, al escribir una url que no se ha definido en la aplicación React,
Netlify no lo reconoce y lo redirecciona a sus propios manejadores de rutas.

Entonces lo que hacemos es crear un archivo llamado "_redirects" asi sin extensión
y escribir lo siguiente:

"/* /html 200"

y ese archivo _redirects ponerlo en la carpeta public de tu aplicación 

finalmente constuir la app mediante npm run build y subir la carpeta build a netlify
