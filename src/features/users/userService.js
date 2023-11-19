import axios from "axios";

const register = async(user) => {
    const response = await axios.post(``, user);
    if (response.data) {
        return response.data;
    }
}

export const authService = {
    register
}