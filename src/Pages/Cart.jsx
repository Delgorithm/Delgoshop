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
          <div key={index} className='m-4 flex items-center justify-around'>
            <img src={product.img} alt="" className='w-24' />
            <p>{product.name} - {product.price}</p>
            <div className='flex gap-5 items-center'>
              <button 
                className='p-2 bg-slate-400 text-2xl'
                onClick={() => decrementQuantity(product.id)}>-</button>
              <button
                className='p-2 bg-red-400 text-2xl'
                onClick={() => incrementQuantity(product.id)}>+</button>
              <p className='p-2 bg-blue-400'>{product.quantity}</p>
            </div>
          </div>
        ))}
        <div className='flex justify-around text-4xl items-end'>
          <p>Total :</p>
          <p>{totalAmount}€</p>
        </div>
        <Footer />
    </div>
  )
}

export default Cart