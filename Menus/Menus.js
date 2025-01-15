// import React from 'react'
// import "./Menus.css";
// import Zoom from 'react-reveal/Zoom'
// import Fade from 'react-reveal/Fade'
// import { Link } from 'react-scroll';
// import { FcHome, FcAbout, FcBiotech, FcReadingEbook, FcVideoProjector, FcBusinessContact } from "react-icons/fc";
// // first 
// //import image1 from "./pic.jpg"

// // understand if multiple the
// // anything else ok done ya what about multiple
// // you have my github id you can chheck there no i have' assets folder m 
// // https://github.com/Ankush8950 
// // this is  my github account ok 
// // pehle video acche se dekho nahi dekhte ho me kitene time bola hai 
// // ye v code shahi nahi hai 
// // first ye kro ke jitna code lik rahe ho utna he folder and file create kro ok yes y video maine dusre time dekha  folder 1st time bana liye the abhi 2nd 
// // p code kr rhi
// // dekho pehle video ye dekho ke kon se package install kr raha hai that is most important things ok chalo mujhe kuch kam krna hai ok thanx by

// const Menus = ({ toggle }) => {

//   return (
//     <>
//       {toggle ? (
//         <>
//         <Zoom>
//           <div className='navbar-profile-pic'>
//             <img src={require("./pic.jpg")} alt="profile-pic" />
//           </div></Zoom>
//           <Fade left>
//           <div className='nav-items'>
//             <div className='nav-item'>
//               <div className='nav-link'>
//                 <Link to ="home" spy={true} smooth={true} offset={-100} duratio={100}>
//                   < FcHome />Home
//                 </Link> </div>
//               <div className='nav-link'>
//               <Link to ="about" spy={true} smooth={true} offset={-100} duratio={100}>
//                 < FcAbout />About</Link></div>
//               <div className='nav-link'>
//               <Link to ="education" spy={true} smooth={true} offset={-100} duratio={100}>
//                 < FcReadingEbook />Education</Link></div>
//               <div className='nav-link'>
//               <Link to ="techstack" spy={true} smooth={true} offset={-100} duratio={100}>
//                 < FcBiotech />Techstack</Link></div>
//               <div className='nav-link'>
//               <Link to ="projects" spy={true} smooth={true} offset={-100} duratio={100}>
//                 < FcVideoProjector />Projects</Link></div>
//               <div className='nav-link'>
//               <Link to ="contact" spy={true} smooth={true} offset={-100} duratio={100}>
//                 < FcBusinessContact />Contact</Link></div>
//             </div>
//           </div>
//           </Fade>
//         </>
//       ) : (
//           <h1>A</h1>
//       )}
//     </>
//   );
// };

// export default Menus


import React from 'react';
import "./Menus.css";
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-scroll';
import { FcHome, FcAbout, FcBiotech, FcReadingEbook, FcVideoProjector, FcBusinessContact } from "react-icons/fc";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className='navbar-profile-pic'>
              <img src={require("./pic.jpg")} alt="profile-pic" />
            </div>
          </Zoom>
          <Fade left>
            <div className='nav-items'>
              <div className='nav-item'>
                <div className='nav-link'>
                  <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                    <FcHome />Home
                  </Link>
                </div>
                <div className='nav-link'>
                  <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                    <FcAbout />About
                  </Link>
                </div>
                <div className='nav-link'>
                  <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                    <FcReadingEbook />Education
                  </Link>
                </div>
                <div className='nav-link'>
                  <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                    <FcBiotech />Techstack
                  </Link>
                </div>
                <div className='nav-link'>
                  <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                    <FcVideoProjector />Projects
                  </Link>
                </div>
                <div className='nav-link'>
                  <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                    <FcBusinessContact />Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <h1>A</h1>
      )}
    </>
  );
};

export default Menus;


