import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/ComponentStyle.css';
import Search from '../images/search.svg';
import Logo from '../images/app-logo.png';
import {Link} from "react-router-dom";
import {loadLandingPageProducts, loadProductsByCategory} from "../services/ProductService";
import {loadCategories} from "../services/CategoryService";

function NavbarWhite() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="row container align-items-center">
                        <div className="col container">
                            <Link to="/">
                                <img src={Logo} alt="Logo"/>
                            </Link>
                        </div>
                        <div className="col">
                            <input className="form-control searchBar" type="text" placeholder="Try enter: Shoes"/>
                        </div>
                        <div className="col">
                            <ul className="navbar-nav justify-content-end">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/shop">SHOP</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">MY ACCOUNT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarWhite;
