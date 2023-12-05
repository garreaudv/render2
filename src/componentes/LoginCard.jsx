import { useState, useContext } from 'react';
import '../App.css';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';
import {Link, useNavigate} from 'react-router-dom';

function LoginCardC() {
    const {token, setToken} = useContext(AuthContext);
    const [mail, setEmail] = useState('');
    const [contraseña, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // vamos a enviar un post a la ruta login
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`,
        {
            mail,
            contraseña
        }).then((response) => {
            //uno entra aca si no hay error
            console.log(response)

            const access_token = response.data.access_token;
            setToken(access_token);
            const base64Url = access_token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const decodedToken = JSON.parse(window.atob(base64));
            const scopes = decodedToken.scope;
            console.log("scopes: ", scopes);

            if (response.data.access_token) {
                // if its ["admin"] then go to admin page
                // if its ["user"] then go to user page
                if (scopes.includes("admin")) {
                    navigate('/admin');
                }
                else if (scopes.includes("user")) {
                    navigate('/home');
                }
                else {
                    console.log("error");
                }

            }

        }).catch((error) => {
            //uno entra aca si hay error
            console.log(error)
        })

        
    };

  return (
<div class="flex items-center min-h-screen bg-white dark:bg-gray-900">
    <div class="container mx-auto">
        <div class="max-w-md mx-auto my-10">
            <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Hola!</h1>
                <p class="text-gray-500 dark:text-gray-400">Inicia sesion para acceder</p>
            </div>
            <div class="m-7" onSubmit={handleSubmit}>
                <form action="">
                    <div class="mb-6">
                        <label for="mail" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nombre Usuario</label>
                        <input type="email" 
                        name="mail" 
                        id="mail" 
                        placeholder="Mail" 
                        onChange={(event) => setEmail(event.target.value)}
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">
                        <div class="flex justify-between mb-2">
                            <label for="contraseña" class="text-sm text-gray-600 dark:text-gray-400">Password</label>

                        </div>
                        <input type="password" 
                        name="contraseña" 
                        id="contraseña" 
                        placeholder="Contraseña" 
                        onChange={(event) => setPassword(event.target.value)}
                        class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                    </div>
                    <div class="mb-6">
                    <a href = "/home">
                    <button type="sumbit" class="w-full px-3 py-4 text-white bg-black rounded-md focus:bg-indigo-600 focus:outline-none">Iniciar Sesion</button>
                    </a>
                    </div>
                    <p class="text-sm text-center text-gray-400">No tienes cuenta? <a href="\crearcuenta" class="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Crear Cuenta</a>.</p>
                </form>
            </div>
        </div>
    </div>
</div>
  );
}

export default LoginCardC;
