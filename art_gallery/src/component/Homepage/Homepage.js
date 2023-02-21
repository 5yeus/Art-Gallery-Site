import React from 'react'

import Landingpage from "./Landingpage"
import Collections from "./Collections"
import Footer from "./Footer"


const Homepage = () => {
  return (
    <div className='bg-white '>
        <Landingpage />
        <Collections />
        <Footer bgColor={'bg-pewterBlack'} txColor={'text-white'}/>
    </div>
  )
}

export default Homepage