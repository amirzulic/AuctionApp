import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "react-bootstrap";
import '../style/ComponentStyle.css';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import google from '../images/google.svg';
import {Link} from "react-router-dom";

function NavbarBlack() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbarBlack">
                <div className="container">
                    <div className="row container align-items-center">
                        <div className="col">
                                <a href="https://facebook.com">
                                    <img src={facebook}/>
                                </a>
                                <a href="https://instagram.com">
                                    <img src={instagram} className="icon"/>
                                </a>
                                <a href="https://twitter.com">
                                    <img src={twitter} className="icon"/>
                                </a>
                                <a href="https://myaccount.google.com/">
                                    <img src={google} className="icon"/>
                                </a>
                        </div>
                        <div className="col"></div>
                        <div className="col container">
                            {/*<Link to="/login" className="hrefText">Login </Link>
                            or
                            <Link to="/register" className="hrefText"> Create an account</Link>*/}
                            <ul className="navbar-nav justify-content-end">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <h1></h1>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Create an account</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarBlack;
