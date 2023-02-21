import React from 'react'
import { Link } from'react-router-dom'

const Button = (props) => {
  return (
    <button className={`w-[260px] h-[72px] flex ${props.flexDirection} ${props.zIndex} items-center ${props.positionAbsolute} ${props.positionLeft}`}>
        <h3 className='hover:bg-goldBrown hover:duration-200 py-5 px-4 self-stretch  font-shoulder text-2xl font-extrabold non-italic tracking-[3.63636px] w-[204px] bg-pewterBlack text-white'>
            OUR LOCATION
        </h3>

        <div className='self-stretch bg-goldBrown grow hover:bg-pewterBlack hover:duration-200'>
            <Link to="/Location">
                <img className='h-[24px] m-5 self-stretch' source={props.imageSource} alt=''/>
            </Link>
        </div>
    </button> 
    
  )
}

export default Button