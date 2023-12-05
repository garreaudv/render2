import { useState } from 'react';
import '../App.css';

function PlannerInicioC() {
  return (
    <>
<div class="flex flex-col h-screen bg-gray-100">

{/* <!-- Barra de navegación superior --> */}
<div class="bg-white text-white shadow w-full p-2 flex items-center justify-between">
    <div class="flex items-center">
        <div class="flex items-center"> 
            <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" class="w-28 h-18 mr-2"></img>
            <h2 class="font-bold text-xl">Nombre de la Aplicación</h2>
        </div>
        <div class="md:hidden flex items-center"> 
            <button id="menuBtn">
                <i class="fas fa-bars text-gray-500 text-lg"></i> 
            </button>
        </div>
    </div>

    {/* <!-- Ícono de Notificación y Perfil --> */}
    <div class="space-x-5">
        <button>
            <i class="fas fa-bell text-gray-500 text-lg"></i>
        </button>
        {/* <!-- Botón de Perfil --> */}
        <button>
            <i class="fas fa-user text-gray-500 text-lg"></i>
        </button>
    </div>
</div>
{/* 
<!-- Contenido principal --> */}
<div class="flex-1 flex flex-wrap">
    {/* <!-- Barra lateral de navegación (oculta en dispositivos pequeños) --> */}
    <div class="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden" id="sideNav">
        <nav>
            <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i class="fas fa-home mr-2"></i>Inicio
            </a>
            <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i class="fas fa-file-alt mr-2"></i>Autorizaciones
            </a>
            <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i class="fas fa-users mr-2"></i>Usuarios
            </a>
            <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i class="fas fa-store mr-2"></i>Comercios
            </a>
            <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i class="fas fa-exchange-alt mr-2"></i>Transacciones
            </a>
        </nav>
{/* 
        <!-- Ítem de Cerrar Sesión --> */}
        <a class="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto" href="#">
            <i class="fas fa-sign-out-alt mr-2"></i>Cerrar sesión
        </a>

        {/* <!-- Señalador de ubicación --> */}
        <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

        {/* <!-- Copyright al final de la navegación lateral --> */}
        <p class="mb-1 px-5 py-3 text-left text-xs text-cyan-500">Copyright WCSLAT@2023</p>

    </div>

    {/* <!-- Área de contenido principal --> */}
    <div class="flex-1 p-4 w-full md:w-1/2">
        {/* <!-- Campo de búsqueda --> */}
        <div class="relative max-w-md w-full">
            <div class="absolute top-1 left-2 inline-flex items-center p-2">
                <i class="fas fa-search text-gray-400"></i>
            </div>
            <input class="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Buscar..."></input>
        </div>
{/* 
             <!-- Contenedor de Gráficas --> */}
        <div class="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
            {/* <!-- Primer contenedor -->
            <!-- Sección 1 - Gráfica de Usuarios --> */}
            <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                <h2 class="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
                <div class="my-1"></div> 
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                <div class="chart-container" style="position: relative; height:150px; width:100%">

                    <canvas id="usersChart"></canvas>
                </div>
            </div>

            {/* <!-- Segundo contenedor -->
            <!-- Sección 2 - Gráfica de Comercios --> */}
            <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                <h2 class="text-gray-500 text-lg font-semibold pb-1">Comercios</h2>
                <div class="my-1"></div> 
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                <div class="chart-container" style="position: relative; height:150px; width:100%">

                    <canvas id="commercesChart"></canvas>
                </div>
            </div>
        </div>


        <div class="mt-8 bg-white p-4 shadow rounded-lg">
            <h2 class="text-gray-500 text-lg font-semibold pb-4">Autorizaciones Pendientes</h2>
            <div class="my-1"></div> 
            <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
            <table class="w-full table-auto text-sm">
                <thead>
                    <tr class="text-sm leading-normal">
                        <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Foto</th>
                        <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                        <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Rol</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="hover:bg-grey-lighter">
                        <td class="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10"></img></td>
                        <td class="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                        <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                    </tr>

                    <tr class="hover:bg-grey-lighter">
                        <td class="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10"></img></td>
                        <td class="py-2 px-4 border-b border-grey-light">María Gómez</td>
                        <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                    </tr>

                    <tr class="hover:bg-grey-lighter">
                        <td class="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10"></img></td>
                        <td class="py-2 px-4 border-b border-grey-light">Carlos López</td>
                        <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                        <td class="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10"></img></td>
                        <td class="py-2 px-4 border-b border-grey-light">Laura Torres</td>
                        <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                        <td class="py-2 px-4 border-b border-grey-light"><img src="https://via.placeholder.com/40" alt="Foto Perfil" class="rounded-full h-10 w-10"></img></td>
                        <td class="py-2 px-4 border-b border-grey-light">Ana Ramírez</td>
                        <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="text-right mt-4">
                <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                    Ver más
                </button>
            </div>
        </div>

        {/* <!-- Cuarto contenedor -->
        <!-- Sección 4 - Tabla de Transacciones --> */}
        <div class="mt-8 bg-white p-4 shadow rounded-lg">
            <div class="bg-white p-4 rounded-md mt-4">
                <h2 class="text-gray-500 text-lg font-semibold pb-4">Transacciones</h2>
                <div class="my-1"></div> 
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                <table class="w-full table-auto text-sm">
                    <thead>
                        <tr class="text-sm leading-normal">
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Fecha</th>
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td class="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                            <td class="py-2 px-4 border-b border-grey-light text-right">$1500</td>
                        </tr>
                    <tr class="hover:bg-grey-lighter">
                        <td class="py-2 px-4 border-b border-grey-light">Pedro Hernández</td>
                        <td class="py-2 px-4 border-b border-grey-light">02/08/2023</td>
                        <td class="py-2 px-4 border-b border-grey-light text-right">$1950</td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                        <td class="py-2 px-4 border-b border-grey-light">Sara Ramírez</td>
                        <td class="py-2 px-4 border-b border-grey-light">03/08/2023</td>
                        <td class="py-2 px-4 border-b border-grey-light text-right">$1850</td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                        <td class="py-2 px-4 border-b border-grey-light">Daniel Torres</td>
                        <td class="py-2 px-4 border-b border-grey-light">04/08/2023</td>
                        <td class="py-2 px-4 border-b border-grey-light text-right">$2300</td>
                    </tr>
                    </tbody>
                </table>

                <div class="text-right mt-4">

                                      
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </>
  );
}

export default PlannerInicioC;
