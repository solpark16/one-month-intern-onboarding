import axios from "axios";

const jsonApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default jsonApi;
