import React from 'react'
import Button from './Button'

const Hero = () => {

  return (
    <div className='h-fit-content z-0 mt-14'>
        <div className='relative'>
            <div className='
                absolute top-[45dvh] w-full flex justify-center -z-1
            '>
                <Button>Voir les nouveautés</Button>
            </div>
            <picture>
                <img 
                  src="Images/men/pull/mpull01.jpeg" 
                  alt="A beige pull from the store" 
                  className='
                    relative -z-20 rounded-b-3xl
                    md:flex md:justify-center
                '/>
            </picture>
        </div>
    </div>
  )
}

export default Hero