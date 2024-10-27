import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import iAX from "../axiosConfig";
import { setUser } from "../redux/userSlice";

const FetchUser = () => {
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleFetchUser = async (e) => {
    e.preventDefault();
    try {
      const response = await iAX.get(`/users/${userId}`);
      const user = response.data.data;
      console.log("user Fetch : ", user);
      dispatch(setUser([user]));
    } catch (error) {
      console.log("Error Obteniendo usuario...", error);
      alert("El usuario con id : " + userId + " No Existe en la API");
    }
  };

  return (
    <div>
      <form onSubmit={handleFetchUser}>
        <h2>Obtener usuario</h2>
        <div className="info-forms">
          <p>
            Ingrese Id con usuarios que existen en la api :{" "}
            <span> ID : 1 - 12 </span>{" "}
          </p>
        </div>
        <div className="container-input">
          <input
            type="text"
            placeholder="ID de usuario"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <button type="submit">BUSCAR</button>
        </div>
      </form>
      {users.length > 0 && (
        <div className="respuestaUsuarios">
          <h3>Usuario Encontrado</h3>
          <p>
            Nombre : {users[0].first_name} {users[0].last_name}
          </p>
          <p>Email : {users[0].email}</p>
        </div>
      )}
    </div>
  );
};

export default FetchUser;
