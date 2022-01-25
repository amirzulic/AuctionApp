import React, {useEffect, useRef, useState} from 'react';
import './addProduct.css';
import axios from 'axios';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import {loadLandingPageProducts, loadProductsByCategory, addNewProduct} from "../../services/ProductService";
import {loadCategories, loadAllSubCategories} from "../../services/CategoryService";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {getUser} from "../../services/UserService";
import {useHistory} from "react-router-dom";
import {loadSubCategories} from "../../services/CategoryService";

function AddProduct() {
    let history = useHistory();

    const header = localStorage.getItem("Authorization");

    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [countries, setCountries] = useState({});
    const [cities, setCities] = useState([]);
    const [catId, setCatId] = useState(0);
    const [subCatId, setSubCatId] = useState(0);
    const [user, setUser] = useState({});
    const [imageUrl, setImageUrl] = useState("");
    const [giveCities, setGiveCities] = useState(true);

    const inputFile = useRef();

    function nextButtonClick() {
        setStep(step + 1);
        setProgress(progress + 50);
    }

    function backButtonClick() {
        setStep(step - 1);
        setProgress(progress - 50);
    }

    function mapCities(e) {
        Object.keys(countries).map((all, i) =>
            all === e.target.value ? setCities(Object.values(countries)[i]) : null)
        setGiveCities(false);
    }

    function handleChangePhoto() {
        inputFile.current.click();
    }

    const uploadImage = (files) => {
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "auctionapp");

        axios.post("https://api.cloudinary.com/v1_1/dw3duxdxo/image/upload", formData)
            .then(res => {
                setImageUrl(res.data.url);
                console.log(res.data.url);
            });
    }

    function handleSubCategories(id) {
        setCatId(id);
        loadSubCategories(id).then(res => {
            setSubCategories(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    function getCategoryId(e) {
        {categories.map((category, i) =>
            category.categoryName === e.target.value ? handleSubCategories(category.productCategoryId)
                : null
        )}
    }

    function getSubCategoryId(e) {
        {subCategories.map((subCategory, i) =>
            subCategory.subCategoryName === e.target.value ? setSubCatId(subCategory.productSubCategoryId) : null
        )}
    }

    function getCountriesAPI() {
        return fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        loadCategories().then(res => {
            setCategories(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
        loadAllSubCategories().then(res => {
            setSubCategories(res.data);
        }).catch((err) => {
            console.log(err);
        })
        getCountriesAPI().then(res => {
            setCountries(res);
        }).catch((err) => {
            console.log(err);
        });
        getUser(header).then(res => {
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
            startingPrice: null,
            picture: "",
            startDate: null,
            endDate: null,
            description: '',
            productCategoryId: null,
            productSubCategoryId: null,
            address: '',
            country: 'Afghanistan',
            city: '',
            zipcode: '',
            phone: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            description: Yup.string()
                .max(700, 'Must be 700 characters or less')
                .required('Required'),
            startDate: Yup.date().min(new Date(), "The starting date can't be in the past!")
                .max(Yup.ref('endDate'), "The starting date can't be after the end date!"),
            endDate: Yup.date().min(new Date(), "The ending date can't be in the past!")
        }),
        onSubmit: values => {

            let product = {
                name: formik.values.name,
                startingPrice: formik.values.startingPrice,
                picture: imageUrl,
                startDate: formik.values.startDate,
                endDate: formik.values.endDate,
                userId: user.userId,
                description: formik.values.description,
                productCategoryId: catId,
                productSubCategoryId: subCatId,
                address: formik.values.address,
                country: formik.values.country,
                city: formik.values.city,
                zipcode: formik.values.zipcode,
                phone: formik.values.phone
            }

            addNewProduct(product).then(res => {
                console.log(res.data);
                alert("Produkt uspjesno dodan");
                history.push("/");
            }).catch((err) => {
                console.log(err);
            })

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
                                    <h1 className="addProductTitle">Become Seller</h1>
                                </div>
                                <div className="col">
                                    <h2 className="float-end addProductTitle">
                                        My account ->
                                        <b className="purpleColor">
                                            Become Seller
                                        </b>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="row"><br/></div>
            <div className="row">
                <div className="col-5"></div>
                <div className="col text-center">
                    <ProgressBar
                        percent={progress}
                        filledBackground="linear-gradient(to right, #8367D8, #8367D8)"
                        unfilledBackground="linear-gradient(to right, #FCFCFC, #FCFCFC)"
                        hasStepZero={true}
                        height = {3}
                    >
                        <Step transition="scale">
                            {({ accomplished }) => (
                                <div></div>
                            )}
                        </Step>
                        <Step transition="scale">
                            {({ accomplished }) => (
                                <div></div>
                            )}
                        </Step>
                        <Step transition="scale">
                            {({ accomplished }) => (
                                <div></div>
                            )}
                        </Step>
                    </ProgressBar>
                </div>
                <div className="col-5"></div>
            </div>
            <div className="row"><br/></div>
            {step === 1 ?
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col addProductFormBox">
                        <div className="row">
                            <div className="col formTitleBox text-center p-2">
                                <h1 className="formTitleText">ADD ITEM</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col">
                                <div className="row"><br/></div>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="productName">What do you sell?</label>
                                        <input type="text" className="form-control inputStyle" id="name"
                                               placeholder="Product name"
                                               value={formik.values.name}
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}/>
                                        {formik.touched.name && formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                                    </div>
                                    <div className="row"><br/></div>
                                    {categories.length > 0 ?
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <select className="form-control selectStyle" id="productCategoryId" placeholder="Select category"
                                                        onBlur={formik.handleBlur}
                                                        onChange={event => getCategoryId(event)}>
                                                    <option>Select Category</option>
                                                    {categories.map((cat, i) =>
                                                    <option key={i}>{categories[i].categoryName}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <select className="form-control selectStyle" id="productSubCategoryId" placeholder="Select SubCategory"
                                                        onBlur={formik.handleBlur}
                                                        onChange={event => getSubCategoryId(event)}>
                                                    <option>Select SubCategory</option>
                                                    {subCategories.length > 0 ? subCategories.map((cat, i) =>
                                                        <option key={i}>{subCategories[i].subCategoryName}</option>
                                                    ) : null}
                                                </select>
                                            </div>
                                        </div>
                                    </div> : null }
                                    <div className="row"><br/></div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea rows="10" maxLength="200" className="form-control inputStyle" id="description"
                                                  value={formik.values.description}
                                                  onBlur={formik.handleBlur}
                                                  onChange={formik.handleChange}/>
                                        {formik.touched.description && formik.errors.description ? <div className="text-danger">{formik.errors.description}</div> : null}
                                    </div>
                                    <div className="row"><br/></div>
                                    <div className="photoInputBox text-center" style={{height: 280 }} onClick={handleChangePhoto}>
                                        <input type='file' id='picture' ref={inputFile} style={{display: 'none'}}
                                               onChange={(event) => uploadImage(event.target.files)}/>
                                        <div className="row">
                                            <h2 className="uploadPhotoText">Upload Photos</h2>
                                        </div>
                                        <div className="row">
                                            <h3 className="dragAndDropText">or just drag and drop</h3>
                                        </div>
                                        <div className="row">
                                            <h4 className="addThreeText">+Add at least 3 photos</h4>
                                        </div>
                                    </div>
                                    <div className="row"><br/></div>
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn backButton w-100" onClick={backButtonClick}>BACK</button>
                                        </div>
                                        <div className="col w-100">
                                            <button className="btn nextButton w-100" onClick={nextButtonClick}>NEXT</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="row"><br/></div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div> : null
            }
            {step === 2 ?
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col addProductFormBox">
                        <div className="row">
                            <div className="col formTitleBox text-center p-2">
                                <h1 className="formTitleText">SET PRICES</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col">
                                <div className="row"><br/></div>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="startPrice">Your start price</label>
                                        <input type="number" className="form-control inputStyle" id="startingPrice"
                                               placeholder="Starting price"
                                               value={formik.values.startingPrice}
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}/>
                                    </div>
                                    <div className="row"><br/></div>
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="startDate">Start date</label>
                                                <input type="datetime-local" className="form-control inputStyle" id="startDate"
                                                       value={formik.values.startDate}
                                                       onBlur={formik.handleBlur}
                                                       onChange={formik.handleChange}/>
                                                {formik.touched.startDate && formik.errors.startDate ? <div className="text-danger">{formik.errors.startDate}</div> : null}
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <label htmlFor="endDate">End Date</label>
                                                <input type="datetime-local" className="form-control inputStyle" id="endDate"
                                                       value={formik.values.endDate}
                                                       onBlur={formik.handleBlur}
                                                       onChange={formik.handleChange}/>
                                                {formik.touched.endDate && formik.errors.endDate ? <div className="text-danger">{formik.errors.endDate}</div> : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row"><br/></div>
                                    <div className="row">
                                        <p className="setPriceText">The auction will be automatically closed when the end time comes. The highest bid will win the auction.</p>
                                    </div>
                                    <div className="row"><br/></div>
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn backButton w-100" onClick={backButtonClick}>BACK</button>
                                        </div>
                                        <div className="col w-100">
                                            <button className="btn nextButton w-100" onClick={nextButtonClick}>NEXT</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="row"><br/></div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div> : null
            }
            {step === 3 ?
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col addProductFormBox">
                        <div className="row">
                            <div className="col formTitleBox text-center p-2">
                                <h1 className="formTitleText">LOCATION & SHIPPING</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col">
                                <div className="row"><br/></div>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <input type="text" className="form-control inputStyle" id="address"
                                               placeholder="Enter address"
                                               value={formik.values.address}
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}/>
                                    </div>
                                    <div className="row"><br/></div>
                                    {countries !== {} ?
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-group">
                                                <select className="form-control selectStyle" id="city"
                                                        placeholder="Select City"
                                                        disabled={giveCities}
                                                        onBlur={formik.handleBlur}
                                                        onChange={formik.handleChange}>
                                                    <option>Select City</option>
                                                    {cities.length > 0 ? cities.map((city, i) =>
                                                    <option key={i}>{city}</option>
                                                    ) : null}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-group">
                                                <select className="form-control selectStyle" id="country"
                                                        placeholder="Select Country"
                                                        onBlur={formik.handleBlur}
                                                        onChange={event => mapCities(event)}>
                                                    <option>Select Country</option>
                                                    {Object.keys(countries).map((country, i) =>
                                                        <option key={i}>{country}</option>
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </div> : null }
                                    <div className="row"><br/></div>
                                    <div className="form-group">
                                        <label htmlFor="zipCode">Zip Code</label>
                                        <input type="text" className="form-control inputStyle" id="zipcode"
                                               placeholder="Enter the Zip Code"
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" className="form-control inputStyle" id="phone"
                                               placeholder="Enter Phone Number"
                                               value={formik.values.phone}
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}/>
                                    </div>
                                    <div className="row"><br/></div>
                                    {/*<div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                               id="checkbox"/>
                                        <label className="form-check-label" htmlFor="checkbox">
                                            Do you want to bear shipping cost?
                                        </label>
                                        <p className="bearShippingText">The average priece of shipping cost is $10.00.
                                            You have to provide us payment infromations.</p>
                                    </div>*/}
                                    <div className="row"><br/></div>
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn backButton w-100" onClick={backButtonClick}>BACK</button>
                                        </div>
                                        <div className="col w-100">
                                            <button type="submit" className="btn doneButton w-100">DONE</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="row"><br/></div>
                            </div>
                            <div className="col-1"></div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div> : null
            }
            <div className="row"><br/></div>
        </div>
    );
}

export default AddProduct;
