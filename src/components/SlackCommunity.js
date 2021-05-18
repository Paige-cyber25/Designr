import React from 'react';
import TopNavbar from './Navbar';
import Footer from './Footer';
import {Container, Row, Col} from 'react-bootstrap';

function SlackCommunity() {
    return (
        <div>
            <TopNavbar activeC="/slackCommunity"/> 
            <div className="topSlackCommunityContainer">
                <div className="topSlackCommunityContentContainer container text-center">
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
                    <img src="/creativecomIcon.jpeg" alt="" className="fourthSectionIcons" />
                    <h4 className="fourth-subsection-header container text-center">A Creative Community</h4>
                    <p className="fourth-subsection-content container text-center">Link up with other creatives on our community to get support, advice and peer-feedback on your projects.</p>
                    <button type="button" className="fourth-subsection-button container text-center">Join our slack community</button>
                    </Col>
                    <Col sm>
                    <img src="/unlimitedArtIcon.jpeg" alt="" className="fourthSectionIcons" />
                    <h4 className="fourth-subsection-header container text-center">Unlimited Article Library</h4>
                    <p className="fourth-subsection-content container text-center">Our article library features 9,000+ articles curated from around the web. Bookmark, read and share.</p>
                    <button type="button" className="fourth-subsection-button container text-center">Get started for free</button>
                </Col>
                <Col sm>
                    <img src="/tutorialsIcon.jpeg" alt="" className="fourthSectionIcons" />
                    <h4 className="fourth-subsection-header container text-center">Tutorials by Designers</h4>
                    <p className="fourth-subsection-content container text-center">Get expert  knowledge through videos contibuted  by creatives like you. All in one place.</p>
                    <button type="button" className="fourth-subsection-button container text-center">Explore our resources</button>
                </Col>
            </Row>
            <Row>
                    <Col sm>
                    <img src="/creativecomIcon.jpeg" alt="" className="fourthSectionIcons" />
                    <h4 className="fourth-subsection-header container text-center">A Creative Community</h4>
                    <p className="fourth-subsection-content container text-center">Link up with other creatives on our community to get support, advice and peer-feedback on your projects.</p>
                    <button type="button" className="fourth-subsection-button container text-center">Join our slack community</button>
                    </Col>
                    <Col sm>
                    <img src="/unlimitedArtIcon.jpeg" alt="" className="fourthSectionIcons" />
                    <h4 className="fourth-subsection-header container text-center">Unlimited Article Library</h4>
                    <p className="fourth-subsection-content container text-center">Our article library features 9,000+ articles curated from around the web. Bookmark, read and share.</p>
                    <button type="button" className="fourth-subsection-button container text-center">Get started for free</button>
                </Col>
                <Col sm>
                    <img src="/tutorialsIcon.jpeg" alt="" className="fourthSectionIcons" />
                    <h4 className="fourth-subsection-header container text-center">Tutorials by Designers</h4>
                    <p className="fourth-subsection-content container text-center">Get expert  knowledge through videos contibuted  by creatives like you. All in one place.</p>
                    <button type="button" className="fourth-subsection-button container text-center">Explore our resources</button>
                </Col>
            </Row>
        </Container>
            </div>
            <Footer />
        </div>
    );
}

export default SlackCommunity;