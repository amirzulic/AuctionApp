import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from '../images/search.svg';
import Logo from '../images/app-logo.png';

function NavbarWhite() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="text-center container navbarWhite">
                    <a className="navbar-brand" href="/">
                        <img src={Logo} alt="Logo"/>
                    </a>
                    <div>
                        <input className="form-control searchBar border" type="text" placeholder="Try enter:  Shoes"/>
                    </div>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SHOP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MY ACCOUNT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarWhite;
