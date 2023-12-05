import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react'
import '../App.css'
import Creador_Tareas from '../componentes/Creador_Tareas';
import Popup_Crear_Tarea from '../componentes/Popup_Crear_Tarea';
import axios from 'axios';
import Popup_Editar_Tarea from '../componentes/Popup_Editar_Tarea';
import { AuthContext } from '../auth/AuthContext';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';


function Tareas() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [tareas, setTareas] = useState([]);
    const [nombreusuario, setNombreUsuario] = useState("");
    const [nombre_tarea, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha_termino, setFechaTermino] = useState('');
    const [clasificacion, setClasificacion] = useState('');
    const [estado, setEstado] = useState('');
    const [filter, setFilter] = useState('');
    const [uniqueClasificaciones, setUniqueClasificaciones] = useState([]);
    const [tareaDelete, setTareaDelete] = useState('');
    const { logout } = useContext(AuthContext);
    const [token, setToken] = useState(localStorage.getItem("token")|| null);
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const decodedToken = JSON.parse(window.atob(base64));
    const host = import.meta.env.VITE_BACKEND_URL;
    const value = decodedToken.sub;

    const formatearFecha = (fecha) => {
      const fechaObj = new Date(fecha);
      const año = fechaObj.getFullYear();
      const mes = String(fechaObj.getMonth() + 1).padStart(2, "0");
      const dia = String(fechaObj.getDate()).padStart(2, "0");
      return `${año}-${mes}-${dia}`;
    };


  
    useEffect(() => {
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/usuarios/${value}`)
        .then((response) => {
          const nombreUsuario = response.data;
          setNombreUsuario(nombreUsuario);
    

          axios.get(`${import.meta.env.VITE_BACKEND_URL}/tareas/${nombreUsuario}`)
            .then((response) => {
              const infobackend = response.data;
              setTareas(
                infobackend.map((item) => ({
                  id: item.id,
                  nombre_usuario: nombreUsuario,
                  nombre_tarea: item.nombre_tarea,
                  descripcion: item.descripcion,
                  fecha_termino: formatearFecha(item.fecha_termino),
                  clasificacion: item.clasificacion,
                  estado: item.estado,
                }))
              );
            })
            .catch((error) => {
              console.error('Error fetching tareas data: ', error);
            });
        })
        .catch((error) => {
          console.error('Error fetching nombreUsuario data: ', error);
        });
    }, []);
    

  






    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const agregarTarea = async (nombre_tarea, descripcion, fecha_termino, clasificacion, estado, nombreusuario) => {
      if ( nombre_tarea && descripcion && fecha_termino && clasificacion && estado ) {
        const nuevaTarea = {
          id: tareas.length + 1,
          nombre_usuario: nombreusuario,
          nombre_tarea: nombre_tarea,
          descripcion: descripcion,
          fecha_termino: formatearFecha(fecha_termino),
          clasificacion: clasificacion,
          estado: estado,
        };
        setTareas([...tareas, nuevaTarea]);
    
        
        setNombre('');
        setDescripcion('');
        setFechaTermino('');
        setClasificacion('');
        setEstado('');
        closeModal();
        openModal();
      } else {
        
        alert("Debes llenar toda la información para crear una tarea");
      }
    };

  
    const filterTasks = () => {
      if (filter === "") {
        return tareas.sort((a, b) => new Date(a.fecha_termino) - new Date(b.fecha_termino));
      }
      const filtroclasificacion = tareas.filter((tarea) => tarea.clasificacion === filter);
      filtroclasificacion.sort((a, b) => new Date(a.fecha_termino) - new Date(b.fecha_termino));
      return filtroclasificacion;
    };
  
    useEffect(() => {
      const uniqueValues = Array.from(new Set(tareas.map((tarea) => tarea.clasificacion)));
      setUniqueClasificaciones(uniqueValues);
    }, [tareas]);
  
    const deleteTarea = async (index) => {
      const tareaEliminada = tareas[index];
      const updatedTareas = tareas.filter((_, i) => i !== index);
      setTareas(updatedTareas);
  
      try {
        
        await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/tareas/${tareaEliminada.id}`);
        console.log('Tarea eliminada correctamente en el backend.');
      } catch (error) {
        console.error('Error al eliminar tarea en el backend:', error);
        
      }
    };

    const handleLogout = () => {
      logout();
    }

    

  return (
    <>
<nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="\" className="flex items-center">
    <img src="src\images\ProyectoLupaIcon2.png" className="h-8 mr-3" alt="Flowbite Logo" />
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ProyectoLupa</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        
      <li>
          <a href="/home" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
        </li>
        
        <li>
          <a href="/tareas" className="block py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Mis Tareas</a>
        </li>
        <li>
          <a href="/habitos" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Mis Habitos</a>
        </li>
        <li>
          <a href="/calendario" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Calendario</a>
        </li>
        <li>
          <a href="/instrucciones" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Instrucciones</a>
        </li>
        <li>
          <a href="/" 
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          onClick={handleLogout}
          >Cerrar Sesion</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  
    
    <div className="md:col-span-2 lg:col-span-2">
      <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
        <table className="w-full text-gray-600">
          <tbody>
            
            <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-700 ">Crear Tarea</h3>
              {isModalOpen && <Popup_Crear_Tarea  agregarTarea={agregarTarea}  />}

                <div className='text-center space-y-3'>
                  <h3 className="text-3xl font-bold text-gray-700">Filtrar Tareas</h3>
                  
                      <select
                        id="filter"
                        name="filter"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                      >
                        <option value="">Todos</option>
                        {uniqueClasificaciones.map((value, index) => (
                          <option key={index} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                </div>
              <div>

                <div className="space-y-6">
                  
                  {filterTasks().map((tarea, index) => (
                  
                    <div key={index} className="card-compact w-96 bg-base-100 shadow-xl mx-auto space-y-6">
                    
                            <Creador_Tareas
                              key={tarea.id}
                              id={tarea.id}
                              nombre_usuario={tarea.nombreusuario}
                              nombre_tarea={tarea.nombre_tarea}
                              descripcion={tarea.descripcion}
                              fecha_termino={formatearFecha(tarea.fecha_termino)}
                              clasificacion={tarea.clasificacion}
                              estado={tarea.estado}
                              
                            />
                    <button className="btn btn-primary " onClick={() => deleteTarea(index)}>Delete</button>
                    {isModalOpen && <Popup_Editar_Tarea editarTarea={tarea}/>}
                    </div>
                    ))}
                </div>
              </div>
            </div>
            <div>

              </div>
          </tbody>
        </table>
      </div>
    </div>
  
    </>
  )
}

export default Tareas;