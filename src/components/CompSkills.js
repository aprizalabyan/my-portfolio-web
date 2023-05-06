import React from 'react'
import Carousel from 'react-multi-carousel'
import circle70 from './../assets/circle-70.png'
import circle75 from './../assets/circle-75.png'
import circle80 from './../assets/circle-80.png'
import circle85 from './../assets/circle-85.png'

const CompSkills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section id="skills" className="col-10 container text-center">
            <h2>Skills</h2>
            <p>My Programing Level</p>
            <Carousel responsive={responsive} infinite={true}>
                <div className="itemSkills">
                    <img src={circle75} alt="img" className="mb-4"/>
                    <h4>React Js</h4>
                    <h6 className="fst-italic">(Framework)</h6>
                </div>
                <div className="itemSkills">
                    <img src={circle80} alt="img" className="mb-4"/>
                    <h4>Bootstrap</h4>
                    <h6 className="fst-italic">(Framework)</h6>
                </div>
                <div className="itemSkills">
                    <img src={circle85} alt="img" className="mb-4"/>
                    <h4>CSS</h4>
                    <h6 className="fst-italic">(Programing Language)</h6>
                </div>
                <div className="itemSkills">
                    <img src={circle85} alt="img" className="mb-4"/>
                    <h4>HTML</h4>
                    <h6 className="fst-italic">(Programing Language)</h6>
                </div>
                <div className="itemSkills">
                    <img src={circle75} alt="img" className="mb-4"/>
                    <h4>Javascript</h4>
                    <h6 className="fst-italic">(Programing Language)</h6>
                </div>
                <div className="itemSkills">
                    <img src={circle70} alt="img" className="mb-4"/>
                    <h4>PHP</h4>
                    <h6 className="fst-italic">(Programing Language)</h6>
                </div>
                <div className="itemSkills">
                    <img src={circle70} alt="img" className="mb-4"/>
                    <h4>MySQL</h4>
                    <h6 className="fst-italic">(Database)</h6>
                </div>
            </Carousel>
        </section>
    )
}

export default CompSkills