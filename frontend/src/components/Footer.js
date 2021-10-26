import React from 'react';
import "../style/ComponentStyle.css";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import google from "../images/google.svg";

function Footer() {
    return (
        <div className="footer fixed-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4 className="footerTitleButton">AUCTION</h4>
                        <ul className="list-unstyled footerText">
                            <li>About us</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy and Policy</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4 className="footerTitleButton">GET IN TOUCH</h4>
                        <ul className="list-unstyled footerText">
                            <li>Call us at +123 797-567-2535</li>
                            <li>support@auction.com</li>
                            <li>
                                <img src={facebook} className="icon"/>
                                <img src={instagram} className="icon"/>
                                <img src={twitter} className="icon"/>
                                <img src={google} className="icon"/>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4 className="footerTitleButton">NEWSLETTER</h4>
                        <ul className="list-unstyled footerText">
                            <li>Enter your email address and get notified about new products. We hate spam!</li>
                            <li>Input form</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;
