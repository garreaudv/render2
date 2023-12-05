import { useState, useEffect } from 'react';
import '../App.css';
import RecordatorioC from './TarjetaRecordatorios';
import TareaC from './TarjetaTareas';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


function ListaC() {
    const [tareas, setTareas] = useState([]);
    const [habitos, setHabitos] = useState([]);
    const [posts, setPosts] = useState([]);
    const [nombreusuario, setNombreUsuario] = useState("");
    const host = import.meta.env.VITE_BACKEND_URL;
    const { logout } = useContext(AuthContext);
    const {token} = useContext(AuthContext);
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    const decodedToken = JSON.parse(window.atob(base64));
    const value = decodedToken.sub;
    
    useEffect(() => {
        // First axios request to get the username
        axios.get(`${host}/usuarios/${value}`)
          .then((response) => {
            const nombreUsuario = response.data;
            setNombreUsuario(nombreUsuario);
      
            // Second axios request to get tasks
            axios.get(`${host}/tareas/${nombreUsuario}`)
              .then((response) => {
                const infobackend = response.data;
                setTareas(
                  infobackend.map((item) => ({
                    id: item.id,
                    nombre_usuario: item.nombreusuario,
                    nombre_tarea: item.nombre_tarea,
                    descripcion: item.descripcion,
                    fecha_termino: item.fecha_termino,
                    clasificacion: item.clasificacion,
                    estado: item.estado,
                  }))
                );
              })
              .catch((error) => {
                console.error('Error fetching tasks data: ', error);
              });
      
            // Third axios request to get habits
            axios.get(`${host}/habitos/${nombreUsuario}`)
              .then((response) => {
                const infobackend = response.data;
                setHabitos(
                  infobackend.map((item) => ({
                    id: item.id,
                    contador: item.contador,
                    nombre_habito: item.nombre_habito,
                    descripcion: item.descripcion,
                    nombre_usuario: item.nombre_usuario,
                    dias: item.dias,
                    estado: item.estado,
                  }))
                );
              })
              .catch((error) => {
                console.error('Error fetching habits data: ', error);
              });
          })
          .catch((error) => {
            console.error('Error fetching username data: ', error);
          });
      }, []);
      

  return (
    <>

<div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

    <div className="px-6 pt-6 2xl:container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1" >
                <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                    
                    <div>
                        <div className="mt-2 flex justify-center gap-4">
                            <h3 className="text-3xl font-bold text-gray-700">Hola! {nombreusuario} </h3>
                            <div className="flex items-end gap-1 text-green-500">
                                <svg className="w-3" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">

                                </svg>
                      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                    <h3 className="text-3xl font-bold text-gray-700">Tareas Hoy</h3>
                    <table className="w-full text-gray-600">
                    <tbody>
                    {tareas.map((tarea, index) => (
                                <div key={index} className="card-compact w-96 bg-base-100 shadow-xl mx-auto space-y-6">
                                <RecordatorioC
                                key={tarea.id}
                                id={tarea.id}
                                nombre_usuario={tarea.nombre_usuario}
                                nombre={tarea.nombre_tarea}
                                descripcion={tarea.descripcion}
                                fecha_termino={(tarea.fecha_termino)}
                                clasificacion={tarea.clasificacion}
                                estado={tarea.estado}
                                tipo={"tareas"}
                                />
                            </div>
                            ))}
                        </tbody>
                    </table> 
                       
                </div>
            </div>
            <div>
                <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                    <h3 className="text-3xl font-bold text-gray-700">Habitos Pendientes</h3>
                    <table className="w-full text-gray-600">
                    <tbody>
                    {habitos.map((habito, index) => (
                                <div key={index} className="card-compact w-96 bg-base-100 shadow-xl mx-auto space-y-6">
                                <RecordatorioC
                                key={habito.id}
                                id={habito.id}
                                nombre_usuario={habito.nombre_usuario}
                                nombre={habito.nombre_habito}
                                descripcion={habito.descripcion}
                                contador={habito.contador}
                                estado={habito.estado}
                                dias={habito.dias}
                                tipo={"habitos"}
                                />
                            </div>
                            ))}
                        </tbody>
                    </table> 
                       
                </div>
            </div>          
            
        </div>
    </div>
</div>
        </>
  );
}

export default ListaC;
