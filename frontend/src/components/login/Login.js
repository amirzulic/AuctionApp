import React, {useState} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import './login.css';


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        let user = {
            email: email,
            password: password
        }

        console.log('user -> ' + JSON.stringify(user));
    }

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
                                <label htmlFor="email">Enter email</label>
                                <input type="email" className="form-control loginTextInput" id="email" placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group singleInputField">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control loginTextInput" id="password" placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe"/>
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>

                            <div className="loginButtons">
                                <button type="submit" className="btn btn-primary loginButton" onClick={handleSubmit}>LOGIN</button>
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
