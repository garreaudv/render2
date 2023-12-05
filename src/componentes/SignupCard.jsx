import { useState } from 'react';
import '../App.css';
import axios from 'axios';

function SignupC() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [usuario, setUsuario] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // vamos a enviar un post a la ruta login
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`,
        {
            mail: email,
            contraseña: password,
            nombre: nombre,
            nombre_usuario: usuario
            
        }).then((response) => {
            //uno entra aca si no hay error
            console.log(response)
            window.location.href = "/";
        }).catch((error) => {
            //uno entra aca si hay error
            console.log(error)
        })

        
    }



  return (
<div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div className="container mx-auto ">
        <div className="max-w-md mx-auto my-10">
            <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Hola!</h1>
                <p className="text-gray-500 dark:text-gray-400">Crea tu Cuenta</p>
            </div>
            <div className="m-7">
                <form action="">

                <div className="mb-6">
                        <label htmlFor="mail" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Mail</label>
                        <input type="email" 
                               name="mail" 
                               id="mail" 
                               placeholder="clausplaut@gmail.com" 
                               className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" 
                               value={email}
                               onChange={(event) => {
                                setEmail(event.target.value);
                               }
                               }
                               />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="nombre_usuario" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nombre Usuario</label>
                        <input type="text" 
                            name="nombre_usuario" 
                            id="nombre_usuario" 
                            placeholder="Usuario" 
                            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            value = {usuario}
                            onChange={(event) => {
                                setUsuario(event.target.value);
                               }
                               }
                            />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="nombre" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nombre</label>
                        <input type="text" 
                        name="nombre" 
                        id="nombre" 
                        placeholder="Claus Plaut" 
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                        value={nombre}
                        onChange={(event) => {
                            setNombre(event.target.value);
                           }
                           }
                        />
                    </div>
                    <div className="mb-6">
                        <div className="flex justify-between mb-2">
                            <label htmlFor="contraseña" className="text-sm text-gray-600 dark:text-gray-400">Password</label>
                        </div>
                        <input type="password" 
                        name="contraseña" 
                        id="contraseña" 
                        placeholder="Contraseña" 
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" 
                        value = {password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                           }
                           }
                        />

                    </div>
                    <div className="mb-6">
                    <a href = "/">
                    <button type="submit" 
                    className="w-full px-3 py-4 text-white bg-black rounded-md focus:bg-indigo-600 focus:outline-none" 
                    onClick={handleSubmit}
                    >Crear Cuenta</button>

                    </a>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</div>
  );
}

export default SignupC;
