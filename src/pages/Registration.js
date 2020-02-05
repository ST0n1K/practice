import React from 'react';

export default function Registration() {
    return (
        <div className="logo-wrapper">
        <div className="container-logo">
            <div className="logo">Registration</div>
                <div className="login-item">
                    <form action="" className="form form-login">
                        <div className="form-field">
                            <label className="user" htmlFor="login-firstname"><span className="hidden">First name</span></label>
                            <input id="login-firstname" type="text" className="form-input" placeholder="First name" required />
                        </div>

                        <div className="form-field">
                            <label className="user" htmlFor="login-lastname"><span className="hidden">:Last name</span></label>
                            <input id="login-lastname" type="text" className="form-input" placeholder="Last name" required />
                        </div>

                        <div className="form-field">
                            <label className="user-tag" htmlFor="login-username"><span className="hidden">Username</span></label>
                            <input id="login-username" type="text" className="form-input" placeholder="Username" required />
                        </div>

                        <div className="form-field">
                            <label className="user-email" htmlFor="login-email"><span className="hidden">Email</span></label>
                            <input id="login-email" type="email" className="form-input" placeholder="Email" required />
                        </div>

                        <div className="form-field">
                            <label className="lock" htmlFor="login-password"><span className="hidden">Password</span></label>
                            <input id="login-password" type="password" className="form-input" placeholder="Password" required />
                        </div>

                        <div className="form-field">
                            <input type="submit" value="Sign Up" />
                        </div>
                     </form>
                 </div>
            </div>
        </div>
    )
}
