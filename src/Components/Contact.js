// import React from 'react'
import {Link} from 'react-router-dom'
import  React, {useState} from 'react'


const Contact = () => {
  const [user , setUser]=useState({
    name:"",
    email:"",
    subject:"",
    message:"",
  });
  let name,value;
  const getUserData =(event)=>{
    name=event.target.name;
    value=  event.target.value; 
    setUser({...user ,[name]: value});
   
  };
  const postData = async (e) => {
    e.preventDefault();
    const{name,email,subject,message }=user;
   const res= await fetch("https://seminar-18736-default-rtdb.firebaseio.com//seminar_contect_form.json",
   {
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      name,
      email,
      subject,
      message,
    })
   });

  };
  return (
    <section id="Contact" className="contact">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>

      <div className="row mt-5">       

        <div className="col-lg-12 mt-5 mt-lg-0">

          <form action className="php-email-form"method="POST">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"  value={user.name}
                onChange={getUserData}
                  autoComplete="off"
                  required
                />
               
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" value={user.email}
                onChange={getUserData}
                autoComplete="off"
                  required
                />
               
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={user.subject} onChange={getUserData}/>
            
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message"  value={user.message} onChange={getUserData}>
              </textarea>
             
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button className='logbtn'onClick={postData}>
            <span>
              submit
            </span>
            
            </button></div>
          </form>

        </div>

      </div>

    </div>
  </section>
  )
}

export default Contact