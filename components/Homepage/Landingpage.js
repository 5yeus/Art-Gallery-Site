import React from 'react'
import "./Homepage.css"
import Hero from "../../assets/images/Hero.jpg"
import Rightarrow from "../../assets/images/icon-arrow-right.svg"


const Landingpage = () => {
  return (
    <div className='landing_page'>
        <div className='black-color'></div>
        <img src={Hero} alt="hero"/>
        <div className='hero-details'>
          <div className='hero-message'>
            <p>
               The arts in the collections of the Modern
               Art Gallery all started from a spark of inspiration.
               Will these pieces inspire you? Visit and find out.
            </p>
            <div className='button-tag'>
                <button className='hero-button'>
                    <h3>
                      OUR LOCATION
                    </h3>
                </button>
                <div>
                  <img src={Rightarrow} alt="right-arrow"/>
                </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Landingpage