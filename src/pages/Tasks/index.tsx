// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../../components";
// import { categoriesService } from "../../services";
// import { Category } from "../../types";

const Tasks = () => {


//   const fetchData = () =>
//     categoriesService.getAll(search, color).then((data) => setCategories(data));

//   useEffect(() => {
//     fetchData();
//   }, [search, color]);

//   const borrarCategoria = async (id: string) => {
//     await categoriesService.remove(id);
//     fetchData();
//   };

  return (
    <div>
      <h1>Soy Tareas</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Día</th>
            <th>Status</th>
            <th>Descripción</th>
            <th>Categoría</th>
          </tr>
        </thead>
        {/* <tbody> */}
          {/* {categories.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.name}</td>
                <td style={{ background: `${elem.color}`}}></td>

                <td>
                  <Button
                    variant="danger"
                    icon="trash"
                    handleClick={() => borrarCategoria(elem.id)}
                  />
                  <Button
                    variant="primary"
                    icon="pencil"
                    handleClick={() => navigate(`/categories/save/${elem.id}`)}
                  />
                </td>
              </tr>
            );
          })} */}
        {/* </tbody> */}
      </table>
    </div>
  );
};

export { Tasks };