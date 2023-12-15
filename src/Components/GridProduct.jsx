import React from 'react'
import { DataCategory } from '../data/DataCategory'
import { Link } from 'react-router-dom'

const GridProducts = () => {
  return (
    <div className='mb-14 md:mb-10'>
      <p className='flex justify-center items-center p-2 text-xl'>Catégories</p>
      <section 
        className='
          p-5 grid grid-cols-2 grid-rows-3 gap-10
          md:p-8 md:grid-cols-5 md:grid-rows-1
        '>
        {DataCategory.map((item, index) => (
          <button 
            key={index}
            className="flex flex-col items-center cursor-pointer hover:scale-105 ease-in-out duration-200"
          >
            <Link to={item.link}>
              <img 
                src={item.img} 
                className='rounded-lg inline-block'
              />
              <p>{item.name}</p>
            </Link>
          </button>
          
        ))}
      </section>
    </div>
  )
}

export default GridProducts