import React, { useContext } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import CarrousselProduct from '../Components/CarrousselProduct'
import DataProduct from '../data/DataProduct'
import { ShopContext } from '../Contexts/ShopContextProvider'

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

  const { addToCart } = useContext(ShopContext);
  const handleAddToCart = () => {
    addToCart({ 
        id: 1,
        img: "/Images/men/chemise/chemise03.jpeg",
        name: 'Chemise classique', 
        price: 49.99 });
  }

  const chemiseData = DataProduct.filter(item => item.id === 15)[0];

  return (
    <div>
      <Navbar />
      <div className='mt-16'></div>
      <section className='
        max-w-lg
      '>
        <CarrousselProduct>
          {slides.map((item, index) => (
            <img key={index} src={item} alt="" />
          ))}
        </CarrousselProduct>
      </section>
      <section className='flex justify-around pt-4 items-center'>
        <p className='text-xl'>{chemiseData.name}</p>
        <div className='flex justify-end gap-6 items-center'>
          <p className='line-through text-zinc-400'>{chemiseData.old_price}</p>
          <p className='text-2xl text-red-500 font-bold'>{chemiseData.new_price}</p>
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

export default Chemise