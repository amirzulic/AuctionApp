import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/auction-app-logo.svg';
import Search from '../images/search.svg';

function NavbarWhite() {
    return (
        <div>
            <nav className="navbar navbarWhite navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={Logo}/>
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control" type="search" placeholder="Try enter: Shoes"/>
                            </form>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavbarWhite;
