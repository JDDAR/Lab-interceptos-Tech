import { createSlice } from "@reduxjs/toolkit";

//definimos el initialState con dos propiedades
//token : para almacenar el tojken del usuario
//inAutenticaded : para saber si el usuario está autenticado
const initialState = {
  token: null,
  isAutenticated: false,
};

//Creamos un slice de autenticacioon con dos reducers :
//loginSuccess: se llama cuando el usuario se logea exitosamente
//logout: limpia el token y caambia el estado de autenticacion a false
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isAutenticated = true;
    },
    logout: (state) => {
      state.token = null;
      state.isAutenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
