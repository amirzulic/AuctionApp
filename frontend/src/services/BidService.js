import axios from 'axios';

//const BASE_URL = "https://backend-app-auction.herokuapp.com";
const BASE_URL = "http://localhost:8080";

export const saveBid = async (bid, header) => {
    return await axios.post(BASE_URL + "/bid", bid, {headers: {"Authorization": header}})
}

export const loadBid = async(id) => {
    return await axios.get(BASE_URL + "/bid-info", {params: {productId: id}});
}
