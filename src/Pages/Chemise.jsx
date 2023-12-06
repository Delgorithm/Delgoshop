import React from 'react'

import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import CarrousselProduct from '../Components/CarrousselProduct'

const slides = [
  "/Images/men/chemise/chemise01.jpeg",
  "/Images/men/chemise/chemise02.jpeg",
  "/Images/men/chemise/chemise03.jpeg",
  "/Images/men/chemise/chemise04.jpeg",
  "/Images/men/chemise/chemise05.jpeg",
  "/Images/men/chemise/chemise06.jpeg",
  "/Images/men/chemise/chemise07.jpeg",
  "/Images/men/chemise/chemise08.jpeg",
]


const Chemise = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-16'></div>
      <section className='max-w-lg'>
        <CarrousselProduct>
          {slides.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </CarrousselProduct>
      </section>
      <Footer />
    </div>
  )
}

export default Chemise