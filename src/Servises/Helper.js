import axios from "axios";
export const BASE_URL = "";

export const myaxios  = axios.create({
    baseURL : BASE_URL,
});