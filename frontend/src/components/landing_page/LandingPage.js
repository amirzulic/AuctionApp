import React from 'react';
import "./landingPage.css";
import {useHistory} from 'react-router-dom';
import BidPhoto from "./bidphoto.png";
import FeatureCollectionPhoto from "./feature_collection1.png";
import FeatureCollectionPhoto2 from "./feature_collection2.png";
import FeatureCollectionPhoto3 from "./feature_collection3.png";

function LandingPage() {

    let history = useHistory();

    function handleSubmit() {
        history.push("/product");
    }

    return (
        <div className="container-fluid">
            <div className="background">
                <nav className="navbar navbar-expand-lg navbar-light pageName">
                    <div className="container">
                        <div className="row container align-items-center">
                            <div className="col">
                                <h1 className="landingPageTitle">CATEGORIES</h1>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row container align-items-center">
                        <div className="col">
                            <table>
                                <tr className="categoriesBoxItem"><td>Fashion</td></tr>
                                <tr className="categoriesBoxItem"><td>Accesories</td></tr>
                                <tr className="categoriesBoxItem"><td>Jewlery</td></tr>
                                <tr className="categoriesBoxItem"><td>Shoes</td></tr>
                                <tr className="categoriesBoxItem"><td>Sportware</td></tr>
                                <tr className="categoriesBoxItem"><td>Home</td></tr>
                                <tr className="categoriesBoxItem"><td>Electronics</td></tr>
                                <tr className="categoriesBoxItem"><td>Mobile</td></tr>
                                <tr className="categoriesBoxItem"><td>Computer</td></tr>
                                <tr className="categoriesBoxItem"><td>All categories</td></tr>
                            </table>
                        </div>
                        <div className="col">
                            <h1 className="featureItemName">Item name</h1>
                            <h2 className="featureItemPrice">Start From Price</h2>
                            <p className="featureItemDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue. Vivamus quis malesuada velit. In hac habitasse platea dictumst. </p>
                            <button onClick={handleSubmit} className="btn bidNowButton">BID NOW ></button>
                        </div>
                        <div className="col">
                            <img src={BidPhoto}/>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="featureCollectionOne align-items-center">
                <div>
                    <h1>Feature Collection</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={FeatureCollectionPhoto}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                </div>
            </div>

            <div className="featureCollectionTwo align-items-center">
                <div>
                    <h1>Feature Collection</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={FeatureCollectionPhoto2}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto2}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto2}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto2}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                </div>
            </div>*/}
            <div className="row"><br/></div>
            <div className="scrollableCollection align-items-center">
                <div className="justify-content-start">
                    <h1>New arrivals</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from <b className="textPurpleBold">price</b></h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from <b className="textPurpleBold">price</b></h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from <b className="textPurpleBold">price</b></h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from <b className="textPurpleBold">price</b></h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from <b className="textPurpleBold">price</b></h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from <b className="textPurpleBold">price</b></h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from <b className="textPurpleBold">price</b></h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from <b className="textPurpleBold">price</b></h3>
                    </div>
                </div>
            </div>
            <div className="row"><br/></div>
        </div>
    );
}

export default LandingPage;
