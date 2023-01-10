import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { categoriesService } from "../../services";
import { Category } from "../../types";
import "./styles.scss";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [search, setSearch] = useState("");
  // const [color, setColor] = useState("");

  const navigate = useNavigate();

  const fetchData = () =>
    categoriesService.getAll(search).then((data) => setCategories(data));

  useEffect(() => {
    fetchData();
  }, [search]);

  const borrarCategoria = async (id: string) => {
    await categoriesService.remove(id);
    fetchData();
  };

  return (
    <div>
      <h1>Categorías</h1>

      <NavLink className="nav-link-add-category" to="/categories/save">
        Crear Categoría
      </NavLink>

      <hr />

      <form action="">
        <input
          type="text"
          name="text"
          id="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <input
          type="text"
          name="text"
          id="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        /> */}
      </form>

      <hr />

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.name}</td>
                <td style={{ background: `${elem.color}` }}></td>

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
          })}
        </tbody>
      </table>
    </div>
  );
};

export { Categories };
