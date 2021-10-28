import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import './login.css';


function Login() {
    return(
        <div>
            <div className="pageName">
                <h1 className="loginTitle">Login</h1>
            </div>
            <div className="container loginForm">
                <div className="container loginFormTitle">
                    <h1>LOGIN</h1>
                </div>
                <div className="container loginFormContent">
                    <form>

                        <div className="inputFields">
                            <div className="form-group singleInputField">
                                <label htmlFor="exampleInputEmail1">Enter email</label>
                                <input type="email" className="form-control loginTextInput" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group singleInputField">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control loginTextInput" id="exampleInputPassword1"
                                       placeholder="Password"/>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                            </div>
                        </div>

                        <div className="loginButtons">
                            <button type="submit" className="btn btn-primary loginButton">LOGIN</button>
                            <div className="container outerLogin">
                                <button type="button" className="btn btn-primary loginButtonFacebok">LOGIN WITH FACEBOOK</button>
                                <button type="button" className="btn btn-primary loginButtonGmail">LOGIN WITH GMAIL</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
