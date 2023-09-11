import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { PruebaContext } from "../context/PruebaContext";
import Inicio from "../view/appViews/Inicio";
import Articulos from "../view/appViews/Articulos";
import AcercaDe from "../view/appViews/AcercaDe";
import Contacto from "../view/appViews/Contacto";
import Error404 from "../view/appViews/Error404";
import Login from "../view/appViews/Login";

export default function AppRouter() {
  const { user, setUser } = useContext(PruebaContext);
  return (
    <>
      <Router>
        <nav>
          <h2>useContext</h2>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/articulos"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Articulos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/acerca-de"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Acerca de
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contacto
              </NavLink>
            </li>
            {user.nombre && user.email !== "" ? (
              <>
                <li>
                  <span>{user.nombre}</span>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setUser({ nombre: "", email: "" })}
                  >
                    Cerrar sesion
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}
