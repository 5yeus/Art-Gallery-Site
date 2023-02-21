import React from 'react'
import Gridimg2 from "../../assets/desktop/image-grid-2@2x.jpg"
import Gridimg3 from "../../assets/desktop/image-grid-3@2x.jpg"
import Gridimg1 from "../../assets/desktop/image-grid-1@2x.jpg"

const Collections = () => {
  return (
    <div className='mobile:hidden h-[1510px] px-[13rem] py-[10.5rem] '>
      <div className='grid grid-rows-2 h-[1170px] w-[1113px]'> 
        <div className=' gap-x-[1rem] grid grid-cols-[1fr_635px] h-[400px]'>
          <div className='flex flex-col justify-center gap-[2rem]'>
            <h1 className='font-header font-black text-pewterBlack text-[60px] leading-[60px] h-[120px] w-[350px]'>YOUR DAY AT THE GALLERY</h1>
            <p className='font-outfit text-[22px] leading-[32px] text-ash font-light w-[350px] h-[128px]'>
              Wander through our distinct collections and 
              find new insights about our artists. 
              Dive into the details of their creative process.
            </p>
          </div>
          <div>
            <img src={Gridimg1} alt="" className='w-[635px]' />
          </div>
        </div>
        <div className='mt-[-9.3rem] gap-[2rem] grid grid-cols-[635px_445px] h-[720px]' >
            <div className='h-[720px]  '>
              <img src= {Gridimg2} alt="" />
            </div>
            <div className='grid grid-rows-2 h-[720px] gap-y-[1rem] '>
              <div>
                <img src={Gridimg3} alt="" />
              </div>
              <div className='flex flex-col justify-start items-start px-[3rem] py-[3rem] gap-[1rem] bg-pewterBlack'>
                <h1 className='text-white font-shoulder text-[60px] font-black leading-[60px] w-[320px] h-[120px]'>COME & BE INSPIRED</h1>
                <p className='text-white h-[96px] font-outfit font-light text-[22px] leading-[32px]'>
                  Wander through our distinct collections and 
                  find new insights about our artists. 
                  Dive into the details of their creative process.
                </p>
              </div>
            </div>
          </div>   
      </div>

    </div>
  )
}

export default Collections