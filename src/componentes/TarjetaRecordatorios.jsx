import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ModalEdit from './ModalEdit';
import Routing from '../Routing';


function RecordatorioC({nombre, id, tipo, descripcion}) {
  const [posts, setPosts] = useState([]);
  const host = import.meta.env.VITE_BACKEND_URL;

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
    <h2 className="card-title">{nombre}</h2>
    
    <p className="text-sm text-gray-700 dark:text-gray-400">{descripcion}</p>
    <div className="card-actions justify-end">



      <button className="btn btn-primary btn-sm" onClick={()=> handleDelete(id)}>Completado</button>
    </div>
  </div>
</div>

        </>
  );
}

export default RecordatorioC;
