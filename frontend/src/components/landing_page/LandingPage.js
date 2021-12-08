import React, {useEffect, useState} from 'react';
import "./landingPage.css";
import {useHistory, Link} from 'react-router-dom';
import BidPhoto from "./keyboard.png";
import FeatureCollectionPhoto from "./feature_collection1.png";
import FeatureCollectionPhoto2 from "./feature_collection2.png";
import FeatureCollectionPhoto3 from "./feature_collection3.png";
import {loadLandingPageProducts, loadLastChance, loadNewArrivals} from "../../services/ProductService";



function LandingPage() {
    let history = useHistory();

    const header = localStorage.getItem("Authorization");

    const [toggleTab, setToggleTab] = useState(1);

    const [featured, setFeatured] = useState([]);
    const [newArrivals, setNewArrivals] = useState([]);
    const [lastChance, setLastChance] = useState([]);

    useEffect(() => {
        loadLandingPageProducts().then(res => {
            setFeatured(res.data);
        }).catch((err) => {
            console.log(err);
        });
        loadNewArrivals().then(res => {
            setNewArrivals(res.data);
        }).catch((err) => {
            console.log(err);
        });
        loadLastChance().then(res => {
            setLastChance(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    function redirect(id) {
        history.push("/product?productId=" + id);
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
                        {featured.length > 0 ?
                            <div className="col">
                                <h1 onClick={() => redirect(featured[0].productId)} className="featureItemName">{featured[0].name}</h1>
                                <h2 className="featureItemPrice">Starts From {featured[0].startingPrice}$</h2>
                                <p className="featureItemDescription">{featured[0].description}</p>
                                { header != null ? <button onClick={() => redirect(featured[0].productId)} className="btn bidNowButton">BID NOW ></button>: null}
                            </div> : null
                        }
                        <div className="col">
                            <img onClick={() => redirect(featured[0].productId)} src={BidPhoto}/>
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
                <div className="row container align-items-center">
                    <div className="col-2">
                        <h1 onClick={() => setToggleTab(1)} className="tabHover">New arrivals</h1>
                    </div>
                    <div className="col-2">
                        <h1 onClick={() => setToggleTab(2)} className="tabHover">Last chance</h1>
                    </div>
                </div>
                <div className="row"><br/></div>
                    <div className="row container align-items-center">
                        {newArrivals.length > 0 && toggleTab === 1 ? newArrivals.map((prod, i) =>
                        <div className="col-3">
                            <img onClick={() => redirect(newArrivals[i].productId)} src={FeatureCollectionPhoto3}/>
                            <h2 key={i}>{newArrivals[i].name}</h2>
                            <h3 key={i}>Start from <b className="textPurpleBold">{newArrivals[i].startingPrice}$</b></h3>
                        </div>) : lastChance.map((prod, i) => <div className="col-3">
                            <img onClick={() => redirect(lastChance[i].productId)} src={FeatureCollectionPhoto3}/>
                            <h2 key={i}>{lastChance[i].name}</h2>
                            <h3 key={i}>Start from <b className="textPurpleBold">{lastChance[i].startingPrice}$</b></h3>
                        </div> )}
                    </div>
                </div>
            <div className="row"><br/></div>
        </div>
    );
}

export default LandingPage;
