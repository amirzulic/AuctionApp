import axios from 'axios';

const BASE_URL = "http://localhost:8080";


class UserService {
    
    registerUser(user) {
        return axios.post(BASE_URL + "/register", user);
    }

    loginUser(user, header) {
        return axios.post(BASE_URL + "/login", user, header)
    }

}

export default new UserService();
