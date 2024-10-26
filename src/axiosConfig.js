import axios from "axios";

//Creamos una instancia de axios:
//para manejar las solicitudes de la API
const iAX = axios.create({
  baseURL: "https://reqres.in/api",
});

//Interceptor de solicitud para agregar el token en los encabezados si estos existen
iAX.interceptors.request.use(
  (config) => {
    //Obtengo el token del almacenamiento local
    const token = localStorage.getItem("token");
    if (token) {
      //Añado el token al header
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    //Retorno la configuracion modificada
    return config;
  },
  (error) => {
    //Manejo errores en la solicitud
    return Promise.reject(error);
  },
);

//Interceptor de respuesta
iAX.interceptors.response.use(
  (response) => {
    //Devuelvo la respuesta tal cual si no se generann errores
    return response;
  },
  (error) => {
    //Manejo errores de respuestas
    return Promise.reject(error);
  },
);

export default iAX;
