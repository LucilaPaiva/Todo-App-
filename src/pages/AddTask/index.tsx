import { useState } from "react";
import { tasksService } from "../../services";
import { useNavigate, useParams } from "react-router-dom";
//import { Category } from "../../types"; 

const AddTasks = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  

  const [ifError, setIfError] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  // const obtenerUserAEditar = async () => {
  //   if (id) {
  //     const rta = await usersService.get(id);
  //     setName(rta.name); 
  //   }
  // };

  // if (id && name === "" &&  === "") obtenerUserAEditar();

  const enviarFormulario = async (e: any) => {
    e.preventDefault();

    setIfError(false);

    let rta;
    // if (id) {
    //   rta = await usersService.update({ id, name, });
    // } else {
      rta = await tasksService.add({ category, date: new Date(date), description, title, status });
    // }

    // if (rta) {
    //   navigate("/users");
    // } else {
    //   setIfError(true);
    // }
  };

  return (
    <form onSubmit={enviarFormulario}>
      <div className="mb-3">
        <label htmlFor="title-control">Título</label>
        <input
          type="text"
          title="title"
          id="title-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date-control">Fecha</label>
        <input
          type="date"
          name="date"
          id="date-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category-control">Categoría</label>
        <input
          type="select"
          //aca deberian mostrarse todas las categorias
          name="category"
          id="category-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description-control">Descripción</label>
        <input
          type="text"
          name="description"
          id="description-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="status-control">Estatus</label>
        <input
          type="text"
          name="bstatus"
          id="status-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Enviar
      </button>

      {ifError && <p style={{ color: "red" }}>Hubo un error</p>}
    </form>
  );
};
export { AddTasks };
