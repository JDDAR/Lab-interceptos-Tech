import { useState } from "react";
import { useDispatch } from "react-redux";
import iAX from "../axiosConfig";
import { loginSuccess } from "../redux/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const hadleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await iAX.post("/login", {
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);
      //Despacho la acion al slice
      dispatch(loginSuccess(token));
      alert("Login exitoso. Token guardado.......... TOKEN : " + token);
    } catch (error) {
      console.error("Error en login: ", error);
    }
  };

  return (
    <form onSubmit={hadleLogin}>
      <h2>Login</h2>
      <div className="info-forms">
        <p> utilice las siguientes credenciales para probar el login </p>
        <p>
          {" "}
          <span>Email : </span> eve.holt@reqres.in <span>Password : </span>
          cityslicka
        </p>
      </div>
      <div className="container-input">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">ENVIAR</button>
      </div>
    </form>
  );
};

export default Login;
