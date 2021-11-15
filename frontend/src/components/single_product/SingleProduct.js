import React from 'react';
import './singleProduct.css';
import LargeProductPhoto from './product_photo_large.png';
import SmallProductPhoto from './product_photo_small.png';
import RelatedProductPhoto from './related_products_photo.png';
import {Link} from "react-router-dom";
import Logo from "../../images/app-logo.png";

function SingleProduct() {

    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light pageName">
                <div className="container">
                    <div className="row container align-items-center">
                        <div className="col container">
                            <h1 className="productTitle">Product name</h1>
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
                    <h2>Product name</h2>
                    <p className="textPurple">Starts from <b>price</b></p>
                    <div className="bidInfo">
                        <p>Highest bid: <b className="textPurpleBold">price</b></p>
                        <p>Number of bids: <b className="textPurpleBold">1</b> </p>
                        <p>Time left: <b className="textPurpleBold">10 weeks 6 days</b></p>
                    </div>
                    <br/>
                    <form>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="bidInput h-100 productParagraph"
                                       id="bid" name="bid"
                                       placeholder="Enter xx or higher"/>
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
                                <p className="productParagraph"><i>The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm. Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside. Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates</i></p>
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
