import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useCart } from '../Contexts/ShopContextProvider'


const Cart = () => {

  const { cart } = useCart();

  return (
    <div>
        <Navbar />
        <p className='mt-16'>Votre panier</p>
        {cart.map((product, index) => (
          <div key={index} className='m-4 flex items-center justify-around'>
            <img src={product.img} alt="" className='w-24' />
            <p>{product.name} - {product.price}</p>
          </div>
        ))}
        <Footer />
    </div>
  )
}

export default Cart