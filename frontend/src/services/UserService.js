import axios from 'axios';

const API_BASE_URL = "http://localhost:8080";
const USER_API_REGISTRATION_URL = "http://localhost:8080/register";

class UserService {

    getUsers() {
        return axios.get(API_BASE_URL);
    }

    registerUser(user) {
        return axios.post(USER_API_REGISTRATION_URL, user);
    }

}

export default new UserService();
