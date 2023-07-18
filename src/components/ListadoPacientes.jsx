import React from 'react'
import Paciente from './Paciente'
import { useEffect } from 'react'


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  //console.log(pacientes)
  
  
  /*
  useEffect(() => {
    if(pacientes.length >0){
      console.log("nuevo paciente")
    }
    
  }, [pacientes])
  */
  

  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      { pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>listado pacientes</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold text-xl'>
              Pacientes y Citas
            </span>
          </p>
          { pacientes.map( (paciente) => (
            <Paciente 
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : 
          <>
            <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
            Comienza agregando Pacientes{''}
              <span className='text-indigo-600 font-bold text-xl'>
                y apareceran en este lugar
              </span>
            </p>
          </>
      }
      
      
      {/* 
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/> 
      <Paciente/>
      */}
      

    </div>
    
  )
}

export default ListadoPacientes