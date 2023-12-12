import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import CarrousselProduct from '../Components/CarrousselProduct'
import DataProduct from '../data/DataProduct'
import { ShopContext } from '../Contexts/ShopContextProvider'

const slides = [
  "/Images/men/veste/vestes01.jpeg",
  "/Images/men/veste/vestes02.jpeg",
  "/Images/men/veste/vestes03.jpeg",
  "/Images/men/veste/vestes04.jpeg",
  "/Images/men/veste/vestes05.jpeg",
  "/Images/men/veste/vestes06.jpeg",
  "/Images/men/veste/vestes07.jpeg",
  "/Images/men/veste/vestes08.jpeg",
  "/Images/men/veste/vestes09.jpeg",
  "/Images/men/veste/vestes10.jpeg",
]

const Surchemise = () => {

  const { addToCart } = useContext(ShopContext);
  const handleAddToCart = () => {
    addToCart({
      id: 2,
      img: "/Images/men/veste/vestes05.jpeg",
      name: "Veste",
      price: 69.99 });
    }

    const vesteData = DataProduct.filter(item => item.id === 1)[0];

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
        <p className='text-xl'>{vesteData.name}</p>
        <div className='flex justify-end gap-6 items-center'>
          <p className='line-through text-zinc-400'>{vesteData.old_price}</p>
          <p className='text-2xl text-red-500 font-bold'>{vesteData.new_price}</p>
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

export default Surchemise