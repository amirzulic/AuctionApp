import axios from 'axios';

export const saveBid = async (bid, header) => {
    return await axios.post( process.env.REACT_APP_BASE_URL + "/bid", bid, {headers: {"Authorization": header}})
}

export const loadBid = async(id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/bid-info", {params: {productId: id}});
}
