import React from 'react';
import {Link} from 'react-router-dom';


function HomePageSection() {
    return (
        <div className="top-main-section-container">
            <div className=" first-section-container container text-center">
                <p className="main-paragraph text-center">Explore unlimited <span className="designr">designr</span>esources </p>
                <p className="second-paragraph text-center">Your journey to better begins here</p>
            <Link to="/createAccount">
            <div>
             <button type="button" className="top-section-button text-center">Get started for free</button>  
            </div> 
            </Link>
            </div>
           
        </div>
    )
}

export default HomePageSection;
