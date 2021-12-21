import axios from 'axios';

export const registerUser = async (user) => {
    return await axios.post(process.env.REACT_APP_BASE_URL + "/register", user);
}

export const loginUser = async (user, header) => {
    return await axios.post(process.env.REACT_APP_BASE_URL + "/login", user)
}

export const getUser = async (token) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/user", {params: {token: token}});
}

export const updateUser = async (user) => {
    return await axios.post(process.env.REACT_APP_BASE_URL + "/user-update", user);
}

export const deactivateUser = async (id) => {
    return await axios.post(process.env.REACT_APP_BASE_URL + "/deactivate", {params: {userId: id}});
}
