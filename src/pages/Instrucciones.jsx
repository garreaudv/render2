import { useState } from 'react';
import '../App.css';

function Instrucciones() {
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

      <section id="instrucciones" className="bg-gray-100 dark:bg-gray-800 p-8">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-semibold mb-4">Instrucciones</h1>
          <p className="text-lg leading-relaxed">

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Página Principal</h2>
            <p className="text-lg leading-relaxed">
            Explora la página principal y familiarízate con sus características clave.<br/>
            Aquí podrás ver tus recordatorios y podrás navegar la página visitando todas las secciones a través del navbar en la parte superior de la página <br/>
            Selecciona entre "Mis tareas," "Mis hábitos," "Calendario", "Instrucciones" o "Cerrar sesión".
            </p>
          </div>

          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Tareas</h2>
            <p className="text-lg leading-relaxed">
            Crea tareas completando los detalles de especificación para tu tarea.<br/>
            Una vez los hayas completado, podrás crearla y ver tus tareas, donde luego podrás filtrarlas por clasificación y podrás especificarlas como hechas<br/>
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Hábitos</h2>
            <p className="text-lg leading-relaxed"style={{ whiteSpace: 'pre-line' }}>
            Aprende cómo gestionar tus hábitos y mejorar tu productividad.<br />
Crea un hábito con... <br />
Una vez lo hayas creado, podrás marcarlo como hecho una vez al día, en el marcador....<br />
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Calendario</h2>
            <p className="text-lg leading-relaxed">
            En esta sección se puede visualizar el calendario, donde podrás observar tus recordatorios y tareas futuras. <br />
            Para crear un recordatorio directamente desde aquí, presiona click sobre el número del día en el que quieres agregar un recordatorio.<br />
            ¡Navega para ver todo lo pendiente del año!
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-2">Cerrar sesión</h2>
            <p className="text-lg leading-relaxed">
            Cierra tu sesión actual
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Instrucciones;