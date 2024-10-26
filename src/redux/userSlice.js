import { createSlice } from "@reduxjs/toolkit";

//Se define el initialState con una propiedad :
//users :  que setá un array donde se almacenaremos a los usuarios
const initialState = {
  users: [],
};

//Creando el slice de usuarios con dos reducers
//addUser : Añade un uisuario nuevo al array users
//setUsers : reemplaza el array users con un nuevo array
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    setUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { addUser, setUser } = userSlice.actions;
export default userSlice.reducer;
