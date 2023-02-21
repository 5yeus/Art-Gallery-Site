import React from 'react'
import Locationimg from "../../assets/desktop/image-map@2x.png"
import Footer from "../Homepage/Footer"
import Button from "../Homepage/Button"
import { Link } from 'react-router-dom'
// import Leftnav from "../../assets/icon-arrow-left.svg"

const Location = () => {
  return (
    <div className='w-full min-h-screen p-0 m-0 box-border grid grid-rows-[600px_548px]'>
        <div className=''>
            <Link to="/">
              <Button imageSource={require('../../assets/icon-arrow-left.svg')} flexDirection={'flex-row-reverse'} zIndex={'z-1'} positionAbsolute={'absolute'} positionLeft={'left-[10.2rem]'}/>
            </Link>
            <img src={Locationimg} alt=""/>
        </div>
        <div className='flex flex-row items-center justify-center bg-pewterBlack '>
          <div className='flex flex-row justify-center gap-[12rem] items-center    children:basis-1/2 children:mt-[-5rem] text-white'>
            <h1 className='self-start font-shoulder text-[70px] leading-[70px] font-extrabold w-[350px] h-[140px]'>
              OUR <br/> LOCATION
            </h1>
            <div className='flex flex-col gap-[2rem]'>
              <h3 className='text-goldBrown font-shoulder text-[36px] leading-[36px] font-black'>99 KING STREET</h3>
              <div className='font-outfit text-[22px] leading-[32px]'>
                <p>Newport</p>
                <p>Rl 02840</p>
                <p>United States of America</p>
              </div>
              <p className='font-outfit text-[22px] leading-[32px] w-[540px] h-[128px]'>
                Our newly opened gallery is located near the Edward
                King House on 99 King Street, the Modern Art Gallery
                is free to all visitors and open seven days a week
                from 8am to 9pm.
              </p>
            </div>
          </div>
        </div>
        <Footer bgColor={'bg-goldBrown'} txColor={'text-pewterBlack'}  />
    </div>
  )
}

export default Location