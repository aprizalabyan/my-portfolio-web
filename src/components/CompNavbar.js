import React, { useState } from 'react'

const CompNavbar = () => {
  const [activeLink, setActiveLink] = useState('home')

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value)
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container col-10">
            <a className="navbar-brand" href="#home">Aprzl</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItem" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarItem">
              <div className="navbar-nav">
                  <a className={activeLink === 'home' ? 'nav-link active' : 'nav-link'} href="#home" onClick={() => onUpdateActiveLink('home')}>Home</a>
                  <a className={activeLink === 'skills' ? 'nav-link active' : 'nav-link'} href="#skills" onClick={() => onUpdateActiveLink('skills')}>Skills</a>
                  <a className={activeLink === 'portfolio' ? 'nav-link active' : 'nav-link'} href="#portfolio" onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</a>
                  <a className={activeLink === 'contact' ? 'nav-link active' : 'nav-link'} href="#contact" onClick={() => onUpdateActiveLink('contact')}>Contact</a>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default CompNavbar