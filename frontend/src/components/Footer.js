import React from 'react';
import "../style/ComponentStyle.css";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import google from "../images/google.svg";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4 className="footerTitleButton">AUCTION</h4>
                        <ul className="list-unstyled footerText">
                            <a href="/about-us" className="hrefText">
                                <li>About us</li>
                            </a>
                            <a href="/terms-and-conditions" className="hrefText">
                                <li>Terms and Conditions</li>
                            </a>
                            <a href="/privacy-and-policy" className="hrefText">
                                <li>Privacy and Policy</li>
                            </a>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4 className="footerTitleButton">GET IN TOUCH</h4>
                        <ul className="list-unstyled footerText">
                            <li>Call us at +123 797-567-2535</li>
                            <li>support@auction.com</li>
                            <li>
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
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
