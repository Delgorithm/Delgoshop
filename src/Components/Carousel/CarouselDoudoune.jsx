import React from 'react'
import Carousel from './Carousel';

const CarouselDoudoune = () => {

    const slides = [
        "/Images/men/veste/vestes05.jpeg",
        "/Images/men/veste/vestes06.jpeg",
        "/Images/men/veste/vestes07.jpeg",
        "/Images/men/veste/vestes08.jpeg",
        "/Images/men/veste/vestes09.jpeg",
        "/Images/men/veste/vestes10.jpeg",
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