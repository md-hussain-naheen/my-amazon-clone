import axios from "axios";

const instance = axios.create({
  
  baseURL: '//http://localhost:5001/clone-fca93/us-central1/api'
});
   //http://localhost:5001/clone-fca93/us-central1/api
export default instance;