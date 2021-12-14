import axios from 'axios';

export const registerUser = async (user) => {
    return await axios.post(process.env.REACT_APP_D_URL + "/register", user);
}

export const loginUser = async (user, header) => {
    return await axios.post(process.env.REACT_APP_D_URL + "/login", user)
}
