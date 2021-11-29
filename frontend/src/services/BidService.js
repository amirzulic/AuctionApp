import axios from 'axios';

//const BASE_URL = "http://localhost:8080";

export const saveBid = async (bid, header) => {
    return await axios.post("/bid", bid, {headers: {"Authorization": header}})
}
