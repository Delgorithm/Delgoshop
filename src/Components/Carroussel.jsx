import React from 'react'
import { DataImgCarrousel } from '../data/DataImgCarrousel'

const Carroussel = () => {
  return (
    <div className='h-64 bg-blue-200'>
        <div className='relative flex items-center overflow-x-scroll whitespace-nowrap scroll-smooth overflow-hidden'>
            <div id="slider" className=''>
                {DataImgCarrousel.map((item) => (
                    <img 
                    src={item.img} 
                    alt='' 
                    className='w-40 p-4 inline-block cursor-pointer hover:scale-105 ease-in-out duration-200'
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Carroussel