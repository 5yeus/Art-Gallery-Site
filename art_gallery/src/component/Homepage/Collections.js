import React from 'react'
import Gridimg2 from "../../assets/desktop/image-grid-2@2x.jpg"
import Gridimg3 from "../../assets/desktop/image-grid-3.jpg"

const Collections = () => {
  return (
    <div className='h-[1510px] px-[10rem] py-[10.5rem] '>
      <div className='grid grid-rows-2 '> 
        <div className=' gap-x-[1rem] grid grid-cols-[1fr_2fr] h-[400px]'>
          <div className='p-3 border-[#6b9] border-solid border-[2px]'>
            <h1 className='font-shoulder'>YOUR DAY AT THE GALLERY</h1>
            <p>
              Wander through our distinct collections and 
              find new insights about our artists. 
              Dive into the details of their creative process.
            </p>
          </div>
          <div className='p-3 border-[#6b9] border-solid border-[2px]'>
            
          </div>
        </div>
        <div className='mt-[-9.3rem] gap-[3rem] grid grid-cols-2 h-[720px]' >
          <div className='p-3 border-[#6b9] border-solid border-[2px] row-span-2 '>
            <img src= {Gridimg2} alt="" className='grow'/>
          </div>
          <div className='p-3 border-[#6b9] border-solid border-[2px] h-[313px]'>
            <img src={Gridimg3} alt="" className='grow'/>
          </div>
          <div className='p-3 border-[#6b9] border-solid border-[2px] h-[377px] bg-pewterBlack flex flex-col justify-center'>
            <h1 className='text-white font-shoulder'>COME & BE INSPIRED</h1>
            <p className='text-white'>
              Wander through our distinct collections and 
              find new insights about our artists. 
              Dive into the details of their creative process.
            </p>
            
          </div>
        </div>
               
      </div>

    </div>
  )
}

export default Collections