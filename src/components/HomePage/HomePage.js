import React from 'react';
import HomePageSection from './HomePageSection';
import TopNavbar from '../Navbar';
import HomePageSecondSection from './HomePageSecondSection';
import HomePageThirdSection from './HomePageThirdSection';
import HomePageFourthSection from './HomePageFourthSection';
import HomePageFifthSection from './HomePageFifthSection';
import Footer from '../Footer';

function HomePage() {
    return (
        <div className="homePage-container">
         
          <TopNavbar />
          <HomePageSection />
          <HomePageSecondSection />
          <HomePageThirdSection />
          <HomePageFourthSection />
          <HomePageFifthSection />
          <Footer />
         
        </div>
    )
}

export default HomePage;
