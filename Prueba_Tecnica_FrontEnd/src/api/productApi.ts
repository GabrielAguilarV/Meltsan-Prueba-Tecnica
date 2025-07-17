import axios from "axios";

export const productApi = axios.create({
    baseURL: "http://localhost:8080/api/productos",
    });