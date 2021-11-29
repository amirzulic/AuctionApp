import axios from 'axios';

export const registerUser = async (user) => {
    return await axios.post("/register", user);
}

export const loginUser = async (user, header) => {
    return await axios.post("/login", user)
}
