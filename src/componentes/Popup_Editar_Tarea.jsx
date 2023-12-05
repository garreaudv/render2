import '../App.css';
import axios from 'axios';
import React, { useState } from 'react';

function Popup_Editar_Tarea({closeModal, editarTarea}) {
    const [taskInfo, setTaskInfo] = useState({
        id_tarea: editarTarea.id,
        nombre_tarea: editarTarea.nombre_tarea,
        descripcion: editarTarea.descripcion,
        fecha_termino: editarTarea.fecha_termino,
        clasificacion: editarTarea.clasificacion,
        estado: editarTarea.estado,
    });



    const handleEdit = () => {
      
      const {nombre_tarea, descripcion, fecha_termino, clasificacion, estado } = taskInfo;
      
      editarTarea(nombre_tarea, descripcion, fecha_termino, clasificacion, estado);
      
      axios.put(`${import.meta.env.VITE_BACKEND_URL}/tareas/${id_tarea}`, {
        nombre_tarea: nombre_tarea,
        nombre_usuario: "pepito321",
        fecha_termino: fecha_termino,
        descripcion: descripcion,
        clasificacion: clasificacion,
        estado: estado,
        
    })
      
      setTaskInfo({
        nombre_tarea: '',
        descripcion: '',
        fecha_termino: '',
        clasificacion: '',
        estado: '',
      });
      closeModal();
      
    };

        
    

  return (
    <>
        
        <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_6').showModal()} style={{ marginTop: "15px" }}>Editar</button>
        <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Crea tu Tarea!</h3>
                <form className="w-full max-w-sm" style={{ paddingTop: "10px" }}>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name2">
                                Nombre de Tarea:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-full-name2"
                                type="text"
                                placeholder="Entrega 3 de web"
                                value={taskInfo.nombre_tarea}
                                onChange={(e) => setTaskInfo({ ...taskInfo, nombre_tarea: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password-description">
                                Descripcion:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-password-description"
                                type="text"
                                placeholder="Conectar Frontend y Backend"
                                value={taskInfo.descripcion}
                                onChange={(e) => setTaskInfo({ ...taskInfo, descripcion: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password-fechatermino">
                            Fecha de termino:
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-password-fechatermino"
                            type="date" 
                            value={taskInfo.fecha_termino}
                            onChange={(e) => setTaskInfo({ ...taskInfo, fecha_termino: e.target.value })}
                          />
                        </div>
                      </div>

                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password-clasificacion">
                                Clasificacion:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-password-clasificacion"
                                type="text"
                                placeholder="Trabajos Universidad"
                                value={taskInfo.clasificacion}
                                onChange={(e) => setTaskInfo({ ...taskInfo, clasificacion: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password-clasificacion">
                                Estado:
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-password-clasificacion"
                                type="text"
                                placeholder="Incompleto"
                                value={taskInfo.estado}
                                onChange={(e) => setTaskInfo({ ...taskInfo, estado: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                        <button
                              onClick={() => {
                                handleEdit();
                              }}
                              className="btn btn-primary shadow bg-primary-400 hover-bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            >
                              Editar
                        </button>
                          <button
                            onClick={() => {
                              closeModal();
                            }}
                            className="btn"
                          >
                            Salir
                          </button>
                        </form>
                    </div>
                </form>
            </div>
        </dialog>
    </>
);
}

export default Popup_Editar_Tarea;
