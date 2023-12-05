import { useState, useEffect } from 'react';
import '../App.css';
import RecordatorioC from './TarjetaRecordatorios';
import TareaC from './TarjetaTareas';
import axios from 'axios';

function EditarC({nombre,id,tipo}) {
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
   
    const handleEdit = (id,nombre,tipo) => {
        axios.patch(`${host}/posts/${id}`, {
            nombre: nombre,
            tipo: tipo,
            
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
<nav class="bg-white border-gray-200 dark:bg-gray-900 w-full">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="\" class="flex items-center">
    <img src="src\images\ProyectoLupaIcon2.png" class="h-8 mr-3" alt="Flowbite Logo" />
    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ProyectoLupa</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        
      <li>
          <a href="/home" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
        </li>
        
        <li>
          <a href="/tareas" class="block py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Mis Tareas</a>
        </li>
        <li>
          <a href="/habitos" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Mis Habitos</a>
        </li>
        <li>
          <a href="/calendario" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Calendario</a>
        </li>
        <li>
          <a href="/instrucciones" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Instrucciones</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cerrar Sesion</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">

    <div class="px-6 pt-6 2xl:container">
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div class="md:col-span-2 lg:col-span-1" >
                <div class="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                    
                    <div>
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Nombre
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"></input>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="tipo">
        Tipo
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tipo" type="text" ></input>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        {nombre}
      </label>
      <select className="select select-bordered w-full max-w-xs" type= "opcion">
  <option disabled selected>Elige tu Publicacion</option>
    {posts.map(post => (
            <option key={post.id} value={post.id}>{post.nombre}</option>
          ))}
    
</select>
    </div>
    
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
      onClick={() => {
        handleEdit(id = document.getElementsByClassName("select select-bordered w-full max-w-xs")[0].value,nombre = document.getElementById('username').value,tipo = document.getElementById('tipo').value)
    }}
      >
        Editar
      </button>
      
    </div>
  </form>
                    </div>
                    
                </div>
            </div>                   
        </div>
    </div>
</div>
        </>
  );
}

export default EditarC;
