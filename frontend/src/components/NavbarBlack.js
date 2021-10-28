import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "react-bootstrap";
import '../style/ComponentStyle.css';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import google from '../images/google.svg';

function NavbarBlack() {
    return (
        <div>
            <Navbar bg="dark" className="navbarBlack">
                <div className="container">
                    <div className="row container">
                        <div className="col">
                                <a href="https://facebook.com">
                                    <img src={facebook} className="icon"/>
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
                        <div className="col text-lg-end">
                            <div className="container-fluid">
                                <a href="/login" className="hrefText">Login </a>
                                or
                                <a href="#" className="hrefText"> Create an account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}

export default NavbarBlack;
