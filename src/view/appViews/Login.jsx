import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PruebaContext } from "../../context/PruebaContext";

export default function Login() {
  const { setUser } = useContext(PruebaContext);
  const navegate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
    };
    setUser(obj);
    if (obj.nombre && obj.email !== "") {
      navegate("/");
    }
  }
  return (
    <>
      <h1>Login</h1>
      <div className="formulario">
        <form onSubmit={handleSubmit} className="login">
          <input type="text" placeholder="Nombre" name="nombre" />
          <input type="email" placeholder="Email" name="email" />
          <input type="submit" value={"Enviar"} />
        </form>
      </div>
    </>
  );
}
