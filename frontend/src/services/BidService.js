import axios from 'axios';

export const saveBid = async (bid, header) => {
    return await axios.post("/bid", bid, {headers: {"Authorization": header}})
}

export const loadBid = async(id) => {
    return await axios.get("/bid-info", {params: {productId: id}});
}
