import React from 'react'

import Landingpage from "./Landingpage"
import Collections from "./Collections"
import Footer from "./Footer"


const Homepage = () => {
  return (
    <div className='bg-white '>
        <Landingpage />
        <Collections />
        <Footer />
    </div>
  )
}

export default Homepage