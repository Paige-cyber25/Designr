import React from 'react';
import CarouselContainer from '../Carousel';
import FilterBar from '../FilterBar';

function HomePageSecondSection() {
    return (
        <div className="second-section-container">
            <div className="second-container container text-center">
                <h2 className="text-center second-container-header bold">There’s something for everyone, no matter your design interest</h2>
            </div>
            
            <FilterBar />
            <CarouselContainer />
        </div>
    )
}

export default HomePageSecondSection;
