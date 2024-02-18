import React from 'react'
import './About.css';
import Jump from 'react-reveal/Jump';

const About = () => {
    return (
      <>
          <Jump>
          <div className="about" id="about">
            <div className="row">
              <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={require("./pic.jpg")} alt="profile-pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Thanks for your interest, here
								is a quick story of me.
                
                <br />
                I'm a developer not because I want more money.
                                I love to create new things so I'm here.

              </p>
            </div>
          </div>
        </div>
        </Jump>
    </>
  );
};

export default About;