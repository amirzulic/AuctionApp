import axios from 'axios';

//const BASE_URL = "https://backend-app-auction.herokuapp.com";
const BASE_URL = "http://localhost:8080";

export const loadLandingPageProducts = async () => {
    return await axios.get(BASE_URL + "/products");
}

export const loadProductsByCategory = async (id) => {
    return await axios.get(BASE_URL + "/shop", {params: {productCategoryId: id}});
}

export const loadNewArrivals = async () => {
    return await axios.get(BASE_URL + "/products/new");
}

export const loadLastChance = async () => {
    return await axios.get(BASE_URL + "/products/last");
}

export const loadProduct = async (id, header) => {
    return await axios.get(BASE_URL + "/product", {params: {productId: id}});
}

