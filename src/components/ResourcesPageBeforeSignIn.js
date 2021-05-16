import React from 'react';
import TopNavbar from './Navbar';
import Footer from './Footer';
import Avatar from '@material-ui/core/Avatar';
import CarouselContainer from './Carousel';


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
                <div className="resourcesbeforesigninallcatogeriescontainer">
                    <label htmlFor="category" className="pr-4 ">CATEGORY:</label>
                    <select className="resourcesbeforesigninselectcontainer">
                        <option value="allCategories">All CATEGORIES</option>
                        <option value="animation">ANIMATION</option>
                        <option value="illustration">ILLUSTRATION</option>
                        <option value="motionGraphics">MOTION GRAPHICS</option>
                        <option value="ui/ux">UI/UX</option>
                        <option value="graphicsDesign">GRAPHICS DESIGN</option>
                    </select>
                </div>
                <div className="resourcesbeforesigninvideoscontainer">
                    <label htmlFor="videos" className="pr-5">VIDEOS</label>
                    <select className="resourcesbeforesigninvideoselectcontainer">
                        <option value="video"></option>
                    </select>
                </div>
                <div className="resourcesbeforesigninfootercontainer">
                    <div className="resourcesbeforesigninfootersubcontainer">
                        <Avatar alt="Remy Sharp" src="/bolaji.jpg" />
                        <p className="resourcesbeforesigninfooterheader">10 keys to a successful mural design</p>
                        <p className="resourcesbeforesigninfootertitle">Kelvin Boyle</p>
                     
                    </div>
                     <div  className="vectorIconAndTextContainer">
                        <img src="/vector.png" alt="" className="vectorIcon"/>
                        <p className="vectorText">Play</p>
                     </div>

                     <div className="iconsContainer">
                         <img src="bookmark.png" alt="" />
                         <img src="thumbdown.png" alt="" />
                         <img src="thumbup.png" alt="" />
                     </div>
                     
                </div>
           </div>
           <div className="resourcesbeforesignincarouselcontainer">
               <div>
                    <h3>Popular on Designr</h3>
                    <CarouselContainer />
               </div>
               <div>
                    <h3>New Releases</h3>
                    <CarouselContainer />
               </div>
               <div>
                    <h3>Trending on  Designr</h3>
                    <CarouselContainer />
               </div>
               

           </div>
           <Footer />
        </>
    )
}

export default ResourcesPageBeforeSignIn;
