import axios from 'axios';

const BASE_URL = "http://localhost:8080";

export const loadLandingPageProducts = async () => {
    return await axios.get(BASE_URL + "/products");
}

export const loadProduct = async (id) => {
    return await axios.get(BASE_URL + "/product", {params: {productId: id}});
}

