import React, {useState} from 'react';
import './register.css';

function Register() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        let user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }

        console.log('user -> ' + JSON.stringify(user));
    }

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
                        <form onSubmit={handleSubmit}>

                            <div className="inputFields">
                                <div className="form-group singleInputField">
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" className="form-control loginTextInput" id="firstName" placeholder="Enter first name"
                                           onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                                <div className="form-group singleInputField">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text" className="form-control loginTextInput" id="lastName" placeholder="Enter last name"
                                           onChange={(e) => setLastName(e.target.value)}/>
                                </div>
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
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary registerButton" onClick={handleSubmit}>REGISTER</button>
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
