import { useState } from "react";
import { categoriesService, tasksService } from "../../services";
import { useNavigate, useParams } from "react-router-dom";
import { Category } from "../../types"; 

const AddTasks = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [newCategory, setNewCategory] = useState<Category[]>([]); 
  const [categoryTask, setCategoryTask] = useState("");
  //este set category task es el que me voy a guardar en tareas
  //explicación de category, en lugar de recibir un string recibe un category
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  

  const [ifError, setIfError] = useState(false);

  const navigate = useNavigate();
  // const { id } = useParams();

  
// useEffet(() =>{
  // const printCategory = async () => {
    
  //   const rta = await categoriesService.getAll();
  //   // Si pongo entre parentesis el id esd para editar
  //   setNewCategory(rta)
  // }

  // printCategory()
// }, [])
  
  

  // if (id && name === "" &&  === "") obtenerUserAEditar();

  const enviarFormulario = async (e: any) => {
    e.preventDefault();

    setIfError(false);

    let rta;
    // if (id) {
    //   rta = await usersService.update({ id, name, });
    // } else {
    const category =  await categoriesService.get(categoryTask)
      rta = await tasksService.add({ category, date: new Date(date), description, title, status });
    // }

    // if (rta) {
    //   navigate("/users");
    // } else {
    //   setIfError(true);
    // }

   //navigate('/task')
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
        <select
          //aca deberian mostrarse todas las categorias
          // name="category"
          id="category-control"
          onChange={(e) => setCategoryTask(e.target.value)}
          className="form-control"
        >{newCategory.map((elem) =>{
          return (<option selected value={elem.id}>{elem.name}</option>)
        })} </select>
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
  // function useEffet(arg0: () => void, arg1: never[]) {
  //   throw new Error("Function not implemented.");
  // }

