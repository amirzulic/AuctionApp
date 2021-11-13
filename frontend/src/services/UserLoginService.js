import axios from "axios";

const BASE_URL = "http://localhost:8080";

const loginUser = async (user, header) => {
    return await axios.post(BASE_URL + "/login", user, header)
}

export default loginUser;
