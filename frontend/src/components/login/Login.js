import React, {useState} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import './login.css';
import {useFormik} from "formik";
import * as Yup from 'yup';
import {loginUser} from "../../services/UserService";
import {useHistory} from "react-router-dom";

function Login() {

    let history = useHistory();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(8, 'Must be 8 characters or more')
                .max(15, 'Must be 15 characters or less')
                .required('Required')
        }),
        onSubmit: values => {

            const header = new Headers();

            let user = {
                email: formik.values.email,
                password: formik.values.password
            }

            loginUser(user, header).then(res => {
                let jwt = res.data.jwtoken;
                header.append('Authorization', jwt)
                localStorage.setItem('Authorization', jwt);
                history.push("/");
            }).catch((err) => {
                console.log(err);
                alert(err);
            })

        }
    })

    return(
        <div>
            <div className="row pageName align-items-center">
                <h1 className="loginTitle">Login</h1>
            </div>
            <div className="container loginForm">
                <div className="container loginFormTitle">
                    <h1>LOGIN</h1>
                </div>
                <div className="container loginFormContent">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="inputFields">
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
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe"/>
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>

                            <div className="loginButtons">
                                <button type="submit" className="btn btn-primary loginButton">LOGIN</button>
                                <div className="container outerLogin">
                                    <button type="button" className="btn btn-primary loginButtonFacebook">LOGIN WITH FACEBOOK</button>
                                    <button type="button" className="btn btn-primary loginButtonGmail">LOGIN WITH GMAIL</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="container forgotPasswordBox">
                        <a href="#" className="forgotPassword"><p>Forgot your password?</p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
