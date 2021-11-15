import React, {useState} from 'react';
import './register.css';
import registerUser from "../../services/UserRegisterService";
import {Link, useHistory} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from 'yup';

function Register() {

    let history = useHistory();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(8, 'Must be 8 charactrs or more')
                .max(15, 'Must be 15 characters or less')
                .required('Required')
        }),
        onSubmit: values => {
            let user = {
                firstName: formik.values.firstName,
                lastName: formik.values.lastName,
                email: formik.values.email,
                password: formik.values.password
            }
            
            registerUser(user).then(res => {
                console.log(res);
                history.push("/");
            }).catch((err) => {
                console.log(err);
                alert(err);
            })
        }
    })


    return(
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light pageName">
                    <div className="container">
                        <div className="row container align-items-center">
                            <div className="col container">
                                <h1 className="registerTitle">Register</h1>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="row"><br/></div>
                <div className="row">
                    <div className="col"></div>
                    <div className="col-5">
                        <div className="container registerForm">
                            <div className="container registerFormTitle">
                                <h1>REGISTER</h1>
                            </div>
                            <div className="container p-5">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="p-3">
                                        <div className="form-group pt-2">
                                            <label htmlFor="firstName">First name</label>
                                            <input type="text" className="form-control registerTextInput"
                                                   id="firstName" name="firstName"
                                                   placeholder="Enter first name"
                                                   value={formik.values.firstName}
                                                   onBlur={formik.handleBlur}
                                                   onChange={formik.handleChange}/>
                                            {formik.touched.firstName && formik.errors.firstName ? <div className="text-danger">{formik.errors.firstName}</div> : null}
                                        </div>
                                        <div className="form-group pt-2">
                                            <label htmlFor="lastName">Last name</label>
                                            <input type="text" className="form-control registerTextInput"
                                                   id="lastName" name="lastName"
                                                   placeholder="Enter last name"
                                                   value={formik.values.lastName}
                                                   onBlur={formik.handleBlur}
                                                   onChange={formik.handleChange}/>
                                            {formik.touched.lastName && formik.errors.lastName ? <div className="text-danger">{formik.errors.lastName}</div> : null}
                                        </div>
                                        <div className="form-group pt-2">
                                            <label htmlFor="email">Enter email</label>
                                            <input type="email" className="form-control registerTextInput"
                                                   id="email" name="email"
                                                   placeholder="Enter email"
                                                   value={formik.values.email}
                                                   onBlur={formik.handleBlur}
                                                   onChange={formik.handleChange}/>
                                            {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                                        </div>
                                        <div className="form-group pt-2">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control registerTextInput"
                                                   id="password" name="password"
                                                   placeholder="Password"
                                                   value={formik.values.password}
                                                   onBlur={formik.handleBlur}
                                                   onChange={formik.handleChange}/>
                                            {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                                        </div>
                                        <div className="registerButtons pt-3">
                                            <button type="submit" className="btn btn-primary registerButton">REGISTER</button>
                                        </div>
                                        <div className="row align-items-center pt-3">
                                            <div className="col text-center">
                                                <p>Already have an account?</p>
                                            </div>
                                            <div className="col text-center">
                                                <Link to="/login" className="hrefText">
                                                    <p className="pt-1 textPurpleBold">Login</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
                <div className="row"><br/></div>
            </div>
    );

}

export default Register;
