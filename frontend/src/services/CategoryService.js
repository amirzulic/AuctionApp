import axios from "axios";

//const BASE_URL = "https://backend-app-auction.herokuapp.com";
const BASE_URL = "http://localhost:8080";

export const loadCategories = async () => {
    return await axios.get(BASE_URL + "/categories");
}

export const loadSubCategories = async (id) => {
    return await axios.get(BASE_URL + "/sub-category", {params: {productCategoryId: id}});
}
