import { Provider } from "react-redux";
import CreateUser from "./componentes/CreateUser";
import FetchUser from "./componentes/FetchUser";
import Login from "./componentes/Login";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Laboratorio N°3 Gestion de usuarios con Redux y Axio</h1>
        <Login />
        <CreateUser />
        <FetchUser />
      </div>
    </Provider>
  );
}

export default App;
