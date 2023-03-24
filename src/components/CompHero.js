import React from 'react'
import profil from '../assets/profil-full.jpg'

const CompHero = () => {
  return (
    <section className="col-10 container heroSection" id="home">
      <div className="row align-items-center">
        <div className="col-1 socialMedia">
            <a href="https://www.instagram.com/aprzla_/" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
            <a href="https://github.com/aprizalabyan" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
            <a href="https://www.facebook.com/aprzla" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
            <a href="https://www.linkedin.com/in/muhammad-aprizal-abyan-598012268/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
        </div>
        <div className="col-11 d-flex flex-nowrap caption">
          <div className="col-8 order-md-1 order-2">
            <div className="heroName">Muhammad Aprizal Abyan</div>
            <div className="d-flex flex-row mb-3 align-items-center">
              <div className="col-1 me-4 line"></div>
              <div className="heroDev">Front-End Developer</div>
            </div>
            <div className="mb-5 col-md-9 col-12">
              <span style={{fontSize: "14px"}}>I am a programmer interested in website development. I also like graphic design and photography. And i am very passionate to my work..</span>
            </div>
            <a href="#contact"><button className="btnPrim mt-2">Let's Connect</button></a>
          </div>
          <div className="order-md-2 order-1">
            <img src={profil} alt="profil" className="col-12 imgProfil" />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default CompHero