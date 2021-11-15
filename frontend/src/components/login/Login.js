import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import './login.css';


function Login() {
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light pageName">
                <div className="container">
                    <div className="row container align-items-center">
                        <div className="col container">
                            <h1 className="loginTitle">Login</h1>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="row"><br/></div>
            <div className="row">
                <div className="col"></div>
                <div className="col-5">
                    <div className="container loginForm">
                        <div className="container loginFormTitle">
                            <h1>LOGIN</h1>
                        </div>
                        <div className="container p-5">
                            <form onSubmit={formik.handleSubmit}>
                                <div className="p-3">
                                    <div className="form-group pt-2">
                                        <label htmlFor="email">Enter email</label>
                                        <input type="email" className="form-control loginTextInput"
                                               id="email" name="email"
                                               placeholder="Enter email"
                                               value={formik.values.email}
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}/>
                                        {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                                    </div>
                                    <div className="form-group singleInputField pt-2">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control loginTextInput"
                                               id="password" name="password"
                                               placeholder="Password"
                                               value={formik.values.password}
                                               onBlur={formik.handleBlur}
                                               onChange={formik.handleChange}/>
                                        {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                                    </div>
                                    {/*<div className="form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe"/>
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>*/}

                                    <div className="loginButtons">
                                        <button type="submit" className="btn btn-primary loginButton">LOGIN</button>
                                        {/*<div className="container outerLogin">
                                    <button type="button" className="btn btn-primary loginButtonFacebook">LOGIN WITH FACEBOOK</button>
                                    <button type="button" className="btn btn-primary loginButtonGmail">LOGIN WITH GMAIL</button>
                                </div>*/}
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

export default Login;
