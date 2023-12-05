import {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';


function AdminCheck(){
    const {token} = useContext(AuthContext);
    const [msg, setMsg] = useState('');

    const config = {
        'method': 'get',
        'url': `${import.meta.env.VITE_BACKEND_URL}/scope-example/protectedadmin`,
        'header': {
            'Authorization': `Bearer ${token}`
        }
    }


    useEffect(() => {
        axios(config)
        .then((response) => {
            console.log("Enviaste un token bueno, y eres admin");
            console.log(response);
            setMsg(response.data.message);
            
        })
        .catch((error) => {
            console.log(error);
            console.log("Enviaste un token malo");
            setMsg(error.message);

        })
    }, [])

    return(
        <div>
            <h1>{msg}</h1>
        </div>
    )
}

export default AdminCheck;