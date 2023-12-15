import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useCart } from '../Contexts/ShopContextProvider'
import { loadStripe } from '@stripe/stripe-js'

const Cart = () => {

  const apiKeyStripe = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

  const { cart, incrementQuantity, decrementQuantity } = useCart();

  // Total price
  const totalAmount = cart.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0).toFixed(2);

  const makePayment = async () => {
    const stripe = await loadStripe(apiKeyStripe);

    const body = {
      products: finalCart
    }
  }

  return (
    <div>
        <Navbar />
        <div className='mt-20'></div>
        {cart.map((product, index) => (
          <div key={index} className='m-4 flex items-center justify-between'>
            <img src={product.img} alt="" className='w-20' />
            <p className='text-xs'>{product.name} - {product.price}€</p>
            <div className='flex gap-5 items-center'>
              <button 
                className='p-2 bg-slate-400 text-xl'
                onClick={() => decrementQuantity(product.id)}>-</button>
              <button
                className='p-2 bg-red-400 text-xl'
                onClick={() => incrementQuantity(product.id)}>+</button>
              <p className='p-2.5 bg-blue-400'>{product.quantity}</p>
            </div>
          </div>
        ))}
        <div className='flex justify-around text-4xl items-end mb-14'>
          <p>Total :</p>
          <p>{totalAmount}€</p>
        </div>
        <div className='flex justify-center items-center'>
            <button 
              className='p-4 bg-lightblack text-white hover:bg-white hover:text-black ease-in-out duration-200 border-2 border-black rounded-lg active:opacity-20'>
              Commander
            </button>
        </div>
        <Footer />
    </div>
  )
}

export default Cart