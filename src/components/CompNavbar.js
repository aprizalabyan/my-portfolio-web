import React from 'react'
import { Link } from 'react-scroll'

const CompNavbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top">
        <div className="container col-10">
            <a className="navbar-brand" href="#home">Aprzl</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItem" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarItem">
              <div className="navbar-nav">
                <Link activeClass="active" smooth={true} spy={true} offset={-100} to="home" className="nav-link" href="#home">Home</Link>
                <Link activeClass="active" smooth={true} spy={true} offset={-50} to="skills" className="nav-link" href="#skills">Skills</Link>
                <Link activeClass="active" smooth={true} spy={true} offset={-50} to="portfolio" className="nav-link" href="#portfolio">Portfolio</Link>
                <Link activeClass="active" smooth={true} spy={true} offset={-50} to="contact" className="nav-link" href="#contact">Contact</Link>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default CompNavbar