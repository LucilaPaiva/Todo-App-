import { useEffect, useState } from "react";
//import { UsePlaceholderProps } from "react-bootstrap/esm/usePlaceholder";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { usersService } from "../../services";
import { User } from "../../types";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const fetchData = () =>
    usersService.getAll(search).then((data) => setUsers(data));

  useEffect(() => {
    fetchData();
  }, [search]);

  const borrarUser = async (id: string) => {
    await usersService.remove(id);
    fetchData();
  };
  
  return (
    <>
      <div>
        <h1>Usuarios</h1>

        <NavLink className="nav-link-add-category" to="/users/save">
          Crear Usuario
        </NavLink>

        <hr />
      </div>

{/* este es el filtro */}

      <form action="">
        <input
          type="text"
          name="text"
          id="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      <hr />

      <table className="table">
        <thead>
          <tr>
            <th>name</th>
            <th>lastname</th>
            <th>email</th>
            <th>password</th>
            <th>birthdate</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          
{/* con el map hago un arreglo con los usuarios que hay en la base de datos */}

          {users.map((elem) => {
            console.log(elem)
            return (
              <tr key={elem.id}>
                {/* Poner todos: e mail, password, etc */}
                <td>{elem.name}</td>
                <td>{elem.lastname}</td>
                <td>{elem.email}</td>
                <td>{elem.password}</td>
                <td>{elem.birthDate.getFullYear()}/{elem.birthDate.getMonth() + 1}/{elem.birthDate.getDate()}</td>

                <Button
                    variant="outline-danger"
                    icon="trash"
                    handleClick={() => borrarUser(elem.id)}
                  /> 
                <Button
                  variant="outline-primary"
                  icon="pencil"
                  handleClick={() => navigate(`/users/save/${elem.id}`)}
                  // acá le digo que vaya a la página save user con el id seleccionado
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export { Users };
