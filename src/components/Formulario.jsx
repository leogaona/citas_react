import { useState, useEffect } from 'react';
import React from 'react';
import Error from './Error';
//import Select from "@/Components/Select";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [status, setStatus] = useState('');

  const [error, setError] = useState(false);

  const handleEstadoChange = (event) => {
    setStatus(event.target.value);
  }
  
  useEffect(()=>{
    
    //console.log(paciente)
    
    if( Object.keys(paciente).length > 0  ){
      //console.log('si hay algo')
      //console.log(paciente.nombre)
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
    
    /*
    else{
      console.log('no hay nada')
    }
    */
  }, [paciente]);

  //console.log(paciente)


  /// Generar un key para recorrer 
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    
    return random + fecha 
  }

  //setNombre('Hook');
  //console.log(nombre);


  ///>Validacion de campos
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      //console.log('al menos un campo esta vacio')
      setError(true)
      return;
    }
    //}else{
      //console.log('todos llenos')
    //}
    setError(false)
    const objetoPaciente ={
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      //id: generarId()
    }
    


    if(paciente.id){
      // editando el registro
      objetoPaciente.id = paciente.id

      console.log(objetoPaciente)
      console.log(paciente)

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === 
        paciente.id ? objetoPaciente : pacienteState )   
        //actualiza
        setPacientes(pacientesActualizados)
        setPaciente({})
        

    }else{
      // nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente])
    }


    
    ///>Reiniciar 
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
    //console.log('enviando formulario');
  }

  return (

    
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Anade Pacientes y {''}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5" onSubmit={handleSubmit}>
       {/* { error && <Error mensaje='Todos los cambios son obligatorios' />} */}
       { error && 
                  <Error>
                    <p>Todos los cambios son obligatorios</p> 
                  </Error> 
        }
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input type="text" id="mascota" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={nombre}
          onChange={(e)=> setNombre(e.target.value)}
          />

        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input type="text" id="propietario" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={propietario}
          onChange={(e)=> setPropietario(e.target.value)}
          />

        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input type="email" id="email" placeholder="Email contacto propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          />


        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input type="date" id="alta" placeholder="alta" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={fecha}
          onChange={(e)=> setFecha(e.target.value)}
          />
          
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          value={sintomas}
          onChange={(e)=> setSintomas(e.target.value)}
          />
          
        </div>


        <div className="mb-5">
            <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
            >
                Status
            </label>
            <div className="mt-1">
                <select
                    id="status"
                    name="status"
                    onChange={
                      handleEstadoChange
                    }
                    value={status}
                >
                <option value="">Selecciona una opción</option>
                <option value="1">Activo</option>
                <option value="0">Inactivo</option>
                </select>
            </div>
        </div>

      <input type="submit" className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'} />


      </form>
    </div>
  )
}

export default Formulario
