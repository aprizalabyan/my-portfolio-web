import React from 'react'

const CompContact = () => {
  return (
    <div className="col-10 container text-center">
        <div id="contact" className="row justify-content-center mb-5">
          <div className="col-10">
            <h2>Contact Me</h2>
            <p>Get in Touch</p>
            <div className="row">
              <div className="col-6 d-flex align-items-center flex-column gap-3">
                <div className="card text-center col-8">
                  <div className="card-body">
                    <i className="bi bi-house" style={{fontSize: "24px"}}></i>
                    <h6 className="card-title">Address</h6>
                    <p className="card-text" style={{fontSize: "14px"}}>Selong, Lombok Timur, Nusa Tenggara Barat - Indonesia</p>
                    <a href="#find">Find Me <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
                <div className="card text-center col-8">
                  <div className="card-body">
                    <i className="bi bi-whatsapp" style={{fontSize: "24px"}}></i>
                    <h6 className="card-title">Whatsapp</h6>
                    <p className="card-text" style={{fontSize: "14px"}}>+62 87805429349</p>
                    <a href="#find">Write Me <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-4">
                    <input type="text" className="form-control" placeholder="Insert your name" />
                </div>
                <div className="mb-4">
                    <input type="email" className="form-control" placeholder="Insert your email" />
                </div>
                <div className="mb-4">
                  <textarea className="form-control" id="message" rows="6" placeholder="Write your message"></textarea>
                </div>
                <div className="d-flex mt-3 flex-column align-items-end">
                  <button className="btnSecon">Send</button>    
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CompContact