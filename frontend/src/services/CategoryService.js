import axios from "axios";

export const loadCategories = async () => {
    return await axios.get(process.env.REACT_APP_D_URL + "/categories");
}

export const loadSubCategories = async (id) => {
    return await axios.get(process.env.REACT_APP_D_URL + "/sub-category", {params: {productCategoryId: id}});
}
