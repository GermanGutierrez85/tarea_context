import { useEffect, useState } from "react";
import { CurrentUserContext } from "./context/CurrentUserContext";
import Form from "./view/Form";
import { PruebaContext } from "./context/PruebaContext";
import AppRouter from "./router/AppRouter";

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "" });
  const [user, setUser] = useState({ nombre: "", email: "" });
  useEffect(() => {
    const storeUser = localStorage.getItem("usuario");
    if (storeUser) {
      setUser(JSON.parse(storeUser));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(user));
  }, [user]);

  return (
    <>
      {/* <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Form />
    </CurrentUserContext.Provider> */}
      <PruebaContext.Provider value={{ user, setUser }}>
        <AppRouter />
      </PruebaContext.Provider>
    </>
  );
}

export default App;
