import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../images/search.svg';
import Logo from '../images/app-logo.png';
import {Link} from "react-router-dom";

function NavbarWhite() {
    return (
        <div>
<<<<<<< Updated upstream
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="text-center container navbarWhite">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                    <div>
                        <input className="form-control searchBar border" type="text" placeholder="Try enter:  Shoes"/>
                    </div>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">SHOP</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">MY ACCOUNT</Link>
                            </li>
                        </ul>
=======
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
                                    <Link className="nav-link" to="#">SHOP</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">MY ACCOUNT</Link>
                                </li>
                            </ul>
                        </div>
>>>>>>> Stashed changes
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarWhite;
