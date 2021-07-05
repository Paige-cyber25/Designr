import React, {useState, useEffect} from 'react';
import {Carousel} from 'react-bootstrap';
import {instance} from '../redux/api/config';
import YouTubePlayer from 'react-player/lib/players/YouTube';

function CarouselContainer() {
    const [courses, setCourses] = useState([]);
    const [play, setPlay] = useState(false);
    useEffect(()=> {
      async function getCourses() {
        try {
          const result = await instance.get('/courses', {
            headers: {
              'x-access-token': JSON.parse(localStorage.getItem('profile')).token,
            }
          })

          setCourses(result.data.courses);
        } catch (error) {
          console.log(error);
        }
      }
        getCourses();
    },[])

    return (
        <div className="carousel">
                <Carousel  className="carousel-container container text-center carousel-dark" >
                
                {courses.map((course,index) => {
                  return (
                    <Carousel.Item className="" key={index} >
                      {/* <YouTubePlayer
                      width="364"
                      height="284" 
                      url={course.Link} 
                      
                      
                      /> */}
                      {/* <iframe src={course.Link}
                      frameBorder='0'
                      allow='autoplay; encrypted-media'
                      allowFullScreen
                      title='video'
/> */}                
                    <iframe width="420" height="345" src={course.Link} title={course.Resource_Type}>
</iframe>
                    
                      <button onClick={() => setPlay(true)} >
                        <img 
                        src="/play-button.png" 
                        alt="play button" 
                        className="play-button1"
                        onClick={() => setPlay(true)}
                        style={{cursor:'pointer'}}/>
                      </button>
                      <Carousel.Caption className="">
                      <h3 className="carousel-caption-title" style={{fontSize:'16px'}}>{course.Title}</h3>
                      <p className="carousel-caption-name" style={{fontSize:'12px'}}>{course.Keyword}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                  
                })}
                
                {/* <img
                    className="img2"
                    src="/carousel-img2.png"
                    alt="Second slide"
                    />
                <img src="/play-button.png" alt="play button" className="play-button2" />
                 <Carousel.Caption className="caption-container">
                <h3 className="carousel-caption-title2">15 Procreate app tips for budding iPad artists</h3>
                <p>Osanyo Agelas</p>
                </Carousel.Caption>
                <img
                    className="img3"
                    src="/carousel-img3.png"
                    alt="Third slide"
                    />
                <img src="/play-button.png" alt="play button" className="play-button3" />    
                 <Carousel.Caption className="caption-container">
                <h3 className="carousel-caption-title3">Mobile app UI design: How to do It like a pro</h3>
                <p>Faith Aliu</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="img1"
                src="/carousel-img1.png"
                alt="First slide"
                />
                <img src="/play-button.png" alt="play button" className="play-button1" />
                 <Carousel.Caption className="caption-container">
                <h3 className="carousel-caption-title">Typography design 101:  A guide to rules and terms</h3>
                <p>Zane Malik</p>
                </Carousel.Caption>
                    <img
                    className="img2"
                    src="/carousel-img2.png"
                    alt="Second slide"
                    />
                    <img src="/play-button.png" alt="play button" className="play-button2" />
                     <Carousel.Caption className="caption-container">
                    <h3 className="carousel-caption-title">15 Procreate app tips for budding iPad artists</h3>
                    <p>Osanyo Agelas</p>
                </Carousel.Caption>
                    <img
                    className="img3"
                    src="/carousel-img3.png"
                    alt="Third slide"
                    />
                <img src="/play-button.png" alt="play button" className="play-button3" />
                 <Carousel.Caption className="caption-container">
                 <h3 className="carousel-caption-title">Mobile app UI design: How to do It like a pro</h3>
                <p>Faith Aliu</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                className="img1"
                src="/carousel-img1.png"
                alt="First slide"
                />
                <img src="/play-button.png" alt="play button" className="play-button1" />
                 <Carousel.Caption className="caption-container">
                <h3 className="carousel-caption-title">Typography design 101:  A guide to rules and terms</h3>
                <p>Zane Malik</p>
                </Carousel.Caption>
                <img
                    className="img2"
                    src="/carousel-img2.png"
                    alt="Second slide"
                    />
                <img src="/play-button.png" alt="play button" className="play-button2" />
                 <Carousel.Caption className="caption-container">
                <h3 className="carousel-caption-title">15 Procreate app tips for budding iPad artists</h3>
                <p>Osanyo Agelas</p>
                </Carousel.Caption>
                <img
                    className="img3"
                    src="/carousel-img3.png"
                    alt="Third slide"
                    />
                <img src="/play-button.png" alt="play button" className="play-button3" />
                 <Carousel.Caption className="caption-container">
                <h3 className="carousel-caption-title">Mobile app UI design: How to do It like a pro</h3>
                <p>Faith Aliu</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="">
                <img
                className="img1"
                src="/carousel-img1.png"
                alt="First slide"
                />
                <img src="/play-button.png" alt="play button" className="play-button1" />
                <Carousel.Caption className="caption-container">
                <h3 className="carousel-caption-title">Typography design 101:  A guide to rules and terms</h3>
                <p>Zane Malik</p>
                </Carousel.Caption>
                <img
                    className="img2"
                    src="/carousel-img2.png"
                    alt="Second slide"
                    />
                <img src="/play-button.png" alt="play button" className="play-button2" />
                 <Carousel.Caption className="caption-container">
                <h3 className="carousel-caption-title">15 Procreate app tips for budding iPad artists</h3>
                <p>Osanyo Agelas</p>
                </Carousel.Caption>
                <img
                    className="img3"
                    src="/carousel-img3.png"
                    alt="Third slide"
                    />
                <img src="/play-button.png" alt="play button" className="play-button3" />    
                 <Carousel.Caption className="caption-container">
                <h3 className="carousel-caption-title">Mobile app UI design: How to do It like a pro</h3>
                <p>Faith Aliu</p>
                </Carousel.Caption> */}
                
        </Carousel>

            </div>
    );
}

export default CarouselContainer;
