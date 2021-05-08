import React from 'react';
import { Link } from 'react-router-dom';
import {Modal} from 'react-bootstrap';

function SignInModal(props) {
    return (
        <div>
           <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered contentClassName="modal-container">
            <Modal.Body>
                <h4 className="modal-header container text-center">Sign in or create an account to continue browsing our unlimted selection of videos and articles</h4>
                <Link to="/signIn">
                    <div className="modal-signIn-container container text-center">
                        <button type="button" className="modal-signIn-button container text-center">Sign in</button>
                    </div>
                </Link>
                <Link to ="/createAccount">
                    <div className="modal-createAnAccount-container container text-center">
                        <button type="button" className="modal-createAnAccount-button container text-center">Create an account</button>
                    </div>
                </Link>
                
            </Modal.Body>
         </Modal> 
        </div>
    )
}

export default SignInModal;
