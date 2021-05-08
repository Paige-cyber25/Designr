import React from 'react';

function HomePageFifthSection() {
    return (
        <div className="fifth-section-container">
            <h3 className="fifth-section-header container text-center">Ready to start your journey?</h3>
            <p className="fifth-section-content container text-center">Don’t just take our word for it. Hear what others have said</p>
            <div className="fifth-subsection-container container">
                <div className="fifth-subsection-card-container">
                    <h1 className="fifth-subsection-card-quote">&ldquo;</h1>
                    <h5 className="fifth-subsection-card-header">Would Definitely Recommend</h5>
                    <p className="fifth-subsection-card-content">I discovered Designr when I started out my UI/UX design journey. I am self-taught and I can say that this platform contributed to my career growth. I now recommend Designr to my mentees.</p>
                    <div className="imageTitleContainer">
                        <img src="/bolaji.jpg" alt="" style={{width:'30px', borderRadius:'50%', marginLeft:'25px'}} />
                        <h5 className="fifth-subsection-card-title">Bolaji Arthur</h5>
                    </div>
                    <h6 className="fifth-subsection-card-secondTitle">Product Designer</h6>
                </div>
               
            </div>
                <div className="fifth-subsection-card-secondContainer">
                    <h1 className="fifth-subsection-card-quote">&ldquo;</h1>
                    <h5 className="fifth-subsection-card-header">Amazing Platform</h5>
                    <p className="fifth-subsection-card-content">I’ve become a Designr ambassador ever since it was recommended to me by a collegue. What I love about the platform is that it curates both video and written resources organized with clarity.</p>
                    <div className="imageTitleContainer2">
                        <img src="/Dawn_Dike.jpg" alt="" style={{width:'30px', borderRadius:'50%', marginLeft:'25px'}} />
                        <h5 className="fifth-subsection-card-title">Dawn Dike</h5>
                    </div>
                    <h6 className="fifth-subsection-card-secondTitle">Illustrator</h6>
                </div>

            <div>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default HomePageFifthSection;
