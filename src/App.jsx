import { useState, useEffect } from 'react';
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes";


function App() {

  const [pacientes, setPacientes] = useState([]);
  //paciente objeto
  const [paciente, setPaciente] = useState({});

  useEffect( ()=>{
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      pacientesLS.length > 0 && setPacientes(pacientesLS);
      //setPacientes(pacientesLS);
    }
    obtenerLS();

  }, []);

  useEffect( ()=>{
    //console.log("componente listo o cambio paciente");
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes]);

  const eliminarPaciente = (id) =>{
    //console.log('eliminando paciente', id);
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id )
    //console.log(pacientesActualizados)
    setPacientes(pacientesActualizados)
  }


  /*
  const imprime2mas2 = () =>{
    console.log(2 + 2)
  }
  */



  return (
   <div className="container mx-auto mt-20">
    <Header
    />
    <div className="mt-12 md:flex">
      <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListadoPacientes
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
      />
    </div>
   
   </div>
  )
}
export default App;

