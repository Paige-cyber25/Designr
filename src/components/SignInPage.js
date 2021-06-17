import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import Footer from './Footer';
import TopNavbar from './Navbar';
import {Validation} from './Validation';
import { signin} from '../redux/user/account';
import { useDispatch } from 'react-redux';


function SignInPage() {
     
     const dispatch = useDispatch();
    const history = useHistory();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  }
  const [errors, setErrors] = useState({
      emptyField:false,
      inValidEmail:false,
      passwordLength:false,
  });

  const isEmpty = ()=> {
    if(!inputs.email.trim() || !inputs.password.trim()) {
        return true;
    } else {
        return false;
    }
  }
  const [inputs, setInputs] = useState({
        email : '',
        password: '',
    })

    function handleOnBlur(field) {
        switch (field) {
            case 'passwordLength':
                return inputs.password.length < 7
                
            case 'validateEmail':
                return !validate.isValidMail()
            default:
                break;
        }
        
    }

    function handleChange(e) {
        setErrors({emptyField:false,
      inValidEmail:false,
      passwordLength:false})
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    const validate = new Validation(inputs);
    function handleSubmit (e) {
        e.preventDefault();
        // if(isEmpty()) return setErrors({...errors, emptyField:true})
        // if(!validate.isValidMail()) return setErrors({...errors, inValidEmail:true})
        // if(inputs.password.length < 7) return setErrors({...errors, passwordLength:true})
        // console.log('Validation passed!!');
        dispatch(signin(inputs, history))
    }


 
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
                                value={inputs.email}
                                onChange={handleChange}
                                onBlur={()=>setErrors({...errors, inValidEmail:handleOnBlur('validateEmail')})}    
                            />
                            {errors.inValidEmail ? <p style={{color:'red'}}>Invalid email format</p>:''}
                       </div>
                       <div className="password-container">
                           <input 
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={inputs.password}
                               onChange={handleChange}
                               onBlur={()=>
                                    setErrors({...errors, passwordLength:handleOnBlur("passwordLength")})
                                }
                            />
                            {passwordShown ? <i className="far fa-eye"
                            onClick={togglePasswordVisiblity}>
                            </i> : <i className="far fa-eye-slash" 
                            onClick={togglePasswordVisiblity}>
                            </i>}
                            {errors.passwordLength ? <p style={{color:'red'}}>Password length must be greater than 7 characters</p> : ''}
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
                       {inputs.password  && inputs.email ? 
                       
                        <div className="container text-center">
                            <button type="button" 
                            className="create-account-button container text-center"
                            onClick={handleSubmit}>Sign In</button>
                        </div>
                        : 
                       <div className="container text-center">
                            <button type="button" className="create-account-button container text-center">Sign In</button>
                        </div>
                        }
                       
                       
                        <p className="create-account-content container text-center">or</p>
                       <div className="createAccount-icons">
                           {/* <img src="/google.png" alt="" /> */}
                           <GoogleAuth />
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
