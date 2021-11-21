import axios from 'axios';

const BASE_URL = "http://localhost:8080";

export const loadLandingPageProducts = async (header) => {
    return await axios.get(BASE_URL + "/products", {headers: {"Authorization": header}});
}

export const loadNewArrivals = async () => {
    return await axios.get(BASE_URL + "/products/new");
}

export const loadLastChance = async () => {
    return await axios.get(BASE_URL + "/products/last");
}

export const loadProduct = async (id) => {
    return await axios.get(BASE_URL + "/product", {params: {productId: id}});
}

