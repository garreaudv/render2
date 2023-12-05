import { useState, useEffect } from 'react';
import '../App.css';
import RecordatorioClaus from './TarjetaClaus';
import axios from 'axios';

function ListaClaus() {
  const [habitos, setHabitos] = useState([]);
  const [nombreusuario, setNombreUsuario] = useState("admin");
  const host = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/habitos/${nombreusuario}`)
      .then((response) => {
        const infobackend = response.data;
        setHabitos(infobackend.map((item) => ({
          id: item.id,
          contador: item.contador,
          nombre_habito: item.nombre_habito,
          descripcion: item.descripcion,
          nombre_usuario: item.nombre_usuario,
          dias: item.dias,
          estado: item.estado,
        })));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (id, contador) => {
    const nuevoContador = contador + 1;

    axios.put(`${import.meta.env.VITE_BACKEND_URL}/habitos/${id}`, { contador: nuevoContador })
      .then(res => {
        console.log("Contador actualizado");
        // Puedes realizar acciones adicionales después de actualizar el contador si es necesario
        // También puedes volver a cargar la lista de hábitos si es necesario
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="px-6 pt-6 2xl:container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
            <h3 className="text-3xl font-bold text-gray-700">Habitos Pendientes</h3>
            <table className="w-full text-gray-600">
              <tbody>
                {habitos.map((habito, index) => (
                  <div key={index} className="card-compact w-96 bg-base-100 shadow-xl mx-auto space-y-6">
                    <RecordatorioClaus
                      key={habito.id}
                      id={habito.id}
                      nombre_usuario={habito.nombre_usuario}
                      nombre={habito.nombre_habito}
                      descripcion={habito.descripcion}
                      contador={habito.contador}
                      estado={habito.estado}
                      dias={habito.dias}
                      tipo={"habitos"}
                      handleClick={handleClick}
                    />
                  </div>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaClaus;
