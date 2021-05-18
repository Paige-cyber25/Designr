import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function HomePageFourthSection() {
    return (
        <div className="fourth-section-container">
            <h3 className="fourth-section-header container text-center">Spark your creative genius</h3>
            <p className="fourth-section-paragraph container text-center">Whether you’re just getting started, have a few years under your belt, or run your own design practice, you’ll learn something new. We guarantee it.</p>
        
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
        </Container>
        </div>
    )
}

export default HomePageFourthSection;
