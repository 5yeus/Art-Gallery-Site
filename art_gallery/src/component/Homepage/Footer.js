import React from 'react'
import Facebook from '../../assets/icon-facebook.svg'
import Instagram from '../../assets/icon-instagram.svg'
import Twitter from '../../assets/icon-twitter.svg'

const Footer = () => {
  return (
    <div className='bg-pewterBlack h-[244px] flex flex-col justify-center'>
      <div className='flex flex-row items-center justify-around'>
        <h1 className='px-5 text-white font-shoulder '>MODERN ART GALLERY</h1>
        <p className='px-5 text-white h-[84px] w-[430px] font-outfit'>
            The Modern Art Gallery is free to all visitors
            and open seven days a week from 8am to 9pm.
            Find us at 99 King Street, Newport, USA.
        </p>
        <div className='flex flex-row self-center gap-4'>
          <img src={Facebook} alt='' />
          <img src={Instagram} alt='' />
          <img src={Twitter} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Footer