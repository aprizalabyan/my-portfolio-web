import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const CompContact = () => {
  const text = "Hello%20Abyan, "
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  const form = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    if(name!=='' && email!=='' && msg!==''){
      if(regex.test(email) === false){
        setError('Please enter valid email address')
      }
      else {
      console.log('email sent')
      setError('')
      
      // emailjs.sendForm('service_56urbvu', 'template_h91fepk', form.current, '-tg0IMy127Lq-HdBv')
      e.target.reset()
      alert('Email sent succesfull')
      }
    } else {
      alert('Form data cant be blank')
    }
  }

  return (
    <section id="contact" className="col-10 container text-center">
        <div className="row justify-content-center mb-5">
          <div className="col-10">
            <h2>Contact Me</h2>
            <p>Get in Touch</p>
            <div className="row contact mt-5">
              <div className="col-12 col-md-6 d-flex align-items-center flex-column gap-3">
                <div className="card text-center col-md-8 col-10">
                  <div className="card-body">
                    <i className="bi bi-house" style={{fontSize: "24px"}}></i>
                    <h6 className="card-title">Address</h6>
                    <p className="card-text" style={{fontSize: "14px"}}>Selong, Lombok Timur, Nusa Tenggara Barat - Indonesia</p>
                    <a href="https://goo.gl/maps/GPvc2336HTksLyjy5">Find Me <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
                <div className="card text-center col-md-8 col-10">
                  <div className="card-body">
                    <i className="bi bi-whatsapp" style={{fontSize: "24px"}}></i>
                    <h6 className="card-title">Whatsapp</h6>
                    <p className="card-text" style={{fontSize: "14px"}}>+62 87805429349</p>
                    <a href={"https://wa.me/+6287805429349?text="+text}>Write Me <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <form className="col-12 col-md-6 card py-3" ref={form} onSubmit={sendEmail}>
                <label className="mb-2 d-flex justify-content-start ps-1">Send an Email :</label>
                <div className="mb-4">
                    <input type="text" className="form-control" placeholder="Insert your name" name="nameForm" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-2">
                    <input type="email" className="form-control" placeholder="Insert your email" name="emailForm" onChange={(e) => setEmail(e.target.value)}/>
                    <p className="text-danger fs-6 fst-italic mt-2 ms-3 text-start">{error}</p>
                </div>
                <div className="mb-2">
                  <textarea className="form-control" name="messageForm" rows="6" placeholder="Write your message" onChange={(e) => setMsg(e.target.value)}></textarea>
                </div>
                <div className="d-flex mt-3 flex-column align-items-end">
                  <button className="btnThird" type="submit">Send</button>    
                </div>
              </form>
            </div>
          </div>
        </div>
    </section>
  )
}

export default CompContact