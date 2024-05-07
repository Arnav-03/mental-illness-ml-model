import React from 'react'
import { useNavigate } from 'react-router-dom'
import m1 from './assets/6.jpg'
import './index.css'
const Intro = () => {
  const navigate = useNavigate()
  // Define the inline style for the background image
  const backgroundStyle = {
    backgroundImage: `url(${m1})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', // Prevent image from repeating  
    height: '100vh', // Set height to fill the entire viewport

  };

  return (
    <div className='bg-[#fdf5f5] flex flex-col lg:flex-row items-center'/* bg-[#aaa7a7] */ style={backgroundStyle}>
      <div className=" text-end lg:text-start alfa-slab-one text-5xl lg:text-[120px]  w-full flex  text-[#2b1414] justify-end lg:justify-start">
        <div className="flex m-4  ">Mental <br /> Illness</div>


      </div>
      <div className="flex text-end lg:m-4 poiret-one-regular  text-2xl lg:text-7xl">
        Prioritize Your Mental Wellness
      </div>
      <div onClick={() => { navigate('/predict') }} className="fixed bottom-[25px] poetsen-one-regular text-2xl text-[#2c1919] border-[2px] border-[#2c1919]   right-[25px] p-2 rounded-xl hover:bg-black hover:text-white cursor-pointer ">
        Predict Now !
      </div>
    </div>

  );
}

export default Intro
