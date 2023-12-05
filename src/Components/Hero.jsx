import React from 'react'
import Button from './Button'

const Hero = () => {

  return (
    <div className='h-screen z-0'>
        <div className='mt-12 h-96'>
            <picture>
                <img src="Images/men/pull/mpull01.jpeg" alt="A beige pull from the store" className='relative -z-10'/>
            </picture>
            <div className='absolute top-[55dvh] w-full flex justify-center -z-10 '>
                <Button>Voir les nouveautés</Button>
            </div>
        </div>
    </div>
  )
}

export default Hero