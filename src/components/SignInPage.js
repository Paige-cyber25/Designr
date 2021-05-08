import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import TopNavbar from './Navbar';

function SignInPage() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);

  };
    return (
        <div className="create-account-container">
            <TopNavbar activeC="/signIn"/>
            <div className="split-screen-container">
                <div class="split left">
                <div class="container text-center">
                   <h3 className="split-left-header container text-center">Sign In</h3>
                   <form>
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
                       <div className="checkbox-container container text-left">
                           <input 
                                type="checkbox"
                                name="forgotPassword"
                            />
                            <label htmlFor="forgotPassword"><span className="rememberMe-span">Remember me</span>
                                <Link to="/forgotPassword">
                                <span className="forgotPassword-span">Forgot password?</span>
                                </Link>
                                
                            </label>
                       </div>
                        <div className="container text-center">
                            <button type="button" className="create-account-button container text-center">Sign In</button>
                        </div>
                        <p className="create-account-content container text-center">or</p>
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
                    <h3 className="split-right-header container text-center">Hello Friend!</h3>
                    <p className="split-right-content container text-center">Fill up your personal information and start a journey with us</p>
                    <Link to="/createAccount" >
                        <div className="modal-signIn-container container text-center">
                        <button type="button" className="split-right-button container text-center">Create Account</button>
                    </div>
                    </Link>
                    
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignInPage;
