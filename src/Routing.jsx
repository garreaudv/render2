import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import CrearCuenta from "./pages/CrearCuenta";
import CrearHabitos from "./pages/Habitos";
import Instrucciones from "./pages/Instrucciones";
import VerCalendario from "./pages/VerCalendario";
import Tareas from "./pages/Tareas";
import EditarC from "./componentes/Editar";
import UserCheck from "./protected/UserCheck";
import AdminCheck from "./protected/AdminCheck";
import AdminPage from "./pages/Admin";



function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<App />} />
          <Route path = "/home" element={<Home/>} />
          <Route path = "/crearcuenta" element={<CrearCuenta/>} />
          <Route path = "/habitos" element={<CrearHabitos/>}/>
          <Route path = "/instrucciones" element={<Instrucciones/>}/>
          <Route path="/calendario" element={<VerCalendario/>}/>
          <Route path = "/tareas" element={<Tareas/>}/>
          <Route path = "/editar" element={<EditarC/>}/>
          <Route path = "/usercheck" element={<UserCheck/>}/>
          <Route path = "/admincheck" element={<AdminCheck/>}/>
          <Route path = "/admin" element={<AdminPage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routing;