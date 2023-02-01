import axios from "axios";

//03951220/json

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;