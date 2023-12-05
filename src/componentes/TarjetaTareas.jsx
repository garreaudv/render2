import '../App.css';

function TareaC() {
  return (
    <>
<div className="card-compact w-96 bg-base-100 shadow-xl ">
  <div className="card-body">
    <h2 className="card-title">Tarea</h2>
    <p>Hacer tarea</p>
    <div className="card-actions justify-end">
    <button className="btn btn-primary btn-sm">Completado</button>
      <button className="btn btn-warning btn-sm">Editar</button>
      <button className="btn btn-error btn-sm">Eliminar</button>
    </div>
  </div>
</div>

        </>
  );
}

export default TareaC;


