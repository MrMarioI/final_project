// // import axios from "axios";

// // export function APIHandler(APIPrefix) {
// //   return (() => { // IIFE (Immediatly Invoked Function Expression)
// //     const instance = axios.create({ //méthode axios
// //       baseURL: process.env.REACT_APP_BACKEND_URL + APIPrefix || "/photos", //normaliser la connection à l'API back
// //     });

// //     const getAll = () => instance.get("/");

// //     const getById = (id) => instance.get("/" + id);

// //     const getOne = (path, query) => instance.get("/" + path, { query });

// //     return { // typeof du retour de l'IIFE ? Object
// //       instance,
// //       getAll,
// //       getById,
// //       getOne,
// //     };
// //   })();
// // }

  
// import axios from "axios";

// export class APIHandler {
//   constructor(APIPrefix) {
//     if (!process.env.REACT_APP_BACKEND_URL || !APIPrefix)
//       throw new Error(
//         "fournir API prefix + URL de base pour effectuer des appels AJAX"
//       );

//     this.instance = axios.create({
//       baseURL: process.env.REACT_APP_BACKEND_URL + APIPrefix,
//     });
//   }

//   createOne(payload) {
//     return this.instance.post("/", payload);
//   }

//   getAll() {
//     return this.instance.get("/"); // retourne une Promesse
//     // return axios.get("http://localhost:8888/api/users")
//   }

//   getById(id) {
//     return this.instance.get("/" + id);
//     // return axios.get("http://localhost:8888/api/users/${id}")
//   }

//   deleteOne(id) {
//     return this.instance.delete("/" + id);
//   }
// }

import axios from "axios";
const tokenName = "authToken";

export function ApiHandler() {
  // utile pour normaliser la connection à l'API back
  const backendURL = process.env.REACT_APP_BACKEND_URL;
  if (!backendURL)
    throw new Error("fournir URL de base pour effectuer appel AJAX");

  const instance = axios.create({
    // les requêtes effectuées avec axios prennent par défaut l'url du backend
    baseURL: backendURL,
  });

  instance.interceptors.request.use(
    (config) => {
      // Ce code est exécuté avant l'envoi de chaque requête axios
      // important : on configure le type des entêtes en JSON
      config.headers["Content-Type"] = "application/json";

      // on essaie de récupérer le token d'auth dans le local storage
      // READ THE DOC : https://jwt.io/
      const localAuthToken = window.localStorage.getItem(tokenName);
      // console.log("auth token ? >>> ", localAuthToken);

      // si le token JWT existe, on l'envoie dans l'entête (header) de chaque requête HTTP partant vers le backend
      // READ THE DOC : https://developer.mozilla.org/fr/docs/Web/HTTP/Headers
      if (localAuthToken) config.headers["x-authenticate"] = localAuthToken; // la clé de l'entête
      // si le token est absent, le serveur rejettera la requête entrante sur les routes protégées ...
      return config;
    },
    (error) => {
      // Do something with request error...
      return Promise.reject(error);
    }
  );

  return instance;
}