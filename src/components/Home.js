import React from 'react'
import CompHero from './CompHero'
import CompNavbar from './CompNavbar'
import CompContact from './CompContact'
import CompFooter from './CompFooter'
import CompSkills from './CompSkills'
import CompPortfolio from './CompPortfolio'

const Home = () => {
  return (
    <>
      <CompNavbar />
      <CompHero />
      <CompSkills />
      <CompPortfolio />
      <CompContact />
      <CompFooter />
    </>
  )
}

export default Home