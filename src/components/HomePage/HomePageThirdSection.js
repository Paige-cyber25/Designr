import React from 'react';

function HomePageThirdSection() {
    return (
        <div className="third-section-container">
            <img src="/wireframe-img.png" alt="" className="wireframe-img" />
            <div className="sub-wireframe-container container">
                <h5 className="wireframe-first-header">UI/UX</h5>
                <h3 className="wireframe-second-header">Wireframing in Product Design</h3>
                <p className="wireframe-paragraph">A beginner’s guide to user interface design</p>
                <button type="button" className="text-center wireframe-button">Explore our article library</button>
            </div>
        </div>
    )
}

export default HomePageThirdSection;
