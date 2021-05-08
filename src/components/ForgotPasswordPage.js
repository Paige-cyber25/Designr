import React from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import TopNavbar from './Navbar';

function ForgotPasswordPage() {
    return (
        <div className="create-account-container">
            <TopNavbar activeC="/signIn"/>
            <div className="forgotAndRestPasswordContainer container text-center">
                <h3 className="forgotPasswordHeader container text-center">Forgot Password</h3>
                <p className="resetLink container text-center">Enter your email and a reset link will be sent to you</p>
                <form>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email Address"
                                />
                    <div className="container text-center">
                        <button type="button" className="create-account-button container text-center">Reset Password</button>
                    </div>

                    <Link to="signIn">
                            <div className="modal-signIn-container container text-center">
                                <button type="button" className="backToSignInButton container text-center">Back to Sign In</button>
                            </div>
                        </Link>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default ForgotPasswordPage;
