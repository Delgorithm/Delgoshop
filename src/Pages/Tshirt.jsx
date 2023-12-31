import React, { useContext } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import CarrousselProduct from '../Components/CarrousselProduct'
import DataProduct from '../data/DataProduct'
import { ShopContext } from '../Contexts/ShopContextProvider'

const slides = [
  "/Images/men/tshirt/tshirt01.jpeg",
  "/Images/men/tshirt/tshirt02.jpeg",
  "/Images/men/tshirt/tshirt03.jpeg",
  "/Images/men/tshirt/tshirt04.jpeg",
  "/Images/men/tshirt/tshirt05.jpeg",
  "/Images/men/tshirt/tshirt06.jpeg",
  "/Images/men/tshirt/tshirt07.jpeg",
  "/Images/men/tshirt/tshirt08.jpeg",
  "/Images/men/tshirt/tshirt09.jpeg",
  "/Images/men/tshirt/tshirt11.jpeg",
  "/Images/men/tshirt/tshirt12.jpeg",
]

const Tshirt = () => {

  const { addToCart } = useContext(ShopContext);
  const handleAddToCart = () => {
    addToCart({
      id: 3,
      img: "/Images/men/tshirt/tshirt11.jpeg",
      name: "T-shirt",
      price: 19.99
    });
  }

  const tshirtData = DataProduct.filter(item => item.id === 6)[0];
  
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
        <p className='text-xl'>{tshirtData.name}</p>
        <div className='flex justify-end gap-6 items-center'>
          <p className='line-through text-zinc-400'>{tshirtData.old_price}</p>
          <p className='text-2xl text-red-500 font-bold'>{tshirtData.new_price}</p>
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

export default Tshirt