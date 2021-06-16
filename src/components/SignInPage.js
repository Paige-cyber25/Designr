import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {Button} from '@material-ui/core';
import Footer from './Footer';
import TopNavbar from './Navbar';
import {Validation} from './Validation';
import {GoogleLogin} from 'react-google-login';
import useStyles from './styles';
import Toast from './Toast';
import { useDispatch } from 'react-redux';
import { AUTH } from '../constants/actionTypes';

function SignInPage() {
     const classes = useStyles();
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
        if(isEmpty()) return setErrors({...errors, emptyField:true})
        if(!validate.isValidMail()) return setErrors({...errors, inValidEmail:true})
        if(inputs.password.length < 7) return setErrors({...errors, passwordLength:true})
        console.log('Validation passed!!');
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
        dispatch({ type: AUTH, data: { result, token } });

      history.push('/resourcesAfterSignIn');
        } catch (error) {
            console.log(error);
        }
    }
    const googleError = ()=> {
        <Toast />
    }
 
    return (
        <div className="create-account-container">
            <TopNavbar activeC="/signIn"/>
            <div className="split-screen-container">
                <div class="split left">
                <div class="container text-center">
                   <h3 className="split-left-header container text-center">Sign In</h3>
                   <form onSubmit={{handleSubmit}}> 
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
                       <Link to="/resourcesAfterSignIn">
                        <div className="container text-center">
                            <button type="button" className="create-account-button container text-center">Sign In</button>
                        </div>
                       </Link> : 
                       <div className="container text-center">
                            <button type="button" className="create-account-button container text-center">Sign In</button>
                        </div>
                        }
                       
                       
                        <p className="create-account-content container text-center">or</p>
                       <div className="createAccount-icons">
                           {/* <img src="/google.png" alt="" /> */}
                           <GoogleLogin
                            clientId="251088068731-s17bit1vouqtji18ddlo0mttcila7kfb.apps.googleusercontent.com"
                            //render means how are we going to show what we want the client to see
                            render={(renderProps) => (
                                <Button 
                                    className={classes.googleButton} 
                                    onClick={renderProps.onClick} 
                                    disabled={renderProps.disabled} 
                                    
                                    
                                >
                                    <img src="/google.png" alt="google-signin"/>
                                </Button>
                            )}
                            onSuccess={googleSuccess }
                            onFailure={googleError}
                            cookiePolicy='single_host_origin'
                            />
                          
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
