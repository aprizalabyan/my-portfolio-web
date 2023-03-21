import React from 'react'
import Carousel from 'react-multi-carousel'
import port1 from './../assets/port-1.png'

const CompPortfolio = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
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
        <div className="col-10 container text-center">
            <div id="portfolio">
                <h2>Portfolio</h2>
                <p>My Recent Projects</p>
                <Carousel responsive={responsive} infinite={true} itemClass="itemPortfolio">
                    <div class="card col-8">
                        <img src={port1} class="card-img-top" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Web Design</h5>
                            <p class="card-text">Lombok Travel</p>
                        </div>
                    </div>
                    <div class="card col-8">
                        <img src={port1} class="card-img-top" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Web Design</h5>
                            <p class="card-text">Lombok Travel</p>
                        </div>
                    </div>
                    <div class="card col-8">
                        <img src={port1} class="card-img-top" alt="img"/>
                        <div class="card-body">
                            <h5 class="card-title">Web Design</h5>
                            <p class="card-text">Lombok Travel</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default CompPortfolio