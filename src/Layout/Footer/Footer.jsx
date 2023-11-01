import React from 'react'
import { footerText } from '../../data/DataText'

const Footer = () => {
  return (
    <div className='bg-lightwhite fixed w-full bottom-0 p-4'>
        <div className='flex'>
            {footerText.map((item, index) => (
                <div key={item.id} className='flex flex-col items-center justify-around w-full gap-1'>
                    <p className='text-xl'>{item.icon}</p>
                    <p className='text-xs'>{item.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Footer