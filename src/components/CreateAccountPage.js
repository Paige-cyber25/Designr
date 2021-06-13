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

  const [inputs, setInputs] = useState({
        fullName : '',
        email:'',
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
                       {inputs.fullName && inputs.email && inputs.password ? (
                           <Link to="/resourcesAfterSignIn">
                            <div className="container text-center">
                                    <button type="submit"
                                    className="create-account-button container text-center">Create an account</button>
                                    {errors.emptyField  ? <p style={{color:'red'}}>All form fields are required</p> : ''}
                            </div>
                            </Link>)
                            : 
                            <div className="container text-center">
                                    <button type="submit"
                                    className="create-account-button container text-center">Create an account</button>
                                    {errors.emptyField  ? <p style={{color:'red'}}>All form fields are required</p> : ''}
                            </div>
                       }
                       
                        
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
