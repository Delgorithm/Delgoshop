import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CarrousselProduct from '../Components/CarrousselProduct'
import DataProduct from '../data/DataProduct'
import { ShopContext } from '../Contexts/ShopContextProvider'

const slides = [
  "/Images/men/pantalon/pantalon01.jpeg",
  "/Images/men/pantalon/pantalon02.jpeg",
  "/Images/men/pantalon/pantalon03.jpeg",
  "/Images/men/pantalon/pantalon04.jpeg",
  "/Images/men/pantalon/pantalon05.jpeg",
  "/Images/men/pantalon/pantalon06.jpeg",
]

const Pantalon = () => {

  const { addToCart } = useContext(ShopContext);
  const handleAddToCart = () => {
    addToCart({
      id: 4,
      img: "/Images/men/pantalon/pantalon01.jpeg",
      name: "Pantalon costume",
      price: 39.99
    });
  }

  const pantalonData = DataProduct.filter(item => item.id === 14)[0];

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
        <p className='text-lg'>{pantalonData.name}</p>
        <div className='flex justify-end gap-6 items-center'>
          <p className='line-through text-zinc-400'>{pantalonData.old_price}</p>
          <p className='text-2xl text-red-500 font-bold'>{pantalonData.new_price}</p>
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

export default Pantalon