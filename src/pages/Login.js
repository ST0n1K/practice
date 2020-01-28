import React from 'react';
import {Link} from 'react-router-dom';

export default function Login() {
    return (
        <div className="logo-wrapper">
        <div className="container-logo">
            <div className="logo">Sign In</div>
                <div className="login-item">
                    <form action="" className="form form-login">
                        <div className="form-field">
                            <label className="user" htmlFor="login-username"><span className="hidden">Username</span></label>
                            <input id="login-username" type="text" className="form-input" placeholder="Username" required />
                        </div>

                        <div className="form-field">
                            <label className="lock" htmlFor="login-password"><span className="hidden">Password</span></label>
                            <input id="login-password" type="password" className="form-input" placeholder="Password" required />
                        </div>

                        <div className="form-field">
                            <input type="submit" value="Log in" />
                        </div>
                        <div className="logo-register">
                            <Link to="/sign-up">Register now</Link>
                        </div>
                     </form>
                 </div>
            </div>
        </div>
    )
}
