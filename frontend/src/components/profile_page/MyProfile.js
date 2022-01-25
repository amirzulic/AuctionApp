import React, {useEffect, useRef, useState} from 'react';
import {deactivateUser, getUser, loginUser, updateUser} from "../../services/UserService";
import './myProfile.css';
import ProfileIcon from './icons/profile_icon.svg';
import SellerIcon from './icons/seller_icon.svg';
import BidsIcon from './icons/bids_icon.svg';
import SettingsIcon from './icons/settings_icon.svg';
import CartIcon from './icons/cart_icon.svg';
import ItemPhoto from './icons/item_photo.png';
import {useFormik} from "formik";
import * as Yup from "yup";
import {useHistory} from "react-router-dom";
import {loadProduct, loadProductsByUserId} from "../../services/ProductService";
import {getBidByUserId} from "../../services/BidService";

function MyProfile () {
    let history = useHistory();

    const token = localStorage.getItem("Authorization");

    const [user, setUser] = useState({});
    const [tab, setTab] = useState(1);
    const [birthdate, setBirthdate] = useState([]);
    const [sellerTabView, setSellerTabView] = useState(1);
    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [activeProducts, setActiveProducts] = useState([]);
    const [bids, setBids] = useState([]);

    const inputFile = useRef(null);

    function handleTabSwitch(tab) {
        setTab(tab);
        if(tab === 3) {
            getBidByUserId(user.userId).then(res => {
                setBids(res.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    function handleDeactivate(id) {
        deactivateUser(id).then(res => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
        localStorage.removeItem("Authorization");
        history.push("/");
    }

    function handleSellerViewChange(tab) {
        if(tab === 1) {
            setSellerTabView(1);
            loadProductsByUserId(user.userId).then(res => {
                setActiveProducts(res.data);
            }).catch((err) => {
                console.log(err);
            })
        } else {
            setSellerTabView(2);
        }
    }

    function handleChangePhoto() {
        inputFile.current.click();
    }

    function onImageUpload(e) {
        setImage(e.target.files);
    }

    useEffect(() => {
        if(token !== null) {
            getUser(token).then(res => {
                setUser(res.data);
                let date = res.data.birthdate.split("/");
                setBirthdate(date);
            }).catch((err) => {
                console.log(err);
            });
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            dayOfBirth: birthdate[0],
            monthOfBirth: birthdate[1],
            yearOfBirth: birthdate[2],
            phone: user.phone,
            email: user.email
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            let update = {
                userId: user.userId,
                firstName: formik.values.firstName,
                lastName: formik.values.lastName,
                gender: formik.values.gender,
                birthdate: formik.values.dayOfBirth + "/" + formik.values.monthOfBirth + "/" + formik.values.yearOfBirth,
                phone: formik.values.phone,
                email: formik.values.email
            }

            updateUser(update).then(res => {
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            })

            history.push("/");
        }
    })

    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light pageName">
                <div className="container">
                    <div className="row container align-items-center">
                        <div className="col container">
                            <div className="row">
                                <div className="col">
                                    <h1 className="myProfileTitle">Profile</h1>
                                </div>
                                <div className="col">
                                    <h2 className="float-end myProfileTitle">
                                        My account ->
                                        <b className="purpleColor">
                                            {tab === 1 ? "Profile"
                                            : tab === 2 ? "Seller"
                                            : tab === 3 ? "Bids"
                                            : "Settings"}
                                        </b>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="row"><br/></div>
            <div className="container">
                <div className="row container">
                    <div className="col-2">
                        <button className="btn profile-button" onClick={event => {handleTabSwitch(1)}}>
                            <img src={ProfileIcon} className="pe-2 profileIcon"/>
                            Profile
                        </button>
                    </div>
                    <div className="col-2">
                        <button className="btn profile-button" onClick={event => {handleTabSwitch(2)}}>
                            <img src={SellerIcon} className="pe-2"/>
                            Seller
                        </button>
                    </div>
                    <div className="col-2">
                        <button className="btn profile-button" onClick={event => {handleTabSwitch(3)}}>
                            <img src={BidsIcon} className="pe-2"/>
                            Bids
                        </button>
                    </div>
                    <div className="col-2">
                        <button className="btn profile-button" onClick={event => {handleTabSwitch(4)}}>
                            <img src={SettingsIcon} className="pe-2"/>
                            Settings
                        </button>
                    </div>
                </div>
            </div>
            <div className="row"><br/></div>
            {tab === 1  && user !== {} && birthdate !== [] ?
                <div className="container">
                    <div className="row container">
                        <div className="row profilePageTitleBox">
                            <div className="col p-2">
                                <h1 className="profilePageTitle">Required</h1>
                            </div>
                        </div>
                        <div className="row profilePageUserBox px-2">
                            <div className="row"><br/></div>
                            <div className="col-4 align-items-center">
                                <img className="rounded-circle border border-dark w-100 img-fluid"
                                     src={user.photo}/>
                                     <div className="row"><br/></div>
                                <button className="btn changePhotoButton w-100" onClick={() => {handleChangePhoto()}}>CHANGE PHOTO</button>
                                <input type='file' id='photo' ref={inputFile} style={{display: 'none'}} onChange={onImageUpload}/>
                            </div>
                            <div className="col-2"></div>
                            <div className="col-5">
                               <form onSubmit={formik.handleSubmit}>
                                   <div className="row">
                                       <div className="col">
                                           <label htmlFor="firstName">First name</label>
                                           <input type="text" className="form-control form-control-lg profile-input" id="firstName"
                                                  placeholder={user.firstName}
                                                  value={formik.values.firstName}
                                                  onBlur={formik.handleBlur}
                                                  onChange={formik.handleChange}/>
                                       </div>
                                   </div>
                                   <div className="row pt-2">
                                       <div className="col">
                                           <label htmlFor="lastName">Last name</label>
                                           <input type="text" className="form-control form-control-lg profile-input" id="lastName"
                                                  placeholder={user.lastName}
                                                  value={formik.values.lastName}
                                                  onBlur={formik.handleBlur}
                                                  onChange={formik.handleChange}/>
                                       </div>
                                   </div>
                                   <div className="row pt-2">
                                       <div className="col-8">
                                           <label htmlFor="gender">I am</label>
                                           <select className="form-control form-control-lg profile-input" id="gender"
                                                   placeholder={user.gender}
                                                   value={formik.values.gender}
                                                   onBlur={formik.handleBlur}
                                                   onChange={formik.handleChange}>
                                               <option>Male</option>
                                               <option>Female</option>
                                           </select>
                                       </div>
                                   </div>
                                   <div className="row pt-2">
                                       <label htmlFor="dayOfBirth">Date of birth</label>
                                       <div className="col">
                                           <input type="number" className="form-control form-control-lg profile-input" id="dayOfBirth"
                                                  placeholder={birthdate[0]}
                                                  value={formik.values.dayOfBirth}
                                                  onBlur={formik.handleBlur}
                                                  onChange={formik.handleChange}/>
                                       </div>
                                       <div className="col">
                                           <input type="number" className="form-control form-control-lg profile-input" id="monthOfBirth"
                                                  placeholder={birthdate[1]}
                                                  value={formik.values.monthOfBirth}
                                                  onBlur={formik.handleBlur}
                                                  onChange={formik.handleChange}/>
                                       </div>
                                       <div className="col">
                                           <input type="number" className="form-control form-control-lg profile-input" id="yearOfBirth"
                                                  placeholder={birthdate[2]}
                                                  value={formik.values.yearOfBirth}
                                                  onBlur={formik.handleBlur}
                                                  onChange={formik.handleChange}/>
                                       </div>
                                   </div>
                                   <div className="row pt-2">
                                       <div className="col">
                                           <label htmlFor="phone">Phone number</label>
                                           <input type="text" className="form-control form-control-lg profile-input" id="phone"
                                                  placeholder={user.phone}
                                                  value={formik.values.phone}
                                                  onBlur={formik.handleBlur}
                                                  onChange={formik.handleChange}/>
                                       </div>
                                   </div>
                                   <div className="row pt-2">
                                       <div className="col">
                                           <label htmlFor="email">Email address</label>
                                           <input type="email" className="form-control form-control-lg profile-input" id="email"
                                                  placeholder={user.email}
                                                  value={formik.values.email}
                                                  onBlur={formik.handleBlur}
                                                  onChange={formik.handleChange}/>
                                       </div>
                                   </div>
                                   <div className="row"><br/></div>
                                   <div className="row">
                                       <div className="col">
                                           <button type="submit" className="btn changePhotoButton float-end">SAVE CHANGES <b> > </b></button>
                                       </div>
                                   </div>
                               </form>
                            </div>
                            <div className="row"><br/></div>
                        </div>
                        <div className="row"><br/></div>
                    </div>
                </div> : null
            }
            {tab === 2 ?
                <div className="container">
                    <div className="row container">
                        <div className="row">
                            <button className="btn sellerTabButton w-auto"
                                    onClick={() => {handleSellerViewChange(1)}}>Active</button>
                            <button className="btn sellerTabButton w-auto"
                                    onClick={() => {handleSellerViewChange(2)}}>Sold</button>
                        </div>
                        <div className="row profilePageTitleBox">
                            <div className="col-1 p-2">
                                <h1 className="profilePageTitle">Item</h1>
                            </div>
                            <div className="col-3 p-2">
                                <h1 className="profilePageTitle">Name</h1>
                            </div>
                            <div className="col-2 p-2">
                                <h1 className="profilePageTitle">Time left</h1>
                            </div>
                            <div className="col-2 p-2">
                                <h1 className="profilePageTitle">Your price</h1>
                            </div>
                            <div className="col-1 p-2">
                                <h1 className="profilePageTitle">No. bids</h1>
                            </div>
                            <div className="col-3 p-2">
                                <h1 className="profilePageTitle">Highest bid</h1>
                            </div>
                        </div>
                        {sellerTabView === 1 && activeProducts.length > 0 ? activeProducts.map((prod, i) =>
                            <div className="row profilePageUserBox px-2">
                                <div className="row"><br/></div>
                                <div className="col-1">
                                    <img src={ItemPhoto}/>
                                </div>
                                <div className="col-3 align-self-center">
                                    <h1 key={i} className="itemInfoText">{activeProducts[i].name}</h1>
                                </div>
                                <div className="col-2 align-self-center">
                                    <h1 className="itemInfoText"></h1>
                                </div>
                                <div className="col-2 align-self-center">
                                    <h1 key={i} className="itemInfoText">{activeProducts[i].startingPrice}$</h1>
                                </div>
                                <div className="col-1 align-self-center">
                                    <h1 className="itemInfoText">12</h1>
                                </div>
                                <div className="col-2 align-self-center">
                                    <h1 className="itemInfoText">300$</h1>
                                </div>
                                <div className="col align-self-center">
                                    <button className="btn viewItemButton" onClick={() => history.push("/product?productId=" + activeProducts[i].productId)}>VIEW</button>
                                </div>
                                <div className="row"><br/></div>
                            </div> )
                            :
                            <div className="row profilePageUserBox px-2">
                                <div className="row"><br/></div>
                                <div className="col text-center">
                                    <img src={CartIcon}/>
                                    <div className="row"><br/></div>
                                    <h2 className="noItemsText">You do not have any scheduled items for sale.</h2>
                                    <div className="row"><br/></div>
                                    <button className="btn changePhotoButton" onClick={() => {history.push("/become-seller")}}>START SELLING</button>
                                    <div className="row"><br/></div>
                                </div>
                            </div>}
                    </div>
                </div> : null
            }
                <div className="container">
                    <div className="row container">
                        {tab === 3 ?
                        <div className="row profilePageTitleBox">
                            <div className="col-1 p-2">
                                <h1 className="profilePageTitle">Item</h1>
                            </div>
                            <div className="col-3 align-self-center">
                                <h1 className="profilePageTitle">Name</h1>
                            </div>
                            <div className="col-2 align-self-center">
                                <h1 className="profilePageTitle">Time left</h1>
                            </div>
                            <div className="col-2 align-self-center">
                                <h1 className="profilePageTitle">Your price</h1>
                            </div>
                            <div className="col-1 align-self-center">
                                <h1 className="profilePageTitle">No. bids</h1>
                            </div>
                            <div className="col-3 align-self-center">
                                <h1 className="profilePageTitle">Highest bid</h1>
                            </div>
                        </div> : null }
                        {tab === 3 && bids.length > 0 ? bids.map((bid, i) =>
                        <div className="row profilePageUserBox px-2">
                            <div className="row"><br/></div>
                            <div className="col-1">
                                <img src={ItemPhoto}/>
                            </div>
                            <div className="col-3 align-self-center">
                                <h1 key = {i} className="itemInfoText">Iphone 6s</h1>
                            </div>
                            <div className="col-2 align-self-center">
                                <h1 className="itemInfoText">10 weeks 6 days</h1>
                            </div>
                            <div className="col-2 align-self-center">
                                <h1 key = {i} className="itemInfoText">{bids[i].price}</h1>
                            </div>
                            <div className="col-1 align-self-center">
                                <h1 className="itemInfoText">6</h1>
                            </div>
                            <div className="col-2 align-self-center">
                                <h1 key = {i} className="itemInfoText">{bids[i].price}</h1>
                            </div>
                            <div className="col align-self-center">
                                <button className="btn viewItemButton" onClick={() => {history.push("/product/?productId=" + bids[i].productId)}}>VIEW</button>
                            </div>
                            <div className="row"><br/></div>
                        </div> ) : null }
                    </div>
                </div>
            {tab === 4 ?
                <div className="container">
                    <div className="row w-50 container">
                        <div className="row profilePageTitleBox">
                            <div className="col p-2">
                                <h1 className="profilePageTitle">Acount</h1>
                            </div>
                        </div>
                        <div className="row profilePageUserBox px-2">
                            <div className="row"><br/></div>
                            <div className="row">
                                <div className="col">
                                    <h1 className="deactivateText">Do you want to deactivate your account?</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button className="btn viewItemButton" onClick={() => {handleDeactivate(user.userId)}}>DEACTIVATE</button>
                                </div>
                            </div>
                            <div className="row"><br/></div>
                        </div>
                    </div>
                </div> : null
            }
            <div className="row"><br/></div>
        </div>
    );
}

export default MyProfile;
