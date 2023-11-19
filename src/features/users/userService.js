import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const register = async(user) => {
    const response = await axios.post(`${base_url}users/register`, user);
    if (response.data) {
        return response.data;
    }
}

const login = async(user) => {
    const response = await axios.post(`${base_url}users/login`, user);
    if (response.data) {
        return response.data;
    }
}

export const authService = {
    register,
    login
}