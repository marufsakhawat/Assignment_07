import React from 'react'
import { image } from '../assets/assets'

const ProgressResolve = ({ selectedCard = [], resolveCard = [] }) => {
  const inProgressCount = selectedCard.length; // selectedCard = in-progress items
  const resolvedCount = resolveCard.length;

  return (
    
      <div className="container mx-auto">
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* In-Progress */}
          <div className="w-full md:w-[320px] lg:w-[100%] h-[200px] rounded-lg shadow-md relative overflow-hidden progress-card">
            <img src={image.v1} alt="wave" className="absolute left-0 top-0 h-full object-cover" />
            <img src={image.v2} alt="wave" className="absolute right-0 top-0 h-full object-cover" />
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
              <p className="text-xl font-medium">In-Progress</p>
              <h3 className="text-5xl font-bold">{inProgressCount}</h3>
            </div>
          </div>

          {/* Resolved */}
          <div className="w-full md:w-[320px] lg:w-[100%] h-[200px] rounded-lg shadow-md relative overflow-hidden bg-gradient-to-r from-[#632EE3] to-[#9F62F2] resolve-card">
            <img src={image.v1} alt="wave" className="absolute left-0 top-0 h-full object-cover" />
            <img src={image.v2} alt="wave" className="absolute right-0 top-0 h-full object-cover" />
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
              <p className="text-xl font-medium">Resolved</p>
              <h3 className="text-5xl font-bold">{resolvedCount}</h3>
            </div>
          </div>
        </div>    
      </div>
      
  )
}

export default ProgressResolve