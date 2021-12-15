import axios from 'axios';

export const registerUser = async (user) => {
    return await axios.post(process.env.REACT_APP_BASE_URL + "/register", user);
}

export const loginUser = async (user, header) => {
    return await axios.post(process.env.REACT_APP_BASE_URL + "/login", user)
}
