import React from 'react';
import TopNavbar from './Navbar';
import Footer from './Footer';
import {Container, Row, Col} from 'react-bootstrap';

function SlackCommunity() {
    return (
        <div>
            <TopNavbar activeC="/slackCommunity"/> 
            <div className="topSlackCommunityContainer">
                 <img src="/slackCommunityBackgroundImage.png" alt="" className="slackCommunityBackgroundImage"/>
                <div className="topSlackCommunityContentContainer">
                    <h3>Join our Slack Community</h3>
                    <p className="container text-center">Utilizing our global network of 600+ inspirational creatives, we want to bring people together, 
                        tell stories and create a safe space where designers can grow together.</p>
                        <div className="container text-center">
                            <button type="button" >Request an Invite </button>
                        </div> 
                </div>
            </div>
            <div className="midSlackCommunityContainer">
                <h3 className="container text-center">What you stand to benefit</h3>
                <p className=" container text-center">Navigating your career and building a network can be difficult-but it doesn't need to be.</p>
            <Container className="fourth-subsection-container container text-center">
                <Row>
                    <Col sm>
                    <img src="/mentorship.png" alt="" className="fourthSectionIcons" />
                    <h4 className="fourth-subsection-header container text-center">Mentorship</h4>
                    <p className="fourth-subsection-content container text-center">Find a mentor or become a mentor and help fellow designers.</p>
                    
                    </Col>
                    <Col sm>
                    <img src="/realTimeChat.png" alt="" className="fourthSectionIcons" />
                    <h4 className="fourth-subsection-header container text-center">Real-Time Chat</h4>
                    <p className="fourth-subsection-content container text-center">Get answers to your burning questions in real-time. Over 40,000 messages sent.</p>
                    
                </Col>
                <Col sm>
                    <img src="/jobBoard.png" alt="" className="fourthSectionIcons" />
                    <h4 className="fourth-subsection-header container text-center">Job Boards</h4>
                    <p className="fourth-subsection-content container text-center">Up-to-date job listings and application walk-through process for newbies.</p>
                    
                </Col>
            </Row>
            <Row>
                    <Col sm>
                    <img src="/lastingConnections.png" alt="" className="fourthSectionIcons" />
                    <h4 className="fourth-subsection-header container text-center">Lasting Connections</h4>
                    <p className="fourth-subsection-content container text-center"> Become part of a diverse community of designers from across the globe.</p>
                    
                    </Col>
                    <Col sm>
                    <img src="/portfolioReview.png" alt="" className="fourthSectionIcons" />
                    <h4 className="fourth-subsection-header container text-center">Portfolio Review</h4>
                    <p className="fourth-subsection-content container text-center">We share inspirational portfolios you’ll love! We’ll also review your portfolio. </p>
                    
                </Col>
                <Col sm>
                    <img src="/localEvents.png" alt="" className="fourthSectionIcons" />
                    <h4 className="fourth-subsection-header container text-center">Local Events</h4>
                    <p className="fourth-subsection-content container text-center">Participate in local events and meet fellow designers in your city.</p>
                    
                </Col>
            </Row>
        </Container>
            </div>
            <div className="footerSlackCommunityContainer">
                <div className="footerSlackCommunityContentContainer">
                    <h2>Ready to join our Community?</h2>
                    <h4>We can’t wait to have you aboard</h4>
                </div>
                <div className="footerSlackCommunityButtonContainer">
                    <button type="button" className="container text-center">Join our Slack Community here</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SlackCommunity;