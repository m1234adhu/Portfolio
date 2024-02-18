import React from 'react'
import './Projects.css';
import Spin from 'react-reveal/Spin';

const Projects = () => {
  return (
    <>
    <div className='container project' id='projects'>
    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Top Recent Projects</h2>
   <hr />
          <p className="pb-3 text-center">👉 My top 3 recent Projects with link and Source code</p>
          {/* card design */}
          <div className='row' id="ads">
            <Spin>
            <div className='col-md-4'>
                <div className='card-rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Full Stack</span>
                        <img src={require("./pic.jpg")} alt="profile-pic" />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>ReactJs</span>
                        <span className='card-detail-badge'>ExpressJs</span>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>MongoDB</span>
                    </div>
                    <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      ToDo Application
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href=""
                  >
                    View
                  </a>
                  </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card-rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Full Stack</span>
                        <img src={require("./pic.jpg")} alt="profile-pic" />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>ReactJs</span>
                        <span className='card-detail-badge'>ExpressJs</span>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>MongoDB</span>
                    </div>
                    <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                   Portfolio App
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href=""
                  >
                    View
                  </a>
                  </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='card-rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Full Stack</span>
                        <img src={require("./pic.jpg")} alt="profile-pic" />
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>ReactJs</span>
                        <span className='card-detail-badge'>ExpressJs</span>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>NoSQL</span>
                    </div>
                    <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Quiz App
                    </h5>
                  </div>
                  <a
                    className="ad-btn"
                    href=""
                  >
                    View
                  </a>
                  </div>
                </div>
            </div>
            </Spin>
          </div>
    </div>
    </>
  )
}

export default Projects;