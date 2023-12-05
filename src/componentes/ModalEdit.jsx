import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function ModalEdit({nombre, id, tipo}) {
    
    const host = import.meta.env.VITE_BACKEND_URL;
    const [nombre2, setNombre] = useState(nombre);

    const handleEdit = (id,nombre,tipo) => {
        axios.patch(`${host}/posts/${id}`, {
            nombre: nombre,
            tipo: tipo
        })
        .then(res => {
            console.log("Post editado");
        })
        .catch(err => {
            console.log(err);
        })
    }
    



   
    
  return (
    <>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn btn-warning btn-sm" onClick={()=>document.getElementById('my_modal_5').showModal()
} >Editar </button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Editar</h3>
    <form class="w-full max-w-sm" style={{paddingTop:"10px"}}>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name3">
        Nombre 
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name3" type="text" placeholder={nombre}></input>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Descripcion
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" ></input>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      
    </div>
  </div>
  <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm">Salir</button>
        <button className = "btn btn-sm btn-primary btn-warning"
          onClick={() => handleEdit(id,document.getElementById('inline-full-name3').value)}
          >
        Editar
      </button>
      </form>
    </div>
</form>
    
   
  </div>
</dialog>
        </>
  );
}

export default ModalEdit;


