import React from 'react'
import Carousel from './Carousel';

const CarouselDoudoune = () => {

    const slides = [
        "/Images/men/veste/doudoune01.jpeg",
        "/Images/men/veste/doudoune02.jpeg",
    ];

  return (
    <div className='max-w-lg'>
        <Carousel>
            {slides.map((s, index) => (
                <img src={s} key={index} />
            ))}
        </Carousel>
    </div>
  )
}

export default CarouselDoudoune