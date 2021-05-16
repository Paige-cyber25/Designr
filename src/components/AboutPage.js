import React from 'react';
import TopNavbar from './Navbar';
import Footer from './Footer';

function AboutPage() {
    return (
        <div>
            <TopNavbar activeC="/about"/> 
            <div className="topAboutPageContainer">
                <div className="topAboutPageContentAndImagesContainer container text-center">
                    <div className="topAboutPageContent">
                        <h3>About Us</h3>
                        <div></div>
                        <p>Designr began as a  project by the tech quartet Grace, 
                            Jide, Patience and Toyin.  As Newbie designers at the time, 
                            they sort to improve their design skills. They soon realized that the 
                            wealth of information online could be overwhelming. It was at this time the 
                            seed which have bloomed into Designr was planted. 
                            <br /><br />
                            They later found out that 
                            this was a “common” challenge faced by other designer, who were 
                            dissatisfied by the long hours spent sifting through the pile of 
                            resources available on the internet in order  to find the information they 
                            needed. 
                        </p>
                    </div>
                    <div className="topAboutPageImages">
                        <div className="topAboutPageToyinAndGraceContainer">
                            <div>
                                <img src="/Toyin.png" alt=""style={{marginTop:'50px'}} />
                                <h4 className="toyin" >Toyin</h4>
                            </div>
                        <div>
                            <img src="/Grace-Mary.png" alt="" className=""/>
                            <h4 className="graceMary">Grace-Mary</h4>
                        </div>
                        </div>
                        <div className="topAboutPageJideAndPatContainer">
                            <div>
                                <img src="/Babajide.png" alt=""  className=""/>
                                <h4 className="babaJide">Babajide</h4>
                        </div>
                        
                        <div>
                            <img src="/Patience.png" alt="" className=""/>
                            <h4 className="patience">Patience</h4>
                        </div>
                        </div>
                        

                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default AboutPage;
