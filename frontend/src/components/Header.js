import React from 'react';
import NavbarBlack from "./NavbarBlack";
import NavbarWhite from "./NavbarWhite";
import '../style/ComponentStyle.css';

function Header() {
    return(
        <div>
            <NavbarBlack/>
            <NavbarWhite/>
        </div>
    );
}

export default Header;
