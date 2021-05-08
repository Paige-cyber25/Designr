import React from 'react';
import TopNavbar from './Navbar';
import Footer from './Footer';


function ResourcesPageBeforeSignIn() {
    return (
        <>
           <TopNavbar activeC ="/resources" />
           <div className="resourcesbeforesignincontainer">
               <img src="/drastic-graphics-Jo-ypJVt8gQ-unsplash 1.png" alt="" className="resourcesbeforesigninimg" />
               <img src="/play-button.png" alt="" className="resources-play-button" />
               <div className="resourcepage-search-box">
                <input 
                    type="text"
                    placeholder="What would you like to find?"
                    className="resources-input-container"
                    />
                    <button type="button" className="resourcepage-search-button ">Search</button>
                </div>
           </div>
           <Footer />
        </>
    )
}

export default ResourcesPageBeforeSignIn;
