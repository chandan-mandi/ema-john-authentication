import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'
    console.log('came from',location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri)
            // console.log(result.user);
        })
    }
    return (
        <div className="login-form">
            <div >
                <h2>Login</h2>
                <form >
                    <input type="email" name="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-John <Link to="/register">Create Account</Link></p>
                <div>-----------or---------</div>
                <button 
                className="btn-regular" 
                onClick={handleGoogleLogin}>Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;