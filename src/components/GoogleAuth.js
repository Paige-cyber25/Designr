import React from 'react'
import { useHistory } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import useStyles from './styles';
import Toast from './Toast';
import { AUTH } from '../constants/actionTypes';

export default function GoogleAuth() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const  history = useHistory()

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
    <GoogleLogin
        clientId="251088068731-s17bit1vouqtji18ddlo0mttcila7kfb.apps.googleusercontent.com"
        //render means how are we going to show what we want the client to see
        render={(renderProps) => (
            <button 
                className={classes.googleButton} 
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled} 
                style={{border:'none', background:'#ffffff'}}
                
            >
                <img src="/google.png" alt="google-signin"/>
            </button>
        )}
        onSuccess={googleSuccess }
        onFailure={googleError}
        cookiePolicy='single_host_origin'
        />
  )
}
