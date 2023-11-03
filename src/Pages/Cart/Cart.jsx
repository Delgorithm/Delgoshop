import React from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import { useCart } from '../../Components/Context/CartContext'

const Cart = () => {

  const { cart } = useCart();

  return (
    <div>
        <Header />
        <p className='text-2xl'>Cart</p>
        <div>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} & {item.new_price}</li>
          ))}
        </ul>
        </div>
        <Footer />
    </div>
  )
}

export default Cart