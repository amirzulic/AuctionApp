import React, {useEffect, useState} from 'react';
import FilterPhoto2 from "./filter_photo2.png";
import {
    loadLandingPageProducts,
    loadLastChance,
    loadNewArrivals,
    loadNewArrivalsByCategory,
    loadLastChanceByCategory,
    loadHighToLowByCategory,
    loadLowToHighByCategory,
    loadDefaultSortingByCategory,
    loadProductsByCategory
} from "../../services/ProductService";
import {loadCategories, loadSubCategories} from "../../services/CategoryService";
import "./shopPage.css";
import {useHistory} from 'react-router-dom';
import PlusIcon from "./plus_icon.svg";
import MinusIcon from "./minus_icon.svg";
import GridIcon from "./grid_icon.svg";
import ListIcon from "./list_icon.svg";
import "bootstrap/js/src/dropdown";

const ShopPage = ({location}) => {
    let history = useHistory();

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [categoryPressed, setCategoryPressed] = useState(0);
    const [view, setView] = useState("grid");
    const [showSort, setShowSort] = useState(1);

    function onCategoryClick(id) {
        loadSubCategories(id).then(res => {
            setSubCategories(res.data);
        }).catch((err) => {
            console.log(err);
        })
        setCategoryPressed(id);
    }

    function onViewChange(view) {
        setView(view);
    }

    function onProductClick(id) {
        history.push("/product?productId=" + id);
    }

    function sort(type) {
        setShowSort(type)
        if(type === 1) {
            loadDefaultSortingByCategory(location.search.split("=")[1]).then(res => {
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            })
        } else if(type === 2) {
            loadNewArrivalsByCategory(location.search.split("=")[1]).then(res => {
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            })
        } else if(type === 3) {
            loadLastChanceByCategory(location.search.split("=")[1]).then(res => {
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            })
        } else if(type === 4) {
            loadLowToHighByCategory(location.search.split("=")[1]).then(res => {
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            })
        } else if(type === 5) {
            loadHighToLowByCategory(location.search.split("=")[1]).then(res => {
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
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
                                        <img onClick={() => {categoryPressed === 0 ? onCategoryClick(categories[i].productCategoryId) : onCategoryClick(0)} }
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
                            <div className="col-4">
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle border w-100 sortButtonText" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {showSort === 1 ? "Default Sorting"
                                        : showSort === 2 ? "Added"
                                        : showSort === 3 ? "Time left"
                                        : showSort === 4 ? "Low to high"
                                        : "High to low"}
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li className="dropdown-item"
                                            onClick={() => {sort(1)}}>Default sorting</li>
                                        <li className="dropdown-item"
                                            onClick={() => {sort(2)}}>Added</li>
                                        <li className="dropdown-item"
                                            onClick={() => {sort(3)}}>Time left</li>
                                        <li className="dropdown-item"
                                            onClick={() => {sort(4)}}>Low to High</li>
                                        <li className="dropdown-item"
                                            onClick={() => {sort(5)}}>High to Low</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col buttons">
                                <button
                                    onClick={() => {onViewChange("list")}}
                                    className="float-end btn"><img  className="px-1" src={ListIcon}/>LIST</button>
                                <button
                                    onClick={() => {onViewChange("grid")}}
                                    className="float-end btn"><img className="px-1" src={GridIcon}/>GRID</button>
                            </div>
                            <div className="row"><br/></div>
                            {view === "grid" ?
                                <div className="row">
                                    {products.length > 0 ? products.map((prod, i) =>
                                        <div className="col-4">
                                            <img onClick={() => {onProductClick(products[i].productId)}} src={FilterPhoto2}/>
                                            <h2 className="itemNameText" key={i}>{products[i].name}</h2>
                                            <h3 className="startingPriceText" key={i}>Start from <b className="textPurpleBold">{products[i].startingPrice}$</b></h3>
                                        </div> ) : null }
                                </div> : null }
                                {view === "list" ?
                                <div className="row">
                                    {products.length > 0 ? products.map((lprod, i) =>
                                        <div className="row">
                                            <div className="col-4">
                                                <img onClick={() => {onProductClick(products[i].productId)}} src={FilterPhoto2}/>
                                            </div>
                                            <div className="col align-items-center">
                                                <h2 className="listItemNameText" key={i}>{products[i].name}</h2>
                                                <p className="itemDescText pt-4" key={i}>{products[i].description}</p>
                                                <div className="row">
                                                    <h3 className="listItemStartingPriceText pt-4" key={i}>Start from <b>{products[i].startingPrice}$</b></h3>
                                                </div>
                                            </div>
                                            <div className="row"><br/></div>
                                        </div>
                                    ) : null }
                                </div>
                            : null }
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"><br/></div>
        </div>
    );

}

export default ShopPage;
