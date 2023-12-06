import React from 'react'
import { DataCategory } from '../data/DataCategory'

const GridProducts = () => {
  return (
    <div className=''>
      <p className='flex justify-center items-center p-2 text-xl'>Catégories</p>
      <section className='p-5 grid grid-cols-2 grid-rows-3 gap-10'>
        {DataCategory.map((item, index) => (
          <div 
            key={index}
            className="flex flex-col items-center"
          >
            <img 
              src={item.img} 
              alt={`Catégorie : ${item.name}`}
              className='rounded-lg inline-block cursor-pointer hover:scale-105 ease-in-out duration-200'
            />
            <p>{item.name}</p>
          </div>
          
        ))}
      </section>
    </div>
  )
}

export default GridProducts