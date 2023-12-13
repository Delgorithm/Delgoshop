import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useCart } from '../Contexts/ShopContextProvider'


const Cart = () => {

  const { cart, incrementQuantity, decrementQuantity } = useCart();

  // Total price
  const totalAmount = cart.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0).toFixed(2);

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
        <div className='flex justify-around text-4xl items-end mb-20'>
          <p>Total :</p>
          <p>{totalAmount}€</p>
        </div>
        <Footer />
    </div>
  )
}

export default Cart