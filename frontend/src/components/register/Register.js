import React, {useState} from 'react';
import './register.css';
import registerUser from "../../services/UserRegisterService";
import {useHistory} from "react-router-dom";
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
        <div>
            <div>
                <div className="pageName">
                    <h1 className="registerTitle">Register</h1>
                </div>
                <div className="container registerForm">
                    <div className="container registerFormTitle">
                        <h1>REGISTER</h1>
                    </div>
                    <div className="container registerFormContent">
                        <form onSubmit={formik.handleSubmit}>

                            <div className="inputFields">
                                <div className="form-group singleInputField">
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" className="form-control loginTextInput"
                                           id="firstName" name="firstName"
                                           placeholder="Enter first name"
                                           value={formik.values.firstName}
                                           onBlur={formik.handleBlur}
                                           onChange={formik.handleChange}/>
                                    {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                                </div>
                                <div className="form-group singleInputField">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control loginTextInput"
                                           id="lastName" name="lastName"
                                           placeholder="Enter last name"
                                           value={formik.values.lastName}
                                           onBlur={formik.handleBlur}
                                           onChange={formik.handleChange}/>
                                    {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                                </div>
                                <div className="form-group singleInputField">
                                    <label htmlFor="email">Enter email</label>
                                    <input type="email" className="form-control loginTextInput"
                                           id="email" name="email"
                                           placeholder="Enter email"
                                           value={formik.values.email}
                                           onBlur={formik.handleBlur}
                                           onChange={formik.handleChange}/>
                                    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                                </div>
                                <div className="form-group singleInputField">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control loginTextInput"
                                           id="password" name="password"
                                           placeholder="Password"
                                           value={formik.values.password}
                                           onBlur={formik.handleBlur}
                                           onChange={formik.handleChange}/>
                                    {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary registerButton">REGISTER</button>
                            </div>
                        </form>
                        <div className="container loginRedirectBox">
                            <p>Already have an account?</p>
                            <a href="/login" className="loginRedirect">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Register;
