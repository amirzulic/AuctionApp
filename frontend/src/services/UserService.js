import axios from 'axios';

//const BASE_URL = "http://localhost:8080";

export const registerUser = async (user) => {
    return await axios.post("/register", user);
}

export const loginUser = async (user, header) => {
    return await axios.post("/login", user)
}
