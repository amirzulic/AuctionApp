import React, {useEffect, useState} from 'react';
import FilterPhoto2 from "./filter_photo2.png";
import {
    loadLandingPageProducts,
    loadLastChance,
    loadNewArrivals,
    loadDefaultSortingByCategory,
    loadNewArrivalsByCategory,
    loadLastChanceByCategory,
    loadLowToHighByCategory,
    loadHighToLowByCategory,
    loadProductsByCategory,
    loadDefaultSorting,
    loadLowToHigh,
    loadHighToLow,
    loadProductsBySubCategory,
    loadProductsInRange,
    loadProductsInRangeByCategory,
    loadProductsBySubCategoryDefaultSorting,
    loadProductsBySubCategoryHighToLow,
    loadProductsBySubCategoryLastChance,
    loadProductsBySubCategoryLowToHigh,
    loadProductsBySubCategoryNewArrivals
} from "../../services/ProductService";
import {loadCategories, loadSubCategories} from "../../services/CategoryService";
import "./shopPage.css";
import {useHistory} from 'react-router-dom';
import PlusIcon from "./plus_icon.svg";
import MinusIcon from "./minus_icon.svg";
import GridIcon from "./grid_icon.svg";
import ListIcon from "./list_icon.svg";
import DeleteIcon from "./x_icon.svg";
import "bootstrap/js/src/dropdown";
import Slider from '@material-ui/core/Slider';

const ShopPage = ({location}) => {
    let history = useHistory();

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [categoryPressed, setCategoryPressed] = useState(0);
    const [view, setView] = useState("grid");
    const [showSort, setShowSort] = useState(1);
    const [checkboxCount, setCheckboxCount] = useState(0);
    const [value, setValue] =  React.useState([1, 500]);
    const [categoryName, setCategoryName] = useState("");
    const [subCategoryName, setSubCategoryName] = useState("");
    const [priceRange, setPriceRange] = useState([]);

    const rangeSelector = (event, newValue) => {
        setValue(newValue);

        if(location.search.split("=")[1] == null && checkboxCount === 0) {
            loadProductsInRange(value[0], value[1]).then(res => {
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            })
        } else if(location.search.split("=")[1] != null && subCategoryName === "") {
            loadProductsInRangeByCategory(location.search.split("=")[1], value[0], value[1]).then(res => {
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            })
        } else if(location.search.split("=")[1] != null && subCategoryName !== "") {
            let new_list = []

            products.map((prod) => (
                prod.startingPrice >= value[0] && prod.startingPrice <= value[1] ? new_list.push(prod) : null
            ))

            setProducts(new_list);
        }
    };

    function onCategoryClick(id) {
        loadSubCategories(id).then(res => {
            setSubCategories(res.data);
        }).catch((err) => {
            console.log(err);
        })
        setCategoryPressed(id);
        for(let i = 0; i < categories.length; i++) {
            if(categories[i].productCategoryId === id) {
                setCategoryName(categories[i].categoryName);
            }
        }
    }

    function handleDeleteCategoryFilter() {
        loadProductsInRange(value[0], value[1]).then(res => {
            setProducts(res.data);
        }).catch((err) => {
            console.log(err);
        })
        setCategoryName("");
        setSubCategoryName("");
        setCategoryPressed(0);
    }

    function handleDeletePriceRangeFilter() {
        setValue([1, 500]);
        if(categoryName === "") {
            loadLandingPageProducts().then(res => {
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            })
            setCategoryPressed(0);
        } else if(categoryName !== "" && subCategoryName === ""){
            categories.map((cat) =>
                cat.categoryName === categoryName ?
                    loadProductsByCategory(cat.productCategoryId).then(res => {
                        setProducts(res.data);
                    }) : null
            )
        } else if(categoryName !== "" && subCategoryName !== "") {
            subCategories.map((cat) =>
                cat.subCategoryName === subCategoryName ?
                    loadProductsBySubCategory(subCategoryName).then(res => {
                        setProducts(res.data);
                    }) : null
            )
        }
        setCategoryPressed(0);
    }

    function handleClearAll() {
        loadLandingPageProducts().then(res => {
            setProducts(res.data);
        }).catch((err) => {
            console.log(err);
        })
        setCategoryPressed(0);
        setValue([1,500]);
    }

    function onViewChange(view) {
        setView(view);
    }

    function onProductClick(id) {
        history.push("/product?productId=" + id);
    }

    function handleCheckbox(name) {
        setSubCategoryName(name);
        if(checkboxCount > 0) {
            loadProductsBySubCategory(name).then(res => {
                /*let appendProd = [];
                products.map((prod) => appendProd.push(prod));
                res.data.map((prod) => appendProd.push(prod));*/
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            })
        } else {
            loadProductsBySubCategory(name).then(res => {
                setProducts(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
        setCheckboxCount(checkboxCount + 1);
    }

    function sort(type) {
        setShowSort(type)
        if(type === 1) {
            if(location.search.split("=")[1] == null && checkboxCount === 0) {
                loadDefaultSorting().then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            } else if(location.search.split("=")[1] != null && subCategoryName === "") {
                loadDefaultSortingByCategory(location.search.split("=")[1]).then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            } else if(subCategoryName !== "" && (location.search.split("=")[1] != null || checkboxCount > 0)) {
                loadProductsBySubCategoryDefaultSorting(subCategoryName).then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            }
        } else if(type === 2) {
            if(location.search.split("=")[1] == null && checkboxCount === 0) {
                loadNewArrivals().then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            } else if(location.search.split("=")[1] != null && subCategoryName === "") {
                loadNewArrivalsByCategory(location.search.split("=")[1]).then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            } else if(subCategoryName !== "" && (location.search.split("=")[1] != null || checkboxCount > 0)) {
                loadProductsBySubCategoryNewArrivals(subCategoryName).then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            }
        } else if(type === 3) {
            if(location.search.split("=")[1] == null && checkboxCount === 0) {
                loadLastChance().then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            } else if(location.search.split("=")[1] != null && subCategoryName === "") {
                loadLastChanceByCategory(location.search.split("=")[1]).then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            } else if(subCategoryName !== "" && (location.search.split("=")[1] != null || checkboxCount > 0)) {
                loadProductsBySubCategoryLastChance(subCategoryName).then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            }
        } else if(type === 4) {
            if(location.search.split("=")[1] == null && checkboxCount === 0) {
                loadLowToHigh().then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            } else if(location.search.split("=")[1] != null && subCategoryName === "") {
                loadLowToHighByCategory(location.search.split("=")[1]).then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            } else if(subCategoryName !== "" && (location.search.split("=")[1] != null || checkboxCount > 0)) {
                loadProductsBySubCategoryLowToHigh(subCategoryName).then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            }
        } else if(type === 5) {
            if(location.search.split("=")[1] == null && checkboxCount === 0) {
                loadHighToLow().then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            } else if(location.search.split("=")[1] != null && subCategoryName === "") {
                loadHighToLowByCategory(location.search.split("=")[1]).then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            } else if(subCategoryName !== "" && (location.search.split("=")[1] != null || checkboxCount > 0)) {
                console.log()
                loadProductsBySubCategoryHighToLow(subCategoryName).then(res => {
                    setProducts(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            }
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
                                                        <input type="checkbox" class="form-check-input checkboxColor" onChange={() => {handleCheckbox(subCategories[i].subCategoryName)}}/>
                                                        {subCategories[i].subCategoryName}({subCategories.length})</h2>
                                                ) : null}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ) : null }
                        </table>
                        <div className="row"><br/></div>
                        <div className="row">
                            <div className="col">
                                <div className="productCategoriesBox">
                                    <h1 className="rangeSliderTitle">Price range</h1>
                                    <div className="row"><br/></div>
                                    <div className="row">
                                        <div className="col">
                                            <h2 className="rangeSliderPriceBoxes">{value[0]}$</h2>
                                        </div>
                                        <div className="col">
                                            <h2 className="rangeSliderPriceBoxes">{value[1]}$</h2>
                                        </div>
                                    </div>
                                    <div className="row"><br/></div>
                                    <div className="row">
                                        <Slider
                                            min = {1}
                                            max = {500}
                                            color={"#8367D8"}
                                            value={value}
                                            onChange={rangeSelector}
                                            valueLabelDisplay="auto"
                                        />
                                    </div>
                                    <div className="row"><br/></div>
                                    <div className="row">
                                        <h3 className="rangeSliderPriceRange">{value[0]}$-{value[1]}$</h3>
                                    </div>
                                    <div className="row">
                                        <p className="rangeSliderAverageInfo">{value[0] == null ? "The average price is " + value[1] : "The average price is " + Math.round(value[1]/value[0])}$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {categoryPressed > 0 || value[0] !== 1 || value[1] !== 500 ?
                            <div className="row container">
                                <div className="col-4">
                                    <p className="filterTitle">Category</p>
                                </div>
                                <div className="col-4">
                                    <p className="filterTitle">Price range</p>
                                </div>
                            </div> : null }
                        { categoryPressed > 0 || value[0] !== 1 || value[1] !== 500 ?
                        <div className="row container">
                            <div className="col-4">
                                { categoryName !== "" ?
                                <p className="filterData">
                                    {categoryName + "/"}{subCategoryName}
                                    <img onClick={() => {handleDeleteCategoryFilter()}} src={DeleteIcon}/>
                                </p> : null }
                            </div>
                            <div className="col-4">
                                <p className="filterData">{value[0] + "-" + value[1]}$ <img onClick={() => {handleDeletePriceRangeFilter()}} src={DeleteIcon}/></p>
                            </div>
                            <div className="col-4">
                                <button onClick={() => {handleClearAll()}} className="float-end btn closeAllButton">Clear all <img src={DeleteIcon}/></button>
                            </div>
                        </div> : null }
                        {categoryPressed > 0 ?
                        <div className="row"><br/></div>: null }
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
