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
            <div className="aboutPageCardContainer container text-center">
                <img src="/firstCard.png" alt="" />
                <img src="/secondCard.png" alt="" />
                <img src="/thirdCard.png" alt="" />
                <img src="/fourthCard.png" alt="" />
            </div>
            <div className="midAboutPageContainer">
                <div className="midAboutPagePuzzleContentContainer container text-center">
                    <div>
                        <img src="/puzzle.png" alt=""  className="puzzle" />
                    </div>
                    
                    <div className="midAboutPageContentContainer">
                        <h5 className="vision">OUR VISION</h5>
                        <h2 className="vision-content"><img src="/left-quote 1.png" alt="" />To inspire designers all around the globe and create a community where 
                            like minds can connect. <img src="/left-quote 2.png" alt="" /></h2>
                    </div>
                </div>
            </div>
            <div className="aboutPageFooterContainer container text-center">
                <div >
                    <h3 className="firstHeader container text-left">You have questions? We’ve got answers!</h3>
                    <p className="firstParagraph container text-left">We're here to help every step of the way. See some of the most frequently asked questions below, and if you still don't find what you need,<span style={{color:'#6FC7D1'}}>drop us a line.</span> </p>
                </div>
                <div >
                    <h4 className="secondHeader container text-left">Is Designr free?</h4>
                    <p className="secondParagraph container text-left">Yes! We won’t charge you a penny but you can “buy a coffee” for our contributors.</p>
                </div>
                <div>
                    <h4 className="thirdHeader container text-left">Do I need to sign up to access resources?</h4>
                    <p className="thirdParagraph container text-left">Yes. You’ll need to register for an account and sign in to access our unlimited article library and video resources. We’ve made the sign up process as easy as A-B-C.</p>
                </div>
                <div>
                    <h4 className="fourthHeader container text-left">How can I become a Designr contributor?</h4>
                    <p className="fourthParagraph container text-left">It’s very simple. Sign up for an account or if you already have one, sign in and you can upload a video via your dashboard.</p>
                </div>
                <div>
                    <h4 className="fifthHeader container text-left">Do I get paid as Designr contributor?</h4>
                    <p className="fifthParagraph container text-left">Designr is a platform where designers support each other for free. As such, you won’t be paid, but viewers have the option to “buy you coffee” if they find your video useful.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutPage;
