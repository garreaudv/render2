export default function Creador_Tareas({ id, nombre_usuario ,nombre_tarea, descripcion, fecha_termino, clasificacion, estado}) {  
  


  return (
    <div>
      <p className="font-bold text-lg">
        Nombre Tarea: <span className="font-bold text-cyan-600">{nombre_tarea}</span>
      </p>
      <p className="font-bold text-lg">
        Fecha término: <span className="font-bold text-cyan-600">{fecha_termino}</span>
      </p>
      <p 
      className="font-bold text-lg">Clasificacion: <span className="font-bold text-cyan-600">{clasificacion}</span>
      </p>

      <p className="font-bold">Descripcion: <span className="font-bold text-cyan-600">{descripcion}</span>
      </p>
      
      <p className="font-bold">Estado: <span className="font-bold text-cyan-600">{estado}</span>
      </p>
      
      
    </div>
  );
}


