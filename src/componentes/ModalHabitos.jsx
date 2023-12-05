import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';


function ModalH() {
  const host = import.meta.env.VITE_BACKEND_URL;

  const [nombreHabito, setNombreHabito] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [diasSeleccionados, setDiasSeleccionados] = useState([]);
  const [nombreusuario, setNombreUsuario] = useState("");
  const diasSemana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
  const { logout } = useContext(AuthContext);
  const [token, setToken] = useState(localStorage.getItem("token")|| null);
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  const decodedToken = JSON.parse(window.atob(base64));
  const value = decodedToken.sub;
  const navigate = useNavigate();


  const handleCreate = () => {
    axios.get(`${host}/usuarios/${value}`)
      .then((response) => {
        const nombreusuario = response.data; 
        const diasString = diasSeleccionados.join(",");
  
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/habitos`, {
          contador: 0,
          nombre_habito: nombreHabito,
          nombre_usuario: nombreusuario, 
          estado: "incompleto",
          descripcion: descripcion,
          dias: diasString,
        })
        .then((response) => {
          console.log("Habit created successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error creating habit:", error);
        });
      })
      .catch((error) => {
        console.error("Error fetching username:", error);
      });
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreate();
    document.getElementById('my_modal_6').close();
  };

  return (
    <>
      <button
        onClick={() => document.getElementById('my_modal_6').showModal()}
        className="btn btn-primary"
        style={{ marginTop: "15px" }}
      >
        Crear Hábito
      </button>
      <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
        <form onSubmit={handleSubmit} className="w-full max-w-sm" style={{ paddingTop: "10px" }}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name2">
                Nombre del Hábito
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                value={nombreHabito}
                onChange={(e) => setNombreHabito(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name2"
                type="text"
                placeholder="Leer Libro"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                Descripción
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="text"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Días de la Semana
              </label>
            </div>
            <div className="md:w-2/3">
              {diasSemana.map((dia, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`dia-${index}`}
                    checked={diasSeleccionados.includes(dia)}
                    onChange={() => {
                      const nuevosDiasSeleccionados = diasSeleccionados.includes(dia)
                        ? diasSeleccionados.filter((d) => d !== dia)
                        : [...diasSeleccionados, dia];
                      setDiasSeleccionados(nuevosDiasSeleccionados);
                    }}
                  />
                  <label htmlFor={`dia-${index}`} className="ml-2">
                    {dia}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-action">
            <button className="btn">Salir</button>
            <button
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Crear
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default ModalH;



