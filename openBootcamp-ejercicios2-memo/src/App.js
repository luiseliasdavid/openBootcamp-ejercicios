import ContactListComponent from "./components/container/contact_list";
import MiComponenteConContexto from "./hooks/ejemplos3";
import Ejemplos4 from "./hooks/ejemplos4";

import './App.css'
import Clock from "./components/container/clock";
import Cuadrado from "./components/container/cuadrado";
import Contador from "./components/container/contador";
function App() {
  return (
    <div >
      <Contador></Contador>
      {/*  <Cuadrado></Cuadrado> */}
     {/*  <Clock></Clock> */}
    {/* <h1>*****ejemplo de props.children********</h1> */}
    {/*  <ContactListComponent></ContactListComponent> */}
   {/*  <MiComponenteConContexto></MiComponenteConContexto> */}
  {/*   <Ejemplos4 nombre="Luis" >
       <h3>
        Contenido del props.children
       </h3>

    </Ejemplos4> */}
    </div>
  );
}

export default App;


