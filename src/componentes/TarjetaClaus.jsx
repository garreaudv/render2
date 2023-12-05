import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ModalEdit from './ModalEdit';
import Routing from '../Routing';


function RecordatorioClaus({nombre, id, contador, tipo, descripcion, dias}) {
  const [posts, setPosts] = useState([]);
  const host = import.meta.env.VITE_BACKEND_URL;
  const [nombreusuario, setNombreUsuario] = useState("admin");

  useEffect(() => {
    axios.get(`${host}/posts/admin2`)
    .then(res => {
        setPosts(res.data);
    })
    .catch(err => {
        console.log(err);
    })
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${host}/${tipo}/${id}`)
    .then(res => {
      console.log("Post eliminado");
    })
    .catch(err => {
      console.log(err);
    })
  }

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



  const handleEdit = (id) => {
    axios.patch(`${host}/posts/${id}`)
    .then(res => {
      console.log("Post editado");
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
<div className="card-compact w-96 bg-base-100 shadow-xl ">
  <div className="card-body">
    <h2 className="card-title">NOMBRE HABITO: {nombre}</h2>
    <h3 className="card-counter">VECES REALIZADO: {contador}</h3>
    <h3 className="card-description">DESCRIPCION: {descripcion}</h3>
    <h3 className="card-days">DIAS EN QUE SE REALIZA: {dias}</h3>
    <p>  </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary btn-sm" onClick={()=> handleClick(id, contador)}>Completado</button>
      <a href = "/editar">
      <button className="btn btn-warning btn-sm" >editar</button>
      </a>

      <button className="btn btn-error btn-sm" onClick={()=> handleDelete(id)}>Eliminar</button>
    </div>
  </div>
</div>

        </>
  );
}

export default RecordatorioClaus;
