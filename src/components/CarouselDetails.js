import React from 'react';
import {Carousel} from 'react-bootstrap';

function CarouselDetails(props) {
    return (
        <div className={props.containerCls}>
            <Carousel className={props.containerCls} >
                <Carousel.Item>
                        <img
                        className={props.imgCls}
                        src={props.imgUrl}
                        alt={props.imgTitle}
                        />
                        <img src={props.ImgPlayButtonUrl} alt={props.imgPlayButtonTitle} className={props.imgPlayButton1} />
                    <Carousel.Caption>
                        <h3>{props.carouselCaptionHeader}</h3>
                        <p>{props.carouselCaptionTitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default CarouselDetails;
