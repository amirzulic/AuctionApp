import axios from 'axios';

const BASE_URL = "http://localhost:8080";

export const saveBid = async (bid) => {
    return await axios.post(BASE_URL + "/bid", bid)
}
