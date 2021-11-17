import React, {useEffect, useState} from 'react';
import './singleProduct.css';
import LargeProductPhoto from './product_photo_large.png';
import {useHistory} from 'react-router-dom';
import SmallProductPhoto from './product_photo_small.png';
import RelatedProductPhoto from './related_products_photo.png';
import {Link} from "react-router-dom";
import Logo from "../../images/app-logo.png";
import {loadProduct} from "../../services/ProductService";

function SingleProduct() {

    let history = useHistory();

    const [product, setProduct] = useState([]);
    const [id, setId] = useState(1);

    useEffect(() => {
        loadProduct(id).then(res => {
            setProduct(res.data);
            setId(product.productId);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

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
                    {product != null ?
                    <div className="bidInfo">
                        <p>Highest bid: <b className="textPurpleBold">price</b></p>
                        <p>Number of bids: <b className="textPurpleBold">1</b> </p>
                        <p>Time left: <b className="textPurpleBold">10 weeks 6 days</b></p>
                    </div> : null }
                    <br/>
                    <form>
                        <div className="row">
                            <div className="col">
                                {product != null ?
                                <input type="text" className="bidInput h-100 productParagraph"
                                       id="bid" name="bid"
                                       placeholder={"Enter " + product.startingPrice + "$ or higher"}/> : null }
                            </div>
                            <div className="col justify-content-end">
                                <button type="submit" className="btn submitBid">PLACE BID ></button>
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
