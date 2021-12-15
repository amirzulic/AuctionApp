import axios from 'axios';

export const loadLandingPageProducts = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products");
}

export const loadProductsByCategory = async (id) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/shop", {params: {productCategoryId: id}});
}

export const loadNewArrivals = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/new");
}

export const loadLastChance = async () => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/products/last");
}

export const loadProduct = async (id, header) => {
    return await axios.get(process.env.REACT_APP_BASE_URL + "/product", {params: {productId: id}});
}

