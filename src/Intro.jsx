import React from 'react'
import { useNavigate } from 'react-router-dom'
const Intro = () => {
    const navigate=useNavigate()
  return (
    <div>
     
    <div onClick={()=>navigate('/predict')} className="bg-black text-white w-fit p-2 px-3 cursor-pointer">predict</div>
  </div>
  )
}

export default Intro
