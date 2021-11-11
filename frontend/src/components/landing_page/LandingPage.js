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
        <div>
            <div className="categoriesCollection">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="sectionCategories">
                            <div className="categoriesBox">
                                <table>
                                    <tr className="categoriesBoxItem"><th>CATEGORIES</th></tr>
                                    <tr className="categoriesBoxItem"><td>Single cat</td></tr>
                                    <tr className="categoriesBoxItem"><td>Single cat</td></tr>
                                    <tr className="categoriesBoxItem"><td>Single cat</td></tr>
                                    <tr className="categoriesBoxItem"><td>Single cat</td></tr>
                                    <tr className="categoriesBoxItem"><td>Single cat</td></tr>
                                    <tr className="categoriesBoxItem"><td>Single cat</td></tr>
                                    <tr className="categoriesBoxItem"><td>Single cat</td></tr>
                                    <tr className="categoriesBoxItem"><td>Single cat</td></tr>
                                    <tr className="categoriesBoxItem"><td>Single cat</td></tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="sectionDisplayBid">
                            <div className="col">
                                <div className="sectionDisplayBidInfo">
                                    <h1>Item name</h1>
                                    <h2>Start From Price</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum hendrerit odio a erat lobortis auctor. Curabitur sodales pharetra placerat. Aenean auctor luctus tempus. Cras laoreet et magna in dignissim. Nam et tincidunt augue. Vivamus quis malesuada velit. In hac habitasse platea dictumst. </p>
                                    <button onClick={handleSubmit} className="btn">BID NOW ></button>
                                </div>

                            </div>
                            <div className="col">
                                <img src={BidPhoto}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featureCollectionOne align-items-center">
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
            </div>

            <div className="scrollableCollection align-items-center">
                <div className="justify-content-start">
                    <h1>New arrivals</h1>
                    <h1>Top rated</h1>
                    <h1>Last chance</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                    <div className="col">
                        <img src={FeatureCollectionPhoto3}/>
                        <h2>Shoes collection</h2>
                        <h3>Start from price</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
