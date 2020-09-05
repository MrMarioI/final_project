// import axios from "axios";

// export function APIHandler(APIPrefix) {
//   return (() => { // IIFE (Immediatly Invoked Function Expression)
//     const instance = axios.create({ //méthode axios
//       baseURL: process.env.REACT_APP_BACKEND_URL + APIPrefix || "/photos", //normaliser la connection à l'API back
//     });

//     const getAll = () => instance.get("/");

//     const getById = (id) => instance.get("/" + id);

//     const getOne = (path, query) => instance.get("/" + path, { query });

//     return { // typeof du retour de l'IIFE ? Object
//       instance,
//       getAll,
//       getById,
//       getOne,
//     };
//   })();
// }

  
import axios from "axios";

export class APIHandler {
  constructor(APIPrefix) {
    if (!process.env.REACT_APP_BACKEND_URL || !APIPrefix)
      throw new Error(
        "fournir API prefix + URL de base pour effectuer des appels AJAX"
      );

    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL + APIPrefix,
    });
  }

  createOne(payload) {
    return this.instance.post("/", payload);
  }

  getAll() {
    return this.instance.get("/"); // retourne une Promesse
    // return axios.get("http://localhost:8888/api/products")
  }

  getById(id) {
    return this.instance.get("/" + id);
    // return axios.get("http://localhost:8888/api/products/${id}")
  }

  deleteOne(id) {
    return this.instance.delete("/" + id);
  }
}