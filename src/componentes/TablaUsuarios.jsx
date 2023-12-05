import '../App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';



function TablaUsuarios() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/usuarios`)
        .then((response) => {
            console.log(response);
            setUsuarios(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    const handleDelete = (id) => {
        axios.delete(`${import.meta.env.VITE_BACKEND_URL}/usuarios/${id}`)
        .then((response) => {
            console.log(response);
            const newUsuarios = usuarios.filter((usuario) => usuario.id !== id);
            setUsuarios(newUsuarios);
        })
        .catch((error) => {
            console.log(error);
        })
    }







    
  return (
    <>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Nombre</th>
        <th>Mail</th>
        <th>Nombre Usuario</th>
        <th>Accion</th>
      </tr>
    </thead>
    <tbody>
        {usuarios.map((usuario) => (
            <tr key={usuario.id}>
                <th></th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar"></div>
                        <div>
                            <div className="font-bold">{usuario.nombre}</div>
                        </div>
                    </div>
                </td>
                <td>{usuario.mail}</td>
                <td>{usuario.nombre_usuario}</td>
                <th>
                    <button className="btn btn-error btn-xs "
                    onClick={() => handleDelete(usuario.id)}
                    >delete</button>
                </th>
            </tr>
        ))}
    </tbody>

    
  </table>
</div>


        </>
  );
}

export default TablaUsuarios;


