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
                    <div className="row container-fluid">
                        <div className="col">
                                <img src={facebook} className="icon"/>
                                <img src={instagram} className="icon"/>
                                <img src={twitter} className="icon"/>
                                <img src={google} className="icon"/>
                        </div>
                        <div className="col">
                            <div className="container-fluid">
                                <a href="#">Login </a>
                                or
                                <a href="#"> Create an account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}

export default NavbarBlack;
