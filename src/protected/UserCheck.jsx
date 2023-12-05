import {useState, useEffect, useContext} from 'react';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';


function UserCheck(){
    const {token} = useContext(AuthContext);
    const [msg, setMsg] = useState('');

    const config = {
        'method': 'get',
        'url': `${import.meta.env.VITE_BACKEND_URL}/scope-example/protecteduser`,
        'header': {
            'Authorization': `Bearer ${token}`
        }
    }


    useEffect(() => {
        axios(config)
        .then((response) => {
            console.log("Enviaste un token bueno");
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
        //quiero retornar un True si el token es bueno y un False si el token es malo
        <div>
            <h1>{msg}</h1>
        </div>
        
    )
}

export default UserCheck;