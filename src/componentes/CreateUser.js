import { useState } from "react";
import { useDispatch } from "react-redux";
import iAX from "../axiosConfig";
import { addUser } from "../redux/userSlice";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const dispatch = useDispatch();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await iAX.post("/users", {
        name,
        job,
      });
      const newUser = response.data;
      dispatch(addUser(newUser));
      alert(`Usuario creado con ID: ${newUser.id}`);
    } catch (error) {
      console.error("Error creando usuario ... ", error);
    }
  };

  return (
    <form onSubmit={handleCreateUser}>
      <h2>Crear Usuario</h2>
      <div className="container-input">
        <input
          type="text"
          placeholder=" Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Trabajo"
          value={job}
          onChange={(e) => setJob(e.target.value)}
          required
        />
        <button type="submit">CREAR USUARIO</button>
      </div>
    </form>
  );
};

export default CreateUser;
