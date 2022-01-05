import React, {useEffect, useState} from 'react';
import './singleProduct.css';
import LargeProductPhoto from './product_photo_large.png';
import {useHistory} from 'react-router-dom';
import BidderPhoto from './bidder_photo.png';
import SmallProductPhoto from './product_photo_small.png';
import RelatedProductPhoto from './related_products_photo.png';
import {Link} from "react-router-dom";
import Logo from "../../images/app-logo.png";
import {loadProduct} from "../../services/ProductService";
import {getUser} from "../../services/UserService";
import {saveBid, loadBid, getBidders} from "../../services/BidService";
import {useFormik} from "formik";
import * as Yup from 'yup';

const SingleProduct = ({location}) => {

    let history = useHistory();

    const header = localStorage.getItem("Authorization");

    const [product, setProduct] = useState([]);
    const [bids, setBids] = useState([]);
    const [bidders, setBidders] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        loadProduct(location.search.split("=")[1]).then(res => {
            setProduct(res.data);
        }).catch((err) => {
            console.log(err);
        });
        loadBid(location.search.split("=")[1]).then(res => {
            setBids(res.data);
        }).catch((err) => {
            console.log(err);
        })
        getBidders(location.search.split("=")[1]).then(res => {
            setBidders(res.data);
        }).catch((err) => {
            console.log(err);
        })
        getUser(header).then(res => {
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const formik = useFormik({
        initialValues: {
            price: 0,
        },
        onSubmit: values => {
            let bid = {
                price: formik.values.price,
                productId: product.productId,
                userId: user.userId
            }

            if(bid.price < bids.price) {
                alert("There are higher bids than yours. You could give it a second try!");
            } else if (bid.price === bids.price) {
                alert("The bid is equal to the highest bid. You could give it a second try!");
            } else {
                saveBid(bid, header).then(res => {
                    history.push("/");
                }).catch((err) => {
                    history.push("/");
                    console.log(err);
                })
            }
        }
    })

    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light pageName">
                <div className="container">
                    <div className="row container align-items-center">
                        <div className="col container">
                            {product != null ? <h1 className="productTitle">{product.name}</h1> : null}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="row"><br/></div>
            <div className="row">
                <div className="col text-center">
                    <img src={LargeProductPhoto}/>
                    {/*<div className="row">
                        <div className="col">
                            <img src={SmallProductPhoto}/>
                        </div>
                        <div className="col">
                            <img src={SmallProductPhoto}/>
                        </div>
                        <div className="col">
                            <img src={SmallProductPhoto}/>
                        </div>
                        <div className="col">
                            <img src={SmallProductPhoto}/>
                        </div>
                        <div className="col">
                            <img src={SmallProductPhoto}/>
                        </div>
                    </div>*/}
                </div>
                <div className="col">
                    {product != null ?
                    <h2>{product.name}</h2> : null }
                    {product != null ?
                    <p className="textPurple">Starts from <b>{product.startingPrice}$</b></p> : null }
                    {bids != null ?
                    <div className="bidInfo">
                        <p>Highest bid: <b className="textPurpleBold">{bids.price}$</b></p>
                        <p>Number of bids: <b className="textPurpleBold">{bids.count}</b> </p>
                        <p>Time left: <b className="textPurpleBold">10 weeks 6 days</b></p>
                    </div> : null }
                    <br/>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col">
                                {bids != null && header != null ?
                                <input type="number" className="bidInput h-100 productParagraph"
                                       id="price" name="price"
                                       placeholder={"Enter " + (bids.price +1) + "$ or higher"}
                                       onBlur={formik.handleBlur}
                                       onChange={formik.handleChange}/> : null }
                            </div>
                            <div className="col justify-content-end">
                                {header != null ?<button type="submit" className="btn submitBid">PLACE BID ></button>:null}
                            </div>
                        </div>
                    </form>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <p>Details</p>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-10">
                                <hr/>
                                {product != null ?
                                    <p className="productParagraph"><i>{product.description}</i></p>
                                : null}
                            </div>
                            <div className="col"></div>
                        </div>
                </div>
            </div>
            <div className="container">
                    <div className="row container biddersBox">
                        <div className="row biddersTitleInfoBackground align-items-center">
                            <div className="col-8">
                                <h4 className="biddersBoxInfoTitle">Bider</h4>
                            </div>
                            <div className="col-2">
                                <h4 className="biddersBoxInfoTitle">Date</h4>
                            </div>
                            <div className="col-2">
                                <h4 className="biddersBoxInfoTitle">Bid</h4>
                            </div>
                        </div>
                        {bidders.length > 0 ? bidders.map((bidder, i) =>
                            <div className="row align-items-center pt-1 pb-1">
                                <div className="col-1">
                                    <img src={BidderPhoto}/>
                                </div>
                                <div className="col">
                                    <h4 key={i} className="biddersInfoText">{bidders[i].firstName + " " + bidders[i].lastName}</h4>
                                </div>
                                <div className="col-2">
                                    <h4 className="biddersInfoText">4 March 2020</h4>
                                </div>
                                <div className="col-2">
                                    <h4 key={i} className="biddersInfoText text-success">{bidders[i].price}$</h4>
                                </div>
                            </div> ): null
                        }
                    </div>
                    <div className="row"><br/></div>
            </div>
            {/*<div className="row align-items-center text-center">
                <h3>Related products</h3>
                <hr/>
            </div>
            <div className="relatedProducts align-items-center">
                <div className="row align-items-center">
                    <div className="col">
                        <img src={RelatedProductPhoto}/>
                        <h4>Shoes collection</h4>
                        <p className="productParagraph">Starts from price</p>
                    </div>
                    <div className="col">
                        <img src={RelatedProductPhoto}/>
                        <h4>Shoes collection</h4>
                        <p className="productParagraph">Starts from price</p>
                    </div>
                    <div className="col">
                        <img src={RelatedProductPhoto}/>
                        <h4>Shoes collection</h4>
                        <p className="productParagraph">Starts from price</p>
                    </div>
                </div>
            </div>*/}
        </div>
    );

}

export default SingleProduct;
