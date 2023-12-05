import { useState, useContext, useEffect } from 'react';
import '../App.css'
import ListaC from '../componentes/Tareas'
import { AuthContext } from '../auth/AuthContext';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';



function Home() {
  const {token} = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const config = {
    "method": "get",
    "url": `${import.meta.env.VITE_BACKEND_URL}/scope-example/protecteduser`,
    "headers": {
      "Authorization": `Bearer ${token}`
    }
  }



  // solo retorno la pagina si el token es bueno

  useEffect(() => {
    axios(config)
    .then((response) => {
        console.log("Enviaste un token bueno");
        console.log(response);
        
    })
    .catch((error) => {
        console.log(error);
        console.log("Enviaste un token malo");
        navigate('/');
    })
}, [])


  const handleLogout = () => {
    logout();
    navigate('/');
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

<ListaC></ListaC>


    </>
  )
}

export default Home