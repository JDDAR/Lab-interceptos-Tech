import { configureStore } from "@reduxjs/toolkit";
//Reducers de autenticacion y de usuaris
import authReducer from "./authSlice";
import userReducer from "./userSlice";

//Configuracion del Store
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
