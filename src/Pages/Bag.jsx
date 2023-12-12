import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CarrousselProduct from '../Components/CarrousselProduct'
import DataProduct from '../data/DataProduct'
import { ShopContext } from '../Contexts/ShopContextProvider'

const slides = [
  "/Images/accessories/sac01.jpeg",
  "/Images/accessories/sac02.jpeg",
  "/Images/accessories/sac03.jpeg",
  "/Images/accessories/sac04.jpeg",
  "/Images/accessories/sac05.jpeg",
  "/Images/accessories/sac06.jpeg",
  "/Images/accessories/sac07.jpeg",
  "/Images/accessories/sac08.jpeg",
  "/Images/accessories/sac09.jpeg",
]

const Bag = () => {

  const { addToCart } = useContext(ShopContext);
  const handleAddToCart = () => {
    addToCart({
      id: 5,
      img: "/Images/accessories/sac01.jpeg",
      name: "Sac à dos",
      price: 99.99
    });
  }

  const sacData = DataProduct.filter(item => item.id === 16)[0];

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
      <section className='flex justify-around pt-4 items-center'>
        <p className='text-xl'>{sacData.name}</p>
        <div className='flex justify-end gap-6 items-center'>
          <p className='text-2xl'>{sacData.price}</p>
        </div>
      </section>
      <div className='flex justify-center items-center'>
        <button 
          onClick={handleAddToCart}
          className='bg-black text-white w-48 h-12 rounded-sm mt-4 active:translate-y-1 active:opacity-50 active:bg-white active:text-black hover:opacity-80'
        >
          Ajouter au panier
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default Bag