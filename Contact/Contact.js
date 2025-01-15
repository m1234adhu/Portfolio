// import React,{useState} from 'react'
// import { toast} from 'react-toastify';
// import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
// import Rotate from 'react-reveal/Rotate';
// import LightSpeed from 'react-reveal/LightSpeed';
// import "./Contact.css" ;

// const Contact = () => {
//   const [name, setname] = useState("")
//   const [email, setemail] = useState("")
//   const [msg, setmsg] = useState("")

// //  handle mail
//   const sendEmail = () =>{
//   email.send(
//     { Host : "smtp.gmail.com",
//      Username : "mkdone98@gmail.com", 
//     Password : "",
//      To : '', 
//     From : "", 
//     Subject : "This is the subject",
//      Body : "And this is the body" }).then( message =>
//      alert("message sent successfully") );
//      }

//   // handle submit button
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     try {
//         if(!name || !email || !msg)
//            toast.error('Please provide alll fields')
//     } catch (error) {
//          console.log(error)
//     }
//   }
//   // On submit
  
//   return (
//   <>
//   <div className='contact' id='contact'>
//     <div className='card card0 border-0'>
//         <div className='row'>
//             <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
//               <div className='card1'>
//               <div className='row border-line'>
//                 <LightSpeed>
//                  <img src={require("./pic.jpeg")} alt="profile-pic"  className='image'/>
//                  </LightSpeed>
//               </div>
//             </div>
//         </div>
//         <div className='col-lg-6 col-md-6'>
//           <Rotate>
//           <div className='card2 d-flex card border-0 px-4 py-5'>
//           <div className='row'>
//             <div className='row'>
//                 <h6>Contact with 
//                    <BsLinkedin  color='blue'size={30} className='ms-2'/>
//                    <BsFacebook  color='blue'size={30} className='ms-2'/>
//                    <BsGithub  color='black'size={30} className='ms-2'/>
//                 </h6>
//                 </div>
//                 <div className='row px-3 mb-4'>
//                   <div className='line' />
//                     <small className='or text-center'>OR</small>
//                     <div className='line' />
//                 </div>
//                 <div className='row px-3'>
//                      <input type='text' name='name' placeholder='write your name' className='mb-3'
//                      value={name} onChange={(e) => setname(e.target.value)}
//                      />
//                 </div>
//                 <div className='row px-3'>
//                      <input type='text' name='email' placeholder='write your email' className='mb-3'
//                      value={email}  onChange={(e) => setemail(e.target.value)}
//                      />
//                 </div>
//                 <div className='row px-3'>
//                      <textarea type='text' name='msg' placeholder='write your message'  className='mb-3'
//                       value={msg}  onChange={(e) => setmsg(e.target.value)}
//                      />
//                 </div>
//                 <div className='row px-3'>
//                      <button className='button' onClick={handleSubmit} onSubmit={sendEmail}>SEND MESSAGE</button>
//                 </div>
//                 </div>
//           </div>
//           </Rotate>
//         </div>
//         </div>
//     </div>
//   </div>
//   </>
//   )
// }

// export default Contact;

import React from 'react';

import {BsGithub, BsLinkedin } from 'react-icons/bs';
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
import './Contact.css';

const Contact = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [msg, setMsg] = useState('');

  // handle submit button
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   try {
  //     if (!name || !email || !msg) toast.error('Please provide all fields');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img src={require('./pic.jpeg')} alt="profile-pic" className="image" />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6>Connect with us on 
                      <a href="https://www.linkedin.com/in/kumari-madhuri-741a93141" target="_blank" rel="noopener noreferrer">
                           <BsLinkedin color="blue" size={30} className="ms-2" />
                       </a>
                          
                        {/* <BsFacebook color="blue" size={30} className="ms-2" /> */}
                        <a href="https://github.com/m1234adhu" target="_blank" rel="noopener noreferrer">
                        <BsGithub color="black" size={30} className="ms-2" />
                       </a></h6>
                    </div>
                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="contact-details">
                      <p className="detail">Name: <span className="info">Km Madhuri</span></p>
                      <p className="detail">Mail Id: <span className="info">mkdone98@gmail.com</span></p>
                      <p className="detail">Contact No: <span className="info">9792173728</span></p>
                    </div>
                   
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';
// import Rotate from 'react-reveal/Rotate';
// import LightSpeed from 'react-reveal/LightSpeed';
// import './Contact.css';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [msg, setMsg] = useState('');

//   const sendEmail = async () => {
//     try {
//       await axios.post('/send-email', { name, email, message: msg });
//       toast.success('Message sent successfully!');
//       setName('');
//       setEmail('');
//       setMsg('');
//     } catch (error) {
//       console.error('Error: ', error);
//       toast.error('An error occurred while sending the email. Please try again later.');
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (!name || !email || !msg) {
//       toast.error('Please provide all fields');
//       return;
//     }
//     sendEmail();
//   };

//   return (
//     <>
//       <div className='contact' id='contact'>
//         <div className='card card0 border-0'>
//           <div className='row'>
//             <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
//               <div className='card1'>
//                 <div className='row border-line'>
//                   <LightSpeed>
//                     <img src={require('./pic.jpeg')} alt='profile-pic' className='image' />
//                   </LightSpeed>
//                 </div>
//               </div>
//             </div>
//             <div className='col-lg-6 col-md-6'>
//               <Rotate>
//                 <div className='card2 d-flex card border-0 px-4 py-5'>
//                   <div className='row'>
//                     <div className='row'>
//                       <h6>
//                         Contact with{' '}
//                         <BsLinkedin color='blue' size={30} className='ms-2' />
//                         <BsFacebook color='blue' size={30} className='ms-2' />
//                         <BsGithub color='black' size={30} className='ms-2' />
//                       </h6>
//                     </div>
//                     <div className='row px-3 mb-4'>
//                       <div className='line' />
//                       <small className='or text-center'>OR</small>
//                       <div className='line' />
//                     </div>
//                     <div className='row px-3'>
//                       <input
//                         type='text'
//                         name='name'
//                         placeholder='write your name'
//                         className='mb-3'
//                         value={name}
//                         onChange={e => setName(e.target.value)}
//                       />
//                     </div>
//                     <div className='row px-3'>
//                       <input
//                         type='email'
//                         name='email'
//                         placeholder='write your email'
//                         className='mb-3'
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                       />
//                     </div>
//                     <div className='row px-3'>
//                       <textarea
//                         type='text'
//                         name='msg'
//                         placeholder='write your message'
//                         className='mb-3'
//                         value={msg}
//                         onChange={e => setMsg(e.target.value)}
//                       />
//                     </div>
//                     <div className='row px-3'>
//                       <button className='button' onClick={handleSubmit}>
//                         SEND MESSAGE
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </Rotate>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;




// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
// import Rotate from 'react-reveal/Rotate';
// import LightSpeed from 'react-reveal/LightSpeed';
// import emailjs from 'emailjs-com'; // Import the emailjs-com library
// import "./Contact.css";

// const Contact = () => {
//     const [name, setname] = useState("");
//     const [email, setemail] = useState("");
//     const [msg, setmsg] = useState("");

    // Send email function
    // const sendEmail = (e) => {
    //     e.preventDefault(); // Prevent default form submission behavior
    
        // Check if all fields are filled
        // if (!name || !email || !msg) {
        //     toast.error('Please provide all fields');
        //     return;
        // }
    
        // Send email using emailjs-com library
        // emailjs.sendForm('service_ug819tq', 'template_0xeqzid', document.getElementById('contactForm'), 'YR5E20a5zzHFxmQGxaXm0k')
        //     .then((result) => {
        //         console.log(result.text);
        //         toast.success('Message sent successfully!');
                // Reset form fields after successful submission
//                 setname('');
//                 setemail('');
//                 setmsg('');
//             }, (error) => {
//                 console.log(error.text);
//                 toast.error('Error occurred while sending message. Please try again later.');
//             });
//     };
    
//     return (
//         <>
//             <div className='contact' id='contact'>
//                 <div className='card card0 border-0'>
//                     <div className='row'>
//                         <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
//                             <div className='card1'>
//                                 <div className='row border-line'>
//                                     <LightSpeed>
//                                         <img src={require("./pic.jpeg")} alt="profile-pic" className='image' />
//                                     </LightSpeed>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-lg-6 col-md-6'>
//                             <Rotate>
//                                 <div className='card2 d-flex card border-0 px-4 py-5'>
//                                     <div className='row'>
//                                         <div className='row'>
//                                             <h6>Contact with
//                                                 <BsLinkedin color='blue' size={30} className='ms-2' />
//                                                 <BsFacebook color='blue' size={30} className='ms-2' />
//                                                 <BsGithub color='black' size={30} className='ms-2' />
//                                             </h6>
//                                         </div>
//                                         <div className='row px-3 mb-4'>
//                                             <div className='line' />
//                                             <small className='or text-center'>OR</small>
//                                             <div className='line' />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <input type='text' name='name' placeholder='write your name' className='mb-3'
//                                                 value={name} onChange={(e) => setname(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <input type='text' name='email' placeholder='write your email' className='mb-3'
//                                                 value={email} onChange={(e) => setemail(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <textarea type='text' name='msg' placeholder='write your message' className='mb-3'
//                                                 value={msg} onChange={(e) => setmsg(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <button className='button' onClick={sendEmail}>SEND MESSAGE</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Rotate>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Contact;



// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
// import Rotate from 'react-reveal/Rotate';
// import LightSpeed from 'react-reveal/LightSpeed';
// import emailjs from 'emailjs-com'; // Import the emailjs-com library
// import "./Contact.css";

// const Contact = () => {
//     const [name, setname] = useState("");
//     const [email, setemail] = useState("");
//     const [msg, setmsg] = useState("");

//     // Send email function
//     const sendEmail = (e) => {
//         e.preventDefault(); // Prevent default form submission behavior

//         // Check if all fields are filled
//         if (!name || !email || !msg) {
//             toast.error('Please provide all fields');
//             return;
//         }

//         // Send email using emailjs-com library
//         emailjs.sendForm('service_ug819tq', 'template_0xeqzid', document.getElementById('contactForm'), 'YR5E20a5zzHFxmQGxaXm0k')
//             .then((result) => {
//                 console.log(result.text);
//                 toast.success('Message sent successfully!');
//                 // Reset form fields after successful submission
//                 setname('');
//                 setemail('');
//                 setmsg('');
//             }, (error) => {
//                 console.log(error.text);
//                 toast.error('Error occurred while sending message. Please try again later.');
//             });
//     };

//     return (
//         <form id="contactForm">
//             <div className='contact' id='contact'>
//                 <div className='card card0 border-0'>
//                     <div className='row'>
//                         <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
//                             <div className='card1'>
//                                 <div className='row border-line'>
//                                     <LightSpeed>
//                                         <img src={require("./pic.jpeg")} alt="profile-pic" className='image' />
//                                     </LightSpeed>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-lg-6 col-md-6'>
//                             <Rotate>
//                                 <div className='card2 d-flex card border-0 px-4 py-5'>
//                                     <div className='row'>
//                                         <div className='row'>
//                                             <h6>Contact with
//                                                 <BsLinkedin color='blue' size={30} className='ms-2' />
//                                                 <BsFacebook color='blue' size={30} className='ms-2' />
//                                                 <BsGithub color='black' size={30} className='ms-2' />
//                                             </h6>
//                                         </div>
//                                         <div className='row px-3 mb-4'>
//                                             <div className='line' />
//                                             <small className='or text-center'>OR</small>
//                                             <div className='line' />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <input type='text' name='name' placeholder='write your name' className='mb-3'
//                                                 value={name} onChange={(e) => setname(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <input type='text' name='email' placeholder='write your email' className='mb-3'
//                                                 value={email} onChange={(e) => setemail(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <textarea type='text' name='msg' placeholder='write your message' className='mb-3'
//                                                 value={msg} onChange={(e) => setmsg(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <button className='button' onClick={sendEmail}>SEND MESSAGE</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Rotate>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// }

// export default Contact;

// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
// import Rotate from 'react-reveal/Rotate';
// import LightSpeed from 'react-reveal/LightSpeed';
// import "./Contact.css";

// const Contact = () => {
//     const [name, setname] = useState("");
//     const [email, setemail] = useState("");
//     const [msg, setmsg] = useState("");

//     // Send email function
//     const sendEmail = () => {
//         // Construct the email data
//         const emailData = {
//             host: "smtp.gmail.com",
//             username: "mkdone98@gmail.com",
//             password: "bpoescyoyioxrwnv", // Replace with your actual password or use environment variables
//             to: 'mkdone98@gmail.com',
//             from: "mkdone98@gmail.com",
//             subject: "This is the subject",
//             body: "And this is the body"
//         };

//         // Send email using SMTP
//         fetch('http://your-backend-url/send-email', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(emailData),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             toast.success('Message sent successfully!');
//             // Reset form fields after successful submission
//             setname('');
//             setemail('');
//             setmsg('');
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             toast.error('Error occurred while sending message. Please try again later.');
//         });
//     };

//     return (
//         <form id="contactForm">
//             <div className='contact' id='contact'>
//                 <div className='card card0 border-0'>
//                     <div className='row'>
//                         <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
//                             <div className='card1'>
//                                 <div className='row border-line'>
//                                     <LightSpeed>
//                                         <img src={require("./pic.jpeg")} alt="profile-pic" className='image' />
//                                     </LightSpeed>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-lg-6 col-md-6'>
//                             <Rotate>
//                                 <div className='card2 d-flex card border-0 px-4 py-5'>
//                                     <div className='row'>
//                                         <div className='row'>
//                                             <h6>Contact with
//                                                 <BsLinkedin color='blue' size={30} className='ms-2' />
//                                                 <BsFacebook color='blue' size={30} className='ms-2' />
//                                                 <BsGithub color='black' size={30} className='ms-2' />
//                                             </h6>
//                                         </div>
//                                         <div className='row px-3 mb-4'>
//                                             <div className='line' />
//                                             <small className='or text-center'>OR</small>
//                                             <div className='line' />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <input type='text' name='name' placeholder='write your name' className='mb-3'
//                                                 value={name} onChange={(e) => setname(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <input type='text' name='email' placeholder='write your email' className='mb-3'
//                                                 value={email} onChange={(e) => setemail(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <textarea type='text' name='msg' placeholder='write your message' className='mb-3'
//                                                 value={msg} onChange={(e) => setmsg(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <button className='button' onClick={sendEmail}>SEND MESSAGE</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Rotate>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// }

// export default Contact;



// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
// import Rotate from 'react-reveal/Rotate';
// import LightSpeed from 'react-reveal/LightSpeed';
// import "./Contact.css";


// const Contact = () => {
//     const [name, setname] = useState("");
//     const [email, setemail] = useState("");
//     const [msg, setmsg] = useState("");

    
//     };

//     return (
//         <form onSubmit={sendEmail}>
//             <div className='contact' id='contact'>
//                 <div className='card card0 border-0'>
//                     <div className='row'>
//                         <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
//                             <div className='card1'>
//                                 <div className='row border-line'>
//                                     <LightSpeed>
//                                         <img src={require("./pic.jpeg")} alt="profile-pic" className='image' />
//                                     </LightSpeed>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-lg-6 col-md-6'>
//                             <Rotate>
//                                 <div className='card2 d-flex card border-0 px-4 py-5'>
//                                     <div className='row'>
//                                         <div className='row'>
//                                             <h6>Contact with
//                                                 <BsLinkedin color='blue' size={30} className='ms-2' />
//                                                 <BsFacebook color='blue' size={30} className='ms-2' />
//                                                 <BsGithub color='black' size={30} className='ms-2' />
//                                             </h6>
//                                         </div>
//                                         <div className='row px-3 mb-4'>
//                                             <div className='line' />
//                                             <small className='or text-center'>OR</small>
//                                             <div className='line' />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <input type='text' name='name' placeholder='write your name' className='mb-3'
//                                                 value={name} onChange={(e) => setname(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <input type='text' name='email' placeholder='write your email' className='mb-3'
//                                                 value={email} onChange={(e) => setemail(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <textarea name='message' placeholder='write your message' className='mb-3'
//                                                 value={msg} onChange={(e) => setmsg(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <button type='submit' className='button'>SEND MESSAGE</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Rotate>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// }

// export default Contact;

// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
// import Rotate from 'react-reveal/Rotate';
// import LightSpeed from 'react-reveal/LightSpeed';
// import axios from 'axios'; // Import Axios for making HTTP requests
// import "./Contact.css";

// const Contact = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [msg, setMsg] = useState("");

//     // Send email function
//     const sendEmail = async (e) => {
//         e.preventDefault(); // Prevent default form submission behavior

//         // Check if all fields are filled
//         if (!name || !email || !msg) {
//             toast.error('Please provide all fields');
//             return;
//         }

//         try {
//             // Send POST request to backend server
//             await axios.post('/send-email', { name, email, msg });
//             toast.success('Message sent successfully!');
//             // Reset form fields after successful submission
//             setName('');
//             setEmail('');
//             setMsg('');
//         } catch (error) {
//             console.error('Error:', error);
//             toast.error('Error occurred while sending message. Please try again later.');
//         }
//     };

//     return (
//         <form onSubmit={sendEmail}>
//             <div className='contact' id='contact'>
//                 <div className='card card0 border-0'>
//                     <div className='row'>
//                         <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
//                             <div className='card1'>
//                                 <div className='row border-line'>
//                                     <LightSpeed>
//                                         <img src={require("./pic.jpeg")} alt="profile-pic" className='image' />
//                                     </LightSpeed>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='col-lg-6 col-md-6'>
//                             <Rotate>
//                                 <div className='card2 d-flex card border-0 px-4 py-5'>
//                                     <div className='row'>
//                                         <div className='row'>
//                                             <h6>Contact with
//                                                 <BsLinkedin color='blue' size={30} className='ms-2' />
//                                                 <BsFacebook color='blue' size={30} className='ms-2' />
//                                                 <BsGithub color='black' size={30} className='ms-2' />
//                                             </h6>
//                                         </div>
//                                         <div className='row px-3 mb-4'>
//                                             <div className='line' />
//                                             <small className='or text-center'>OR</small>
//                                             <div className='line' />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <input type='text' name='name' placeholder='write your name' className='mb-3'
//                                                 value={name} onChange={(e) => setName(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <input type='text' name='email' placeholder='write your email' className='mb-3'
//                                                 value={email} onChange={(e) => setEmail(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <textarea name='message' placeholder='write your message' className='mb-3'
//                                                 value={msg} onChange={(e) => setMsg(e.target.value)}
//                                             />
//                                         </div>
//                                         <div className='row px-3'>
//                                             <button type='submit' className='button'>SEND MESSAGE</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Rotate>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// }

// export default Contact;


// show me

// const Contact = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMsg] = useState("");

//     const sendEmail = async (e) => {
//         e.preventDefault();

//         if (!name || !email || !message) {
//             toast.error('Please provide all fields');
//             return;
//         }

//         try {
//             await axios.post('/send-email', { name, email, message });
//             toast.success('Message sent successfully!');
//             setName('');
//             setEmail('');
//             setMsg('');
//         } catch (error) {
//             console.error('Error:', error);
//             toast.error('Error occurred while sending message. Please try again later.');
//         }
//     };


    //     <form onSubmit={sendEmail}>
    //         <div className='contact' id='contact'>
    //             <div className='card card0 border-0'>
    //                 <div className='row'>
    //                     <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
    //                         <div className='card1'>
    //                             <div className='row border-line'>
    //                                 <LightSpeed>
    //                                     <img src={require("./pic.jpeg")} alt="profile-pic" className='image' />
    //                                 </LightSpeed>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className='col-lg-6 col-md-6'>
    //                         <Rotate>
    //                             <div className='card2 d-flex card border-0 px-4 py-5'>
    //                                 <div className='row'>
    //                                     <div className='row'>
    //                                         <h6>Contact with
    //                                             <BsLinkedin color='blue' size={30} className='ms-2' />
    //                                             <BsFacebook color='blue' size={30} className='ms-2' />
    //                                             <BsGithub color='black' size={30} className='ms-2' />
    //                                         </h6>
    //                                     </div>
    //                                     <div className='row px-3 mb-4'>
    //                                         <div className='line' />
    //                                         <small className='or text-center'>OR</small>
    //                                         <div className='line' />
    //                                     </div>
    //                                     <div className='row px-3'>
    //                                         <input type='text' name='name' placeholder='Your name' className='mb-3'
    //                                             value={name} onChange={(e) => setName(e.target.value)}
    //                                         />
    //                                     </div>
    //                                     <div className='row px-3'>
    //                                         <input type='email' name='email' placeholder='Your email' className='mb-3'
    //                                             value={email} onChange={(e) => setEmail(e.target.value)}
    //                                         />
    //                                     </div>
    //                                     <div className='row px-3'>
    //                                         <textarea name='message' placeholder='Your message' className='mb-3'
    //                                             value={message} onChange={(e) => setMsg(e.target.value)}
    //                                         />
    //                                     </div>
    //                                     <div className='row px-3'>
    //                                         <button type='submit' className='button'>SEND MESSAGE</button>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </Rotate>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </form>
    // );
// }


// <div className="container">
// <h3 className="text-center text-success mb-2 mt-4">Email Send using React and Node</h3>
//       <div className="row">
          
//       <div className='row border-line'>
//                                    <LightSpeed>
//                                        <img src={require("./pic.jpeg")} alt="profile-pic" className='image' />
//                                     </LightSpeed>
//                            </div>

//   <div className="col-sm-4 mx-auto shadow p-5">
//     <h4 className="text-center mb-2">Send E Mail</h4>
//     <p className="mb-3 mt-2 text-success"><b>{msg}</b></p>
//     <div className="form-group mb-3">
//       <input
//         type="text"
//         className="form-control form-control-lg"
//         placeholder="To"
//         name="to"
//         onChange={onInputChange}
//         value={to}
//       />
//     </div>
//     <div className="form-group mb-4">
//       <input
//         type="text"
//         className="form-control form-control-lg"
//         placeholder="Subject"
//         name="subject"
//         onChange={onInputChange}
//         value={subject}
//       />
//     </div>
//     <div className="form-group mb-4">
//       <textarea
//         className="form-control form-control-lg"
//         placeholder="Description"
//         name="description"
//         onChange={onInputChange}
//         value={description}
//       />
//     </div>
//     <button onClick={onSubmit} className="btn btn-primary btn-block">Send Mail</button>
//   </div>
// </div>
// </div>


// import React, { useState } from 'react';
// // import { toast } from 'react-toastify';
// import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
// // import Rotate from 'react-reveal/Rotate';
// import LightSpeed from 'react-reveal/LightSpeed';
// import axios from 'axios';
// import "./Contact.css";


// const Contact = () => {
//   const [msg, setMsg] = useState('');
//   const [user, setUser] = useState({
//     to: "",
//     subject: "",
//     description: ""
//   });

//   const { to, subject, description } = user;

//   const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async e => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/users/", user);
//       setMsg(response.data.respMesg);
//     } catch (error) {
//       console.error('Error: ', error);
//     }
//   };


//   return (

// <div className="container">
//   {/* <h3 className="text-center text-success mb-2 mt-4">Email Send using React and Node</h3> */}
  
//   <div className="row d-flex align-items-center">
//     <div className="col-sm-6">
//       <div className='row border-line'>
//         <LightSpeed>
//           <img src={require("./pic.jpeg")} alt="profile-pic" className='image img-fluid' />
//         </LightSpeed>
//         <div className='row' text-center mt-4>
//                                             <h6>Contact with
//                                                <BsLinkedin color='blue' size={30} className='ms-2' />
//                                                  <BsFacebook color='blue' size={30} className='ms-2' />
//                                                   <BsGithub color='black' size={30} className='ms-2' />
//                                              </h6>
//                                         </div>
//     </div>
//       </div>
     
//     <div className="col-sm-6">
//       <div className="shadow p-5">
//         <h4 className="text-center mb-2">Contact Us</h4>
//         <p className="mb-3 mt-2 text-success"><b>{msg}</b></p>
//         <div className="form-group mb-3">
//           <input
//             type="text"
//             className="form-control form-control-lg"
//             placeholder="To"
//             name="to"
//             onChange={onInputChange}
//             value={to}
//           />
//         </div>
//         <div className="form-group mb-4">
//           <input
//             type="text"
//             className="form-control form-control-lg"
//             placeholder="Subject"
//             name="subject"
//             onChange={onInputChange}
//             value={subject}
//           />
//         </div>
//         <div className="form-group mb-4">
//           <textarea
//             className="form-control form-control-lg"
//             placeholder="Description"
//             name="description"
//             onChange={onInputChange}
//             value={description}
//           />
//         </div>
//         <button onClick={onSubmit} className="btn btn-primary btn-block">Send Mail</button>
//       </div>
//     </div>
//   </div>
// </div>



// );
// };

// export default Contact;


// import React, { useState } from 'react';
// import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
// import LightSpeed from 'react-reveal/LightSpeed';
// import axios from 'axios';
// import "./Contact.css";

// const Contact = () => {
//   const [msg, setMsg] = useState('');
//   const [user, setUser] = useState({
//     to: "",
//     subject: "",
//     description: ""
//   });

//   const { to, subject, description } = user;

//   const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async e => {
//     e.preventDefault();
//     try {
//       if (!to || !subject || !description) {
//         setMsg("Please fill in all fields.");
//         return;
//       }
//       const response = await axios.post("http://localhost:5000/users/", user);
//       setMsg(response.data.respMesg);
//       setUser({
//         to: "",
//         subject: "",
//         description: ""
//       });
//     } catch (error) {
//       console.error('Error: ', error);
//     }
//   };

//   return (
//     // <div className="container">
//     //   <div className="row d-flex align-items-center">
//     //     <div className="col-sm-6">
//     //       <div className='row border-line'>
//     //         <LightSpeed>
//     //           <img src={require("./pic.jpeg")} alt="profile-pic" className='image img-fluid' />
//     //         </LightSpeed>
//     //         <div className='row' text-center mt-4>
//     //           <h6>Contact with
//     //             <BsLinkedin color='blue' size={30} className='ms-2' />
//     //             <BsFacebook color='blue' size={30} className='ms-2' />
//     //             <BsGithub color='black' size={30} className='ms-2' />
//     //           </h6>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div className="col-sm-6">
//     //       <div className="shadow p-5">
//     //         <h4 className="text-center mb-2">Contact Us</h4>
//     //         <p className="mb-3 mt-2 text-success"><b>{msg}</b></p>
//     //         <form onSubmit={onSubmit}>
//     //           <div className="form-group mb-3">
//     //             <label htmlFor="to">To</label>
//     //             <input
//     //               type="text"
//     //               id="to"
//     //               className="form-control form-control-lg"
//     //               placeholder="To"
//     //               name="to"
//     //               onChange={onInputChange}
//     //               value={to}
//     //             />
//     //           </div>
//     //           <div className="form-group mb-4">
//     //             <label htmlFor="subject">Subject</label>
//     //             <input
//     //               type="text"
//     //               id="subject"
//     //               className="form-control form-control-lg"
//     //               placeholder="Subject"
//     //               name="subject"
//     //               onChange={onInputChange}
//     //               value={subject}
//     //             />
//     //           </div>
//     //           <div className="form-group mb-4">
//     //             <label htmlFor="description">Description</label>
//     //             <textarea
//     //               id="description"
//     //               className="form-control form-control-lg"
//     //               placeholder="Description"
//     //               name="description"
//     //               onChange={onInputChange}
//     //               value={description}
//     //             />
//     //           </div>
//     //           <button type="submit" className="btn btn-primary btn-block">Send Mail</button>
//     //         </form>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>
//     <div className="container">
//       <div className="row d-flex align-items-center">
//         <div className="col-sm-6">
//           <div className='row border-line'>
//             <LightSpeed>
//               <img src={require("./pic.jpeg")} alt="profile-pic" className='image img-fluid' />
//             </LightSpeed>
//             <div className='row' text-center mt-4>
//               <h6>Contact with
//                 <BsLinkedin color='blue' size={30} className='ms-2' />
//                 <BsFacebook color='blue' size={30} className='ms-2' />
//                 <BsGithub color='black' size={30} className='ms-2' />
//               </h6>
//             </div>
//           </div>
//         </div>
//         <div className="col-sm-6">
//           <div className="shadow p-5">
//             <h4 className="text-center mb-2">Contact Us</h4>
//             <p className="mb-3 mt-2 text-success"><b>{msg}</b></p>
//             <form onSubmit={onSubmit}>
//               <div className="form-group mb-3">
//                 <label htmlFor="to">To</label>
//                 <input
//                   type="text"
//                   id="to"
//                   className="form-control form-control-lg"
//                   placeholder="To"
//                   name="to"
//                   onChange={onInputChange}
//                   value={to}
//                   required
//                 />
//               </div>
//               <div className="form-group mb-4">
//                 <label htmlFor="subject">Subject</label>
//                 <input
//                   type="text"
//                   id="subject"
//                   className="form-control form-control-lg"
//                   placeholder="Subject"
//                   name="subject"
//                   onChange={onInputChange}
//                   value={subject}
//                   required
//                 />
//               </div>
//               <div className="form-group mb-4">
//                 <label htmlFor="description">Description</label>
//                 <textarea
//                   id="description"
//                   className="form-control form-control-lg"
//                   placeholder="Description"
//                   name="description"
//                   onChange={onInputChange}
//                   value={description}
//                   required
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary btn-block">Send Mail</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// import React, { useState } from 'react';
// import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
// import LightSpeed from 'react-reveal/LightSpeed';
// import axios from 'axios';
// import "./Contact.css";

// const Contact = () => {
//   const [msg, setMsg] = useState('');
//   const [user, setUser] = useState({
//     to: "",
//     subject: "",
//     description: ""
//   });

//   const { to, subject, description } = user;

//   const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async e => {
//     e.preventDefault();
//     try {
//       if (!to || !subject || !description) {
//         setMsg("Please fill in all fields.");
//         return;
//       }
//       const response = await axios.post("http://localhost:5000/send-email", user); // Update endpoint to match backend
//       setMsg(response.data.respMesg);
//       setUser({
//         to: "",
//         subject: "",
//         description: ""
//       });
//     } catch (error) {
//       console.error('Error: ', error);
//       setMsg("An error occurred while sending the email. Please try again later."); // Update error message
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row d-flex align-items-center">
//         <div className="col-sm-6">
//           <div className='row border-line'>
//             <LightSpeed>
//               <img src={require("./pic.jpeg")} alt="profile-pic" className='image img-fluid' />
//             </LightSpeed>
//             <div className='row' text-center mt-4>
//               <h6>Contact with
//                 <BsLinkedin color='blue' size={30} className='ms-2' />
//                 <BsFacebook color='blue' size={30} className='ms-2' />
//                 <BsGithub color='black' size={30} className='ms-2' />
//               </h6>
//             </div>
//           </div>
//         </div>
//         <div className="col-sm-6">
//           <div className="shadow p-5">
//             <h4 className="text-center mb-2">Contact Us</h4>
//             {msg && <p className={`mb-3 mt-2 ${msg.includes("error") ? "text-danger" : "text-success"}`}><b>{msg}</b></p>}
//             <form onSubmit={onSubmit}>
//               <div className="form-group mb-3">
//                 <label htmlFor="to">To</label>
//                 <input
//                   type="email" // Change input type to email for better validation
//                   id="to"
//                   className="form-control form-control-lg"
//                   placeholder="Email"
//                   name="to"
//                   onChange={onInputChange}
//                   value={to}
//                   required
//                 />
//               </div>
//               <div className="form-group mb-4">
//                 <label htmlFor="subject">Subject</label>
//                 <input
//                   type="text"
//                   id="subject"
//                   className="form-control form-control-lg"
//                   placeholder="Subject"
//                   name="subject"
//                   onChange={onInputChange}
//                   value={subject}
//                   required
//                 />
//               </div>
//               <div className="form-group mb-4">
//                 <label htmlFor="description">Description</label>
//                 <textarea
//                   id="description"
//                   className="form-control form-control-lg"
//                   placeholder="Description"
//                   name="description"
//                   onChange={onInputChange}
//                   value={description}
//                   required
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary btn-block">Send Mail</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

