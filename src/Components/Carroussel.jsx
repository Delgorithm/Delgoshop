import React from 'react'
import { DataImgCarrousel } from '../data/DataImgCarrousel'

const Carroussel = () => {
  return (
    <div className='h-64'>
      <p className='flex justify-center items-center p-2 text-xl mt-2'>Produits en vedettes</p>
      <div className='relative flex items-center overflow-x-scroll whitespace-nowrap scroll-smooth overflow-hidden'>
          <div id="slider">
              {DataImgCarrousel.map((item) => (
                  <img 
                  src={item.img} 
                  alt='' 
                  className='w-40 p-2 inline-block cursor-pointer hover:scale-105 ease-in-out duration-200'
                  />
              ))}
          </div>
      </div>
    </div>
  )
}

export default Carroussel