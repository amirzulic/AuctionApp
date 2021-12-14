import React, {useEffect, useState} from 'react';
import FilterPhoto2 from "./filter_photo2.png";
import {
    loadLandingPageProducts,
    loadLastChance,
    loadNewArrivals,
    loadProductsByCategory
} from "../../services/ProductService";
import {loadCategories, loadSubCategories} from "../../services/CategoryService";
import "./shopPage.css";
import {useHistory} from 'react-router-dom';
import PlusIcon from "./plus_icon.svg";
import MinusIcon from "./minus_icon.svg";
import GridIcon from "./grid_icon.svg";
import ListIcon from "./list_icon.svg";

const ShopPage = ({location}) => {
    let history = useHistory();

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [categoryPressed, setCategoryPressed] = useState(0);

    function onCategoryClick(id) {
        loadSubCategories(id).then(res => {
            setSubCategories(res.data);
        }).catch((err) => {
            console.log(err);
        })
        setCategoryPressed(id);
    }

    function onProductClick(id) {
        history.push("/product?productId=" + id);
    }

    useEffect(() => {
        if(location.search.split("=")[1] == null) {
            loadLandingPageProducts().then(res => {
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            });
        } else {
            loadProductsByCategory(location.search.split("=")[1]).then(res => {
                console.log(location.search.split("=")[1]);
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            });
            }
        loadCategories().then(res => {
            setCategories(res.data);
        }).catch((err) => {
            console.log(err);
        })
        }, []);


    return(
        <div className="container-fluid">
            <div className="container">
                <div className="row"><br/></div>
                <div className="row container">
                    <div className="col-3">
                        <table className="productCategoriesBox w-100">
                           <h1 className="productCategoriesBoxTitle text-center p-2">PRODUCT CATEGORIES</h1>
                            <br/>
                            { categories.length > 0 ? categories.map((prod, i) =>
                                <tr key={i} className="categoriesBoxItem">
                                    <td className="categoryName px-3">
                                        {categories[i].categoryName}
                                        <img onClick={() => {onCategoryClick(categories[i].productCategoryId)}}
                                             className="float-end"
                                             src={categoryPressed === categories[i].productCategoryId ? MinusIcon : PlusIcon}/>
                                        <div className="row">
                                            <div className="container justify-content-center">
                                                { subCategories.length > 0 && categoryPressed === categories[i].productCategoryId ? subCategories.map((sub, i) =>
                                                    <h2 className="subCategoryName" key={i}>
                                                        <input type="checkbox" class="form-check-input checkboxColor"/>
                                                        {subCategories[i].subCategoryName}({subCategories.length})</h2>
                                                ) : null}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ) : null }
                        </table>
                    </div>
                    <div className="col">
                        <div className="row container">
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="row">
                                {products.length > 0 ? products.map((prod, i) =>
                                    <div className="col-4">
                                        <img onClick={() => {onProductClick(products[i].productId)}} src={FilterPhoto2}/>
                                        <h2 className="itemNameText" key={i}>{products[i].name}</h2>
                                        <h3 className="startingPriceText" key={i}>Start from <b className="textPurpleBold">{products[i].startingPrice}$</b></h3>
                                    </div> ) : null }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"><br/></div>
        </div>
    );

}

export default ShopPage;
