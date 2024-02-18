import React,{useState} from 'react'
import { toast} from 'react-toastify';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
import "./Contact.css" ;

const Contact = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [msg, setmsg] = useState("")

  //handle mail
  const sendEmail = () =>{
  email.send(
    { Host : "smtp.elasticemail.com",
     Username : "mkdone98@gmail.com", 
    Password : "26CD0DC0807C9A1C1DE94B4A4EB33F8AB0E6",
     To : 'mkdone98@gmail.com', 
    From : "mkdone98@gmail.com", 
    Subject : "This is the subject",
     Body : "And this is the body" }).then( message =>
     alert("message sent successfully") );
     }

  //handle submit button
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
        if(!name || !email || !msg)
           toast.error('Please provide alll fields')
    } catch (error) {
         console.log(error)
    }
  }

  //On submit
  

  return (
  <>
  <div className='contact' id='contact'>
    <div className='card card0 border-0'>
        <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
              <div className='card1'>
              <div className='row border-line'>
                <LightSpeed>
                 <img src={require("./pic.jpeg")} alt="profile-pic"  className='image'/>
                 </LightSpeed>
              </div>
            </div>
        </div>
        <div className='col-lg-6 col-md-6'>
          <Rotate>
          <div className='card2 d-flex card border-0 px-4 py-5'>
          <div className='row'>
            <div className='row'>
                <h6>Contact with 
                   <BsLinkedin  color='blue'size={30} className='ms-2'/>
                   <BsFacebook  color='blue'size={30} className='ms-2'/>
                   <BsGithub  color='black'size={30} className='ms-2'/>
                </h6>
                </div>
                <div className='row px-3 mb-4'>
                  <div className='line' />
                    <small className='or text-center'>OR</small>
                    <div className='line' />
                </div>
                <div className='row px-3'>
                     <input type='text' name='name' placeholder='write your name' className='mb-3'
                     value={name} onChange={(e) => setname(e.target.value)}
                     />
                </div>
                <div className='row px-3'>
                     <input type='text' name='email' placeholder='write your email' className='mb-3'
                     value={email}  onChange={(e) => setemail(e.target.value)}
                     />
                </div>
                <div className='row px-3'>
                     <textarea type='text' name='msg' placeholder='write your message'  className='mb-3'
                      value={msg}  onChange={(e) => setmsg(e.target.value)}
                     />
                </div>
                <div className='row px-3'>
                     <button className='button' onClick={handleSubmit} onSubmit={sendEmail}>SEND MESSAGE</button>
                </div>
                </div>
          </div>
          </Rotate>
        </div>
        </div>
    </div>
  </div>
  </>
  )
}

export default Contact;
