import axios from 'axios';

const BASE_URL = "https://backend-app-auction.herokuapp.com";

export const registerUser = async (user) => {
    return await axios.post(BASE_URL + "/register", user);
}

export const loginUser = async (user, header) => {
    return await axios.post(BASE_URL + "/login", user)
}
