import React from 'react'
import { AiOutlineShopping } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const navigate = useNavigate();

  return (
    <button className='text-2xl p-2' onClick={() => navigate('/cart')}>
        <AiOutlineShopping/>
    </button>
  )
}

export default Cart