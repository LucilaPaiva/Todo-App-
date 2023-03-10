import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Menu: FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Todo-App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/categories">
                  Categorías
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/users">
                  Usuarios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tasks">
                  Tareas
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Menu };
