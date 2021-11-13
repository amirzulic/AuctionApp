import axios from 'axios';

const BASE_URL = "http://localhost:8080";

const registerUser = async (user) => {
    return await axios.post(BASE_URL + "/register", user);
}

export default registerUser;
