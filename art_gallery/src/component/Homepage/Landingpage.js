import React from 'react'
// import "./Homepage.css"
import Hero from "../../assets/desktop/image-hero@2x.jpg"
import Button from "./Button"
// import Rightnav from "../../assets/icon-arrow-right.svg"


const Landingpage = () => {
  
  return (
    <div className='mobile:w-full mobile:flex mobile:flex-col mobile:children:border-solid mobile:children:border-pink-900 mobile:children:border-[3px] grid grid-cols-[450px_540px_1fr] h-[800px]'>
        <div className='mobile:hidden bg-pewterBlack'></div>
        <img src={Hero} className='' alt=''/>
        <h1 className='mobile:relative mobile:text-black left-[10.5rem] top-[10rem] absolute text-white font-header font-extrabold text-[6rem] leading-[5.5rem]'>MODERN <br/>
            ART GALLERY
        </h1>
        <div className=' w-[350px] h-[296px] z-1 mt-[12rem] ml-[-5rem] flex flex-col justify-between'> 
          <h3 className='not-italic font-light text-[22px] leading-[32px] font-outfit text-ash '>
    
            The arts in the collection of the Modern Art Gallery 
            all started from a spark of inspiration.
            Will these pieces inspire you? Visit us and find out.
          </h3>
          <Button imageSource={require('../../assets/icon-arrow-right.svg')} flexDirection={'flex-row'}/>
        </div>
    </div>
  )
}

export default Landingpage