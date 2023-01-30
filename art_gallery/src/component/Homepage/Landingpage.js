import React from 'react'
// import "./Homepage.css"
import Hero from "../../assets/desktop/image-hero@2x.jpg"
import Rightnav from "../../assets/icon-arrow-right.svg"



const Landingpage = () => {
  return (
    <div className='grid grid-cols-[450px_540px_1fr] h-[800px]'>
        <div className='bg-pewterBlack'></div>
        <img src={Hero} alt=''/>
        <div className='w-[350px] h-[296px] z-1 mt-[12rem] ml-[-5rem] flex flex-col justify-between'> 
          <h3 className='text-2xl not-italic font-light font-outfit text-ash '>
    
            The arts in the collection of the Modern Art Gallery 
            all started from a spark of inspiration.
            Will these pieces inspire you? Visit us and find out.
          </h3>
          <button className='w-[260px] h-[72px] flex flex-row  items-center '>
            <h3 className='py-5 px-2 self-stretch text-left font-shoulder text-xl non-italic tracking-[3.63636px] w-[204px] bg-pewterBlack text-white'>
              OUR LOCATION
            </h3> 
            <div className='self-stretch bg-goldBrown grow'>
              <img className='h-[24px] m-5 self-stretch' src={Rightnav} alt=''/>
            </div>
          </button> 
        </div>
    </div>
  )
}

export default Landingpage