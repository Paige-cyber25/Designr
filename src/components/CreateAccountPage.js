import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import TopNavbar from './Navbar';

function CreateAccountPage() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
    return (
        <div className="create-account-container">
            <TopNavbar activeC="/signIn"/>
            <div className="split-screen-container">
                <div class="split left">
                <div class="centered">
                   <h3 className="split-left-header container text-center">Create Account</h3>
                   <form>
                       <div>
                           <input 
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                            />
                       </div>
                       <div>
                           <input 
                                type="email"
                                name="email"
                                placeholder="Email Address"
                            />
                       </div>
                       <div className="password-container">
                           <input 
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                            />
                            {passwordShown ? <i className="far fa-eye"
                            onClick={togglePasswordVisiblity}>
                            </i> : <i className="far fa-eye-slash" 
                            onClick={togglePasswordVisiblity}>
                            </i>}
                            
                       </div>
                            <div className="container text-center">
                                    <button type="button" className="create-account-button container text-center">Create an account</button>
                            </div>
                        
                        <p className="create-account-content">By clicking the “Create Account” button, 
                            you agree to Designr’s terms of acceptable use.
                        </p>
                        <p className="create-account-content">or</p>
                       <div className="createAccount-icons">
                           <img src="/google.png" alt="" />
                           <img src="/facebook.png" alt="" />
                           <img src="linkedln.png" alt="" />
                       </div>
                   </form>
                   
                </div>
            </div>
            <div class="split right">
                <div class="centered">
                    <h3 className="split-right-header container text-center">Welcome Back!</h3>
                    <p className="split-right-content container text-center">To keep connected with us please login with your personal information</p>
                    <Link to="signIn">
                        <div className="modal-signIn-container container text-center">
                            <button type="button" className="split-right-button container text-center">Sign in</button>
                        </div>
                    </Link>       
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default CreateAccountPage;
