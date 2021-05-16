import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import TopNavbar from './Navbar';
import {Validation} from './Validation';

function CreateAccountPage() {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [errors, setErrors] = useState({
      emptyField:false,
      inValidEmail:false,
      passwordLength:false,
  });
  
  const isEmpty = ()=> {
    if(!inputs.fullName.trim() || !inputs.email.trim() || !inputs.password.trim()) {
        return true;
    } else {
        return false;
    }
  }
  const [password, setPassword] = useState(false);

  const [inputs, setInputs] = useState({
        fullName : '',
        email:'',
        password: '',
    })

    function handleOnAbort() {
        return inputs.password.length < 7
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
    function handleSubmit (e) {
        e.preventDefault();
        if(isEmpty()) {
            return setErrors({...errors, emptyField:true})
        }
        setErrors(false)
        setPassword(false)
        const validate = new Validation(inputs);
        if(validate.emptyFields) {
            console.log('object')
           return setErrors(true)
        } 
         if(validate.validatePwd) {
            console.log('password');
           setErrors(false);
          return setPassword(true);
        } 
    }

    return (
        <div className="create-account-container">
            <TopNavbar activeC="/signIn"/>
            <div className="split-screen-container">
                <div class="split left">
                <div class="centered">
                   <h3 className="split-left-header container text-center">Create Account</h3>
                   <form onSubmit={handleSubmit}>
                       <div>
                           <input 
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={inputs.fullName}
                                onChange={handleChange}
                            />
                       </div>
                       <div>
                           <input 
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={inputs.email}
                                onChange={handleChange}
                            />
                       </div>
                       <div className="password-container">
                           <input 
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={inputs.password}
                                onChange={handleChange}
                            />
                            {passwordShown ? <i className="far fa-eye"
                            onClick={togglePasswordVisiblity}>
                            </i> : <i className="far fa-eye-slash" 
                            onClick={togglePasswordVisiblity}>
                            </i>}
                           {password && <p style={{color:'red'}}>Password is required</p>}  
                       </div>
                            <div className="container text-center">
                                    <button type="submit"
                                    className="create-account-button container text-center">Create an account</button>
                                    {errors.emptyField  ? <p style={{color:'red'}}>All form fields are required</p> : ''}
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
