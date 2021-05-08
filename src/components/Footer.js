import React from 'react';
import {Container, Form, InputGroup, FormControl, Row, Col} from 'react-bootstrap';

function Footer() {
    return (
        <div className="footer-container">
            <Container>
                <h3 className="footer-header container text-center">Subscribe to our newsletter</h3>
                <p className="footer-content container text-center">Get useful design updates and job alerts straight to your inbox weekly. We promise, we won’t spam you!</p>
            </Container>
            <Form inline className="footer-form-container">
                <Form.Label htmlFor="inlineFormInputName2" srOnly>
                   First Name
                </Form.Label>
                <Form.Control
                    className="mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    placeholder="First Name"
                />
                <Form.Label htmlFor="inlineFormInputName2" srOnly>
                   Last Name
                </Form.Label>
                <Form.Control
                    className="mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    placeholder="Last Name"
                />
                <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
                    Email Address
                </Form.Label>
                <InputGroup className="mb-2 mr-sm-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text>Sign Up</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroupUsername2" placeholder="Email Address" />
                </InputGroup>

            </Form>

            <Container className="footer-subsection-container">
                <Row>
                    <Col xs={6}>
                        <img src="/designr-logo.png" alt="" className="designr-logo" />
                        <span className="footer-span">designr</span>
                        <p className="footer-form-content">To inspire designers all around the globe and create a community 
                            where like minds can connect.
                        </p>
                    </Col>
                    <Col className="footer-list-items-container">
                        <h4 className="footer-form-header">Company</h4>
                        <h5 className="footer-list-items">About</h5>
                        <h5 className="footer-list-items">Blog</h5>
                        <h5 className="footer-list-items">Contact Us</h5>
                    </Col>
                    <Col>
                        <h4 className="footer-form-header">Legal</h4>
                        <h5 className="footer-list-items">Privacy</h5>
                        <h5 className="footer-list-items">Accessibility</h5>
                        <h5 className="footer-list-items">Privacy</h5>
                    </Col>
                    <Col>
                        <h4 className="footer-form-header">Community</h4>
                        <h5 className="footer-list-items">Slack Community</h5>
                        <h5 className="footer-list-items">Become a Contributor</h5>
                    </Col>
                </Row>
            </Container>
            <div className="footer-designer-container">
                <h5 className="footer-copyright container text-center">&copy;
                <span className="footer-form-span">designr</span>
                </h5>
            </div>
        </div>
       
    )
}

export default Footer;
