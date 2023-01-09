import { Children } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Main, Menu } from "./components";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Main>
        {/* main tiene children, dentro de main vemos outlet, en app renderizamos o mostramos lo que vamos
        a ver en todas las pantallas, yo podria ooasar por ejmplo un formulario pero co o quiero que el contenido cambie
        voy  utilizar un outlet(es un contenedor de rutas) children es una propiedad de main, children
        es, main es mi contenedor que vas a mostrar lo que yo te mande cmo children(el niño de main)
        children es mas amplio imagen, video, componentes, o outlet que es un contendor de rutas, 
        children podría soportar cualquier tipo de dato, children recibe lo que sea, video imagen, componente
        hasta un outlet de react rooter dom manojo de rutas, ue segunlo que diga mi url voy a ver en pantalla
        outlet esta dentro de children, main renderiza lo que tiene children 
        dentro de la app un div que retorne lo que quiera
        el app renderiza los componentes que coincida con al ruta del url
        en mi pages voya  usar mas cosas, en el layout son cosas mas chiquitas */}
        <div className="container">
          <Outlet />
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default App;

// en la carpeta de components estan los componentes(formulario) y lo que voy a reutilizar en varias pantallas, 
//con props le paso ditinta info. Componentes se escriben en mayuscula.
//layout navar, footer, la plantilla d ela pantallas
//el index de main debe tener un Children.
//outlex y en el index le muestro las opciones. en la parte donde tengas
//main recibe outlet
//outlet es exclusivo de react rooter dom, cajita o contenedor de rutas
//solo renderizo lo que est;a en app.tsx , acá es lo que se va a ver.
//app envuelve a todo el resto, y las rutas a medida que cambia la url me va a ir renderizando, clidren autlt de rutas
//aoutlet o carrusel
//aoutlet manojo de rutas,todas las paginas se van a renderizar en el main  
