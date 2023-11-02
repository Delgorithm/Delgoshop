import React from 'react'
import { AiOutlineShopping } from "react-icons/ai"


const AddToCart = () => {
  return (
    <button className='text-white bg-lightblack flex items-center justify-center w-full p-3 gap-3'>
        <AiOutlineShopping className='text-2xl'/>
        Ajouter au panier
    </button>
  )
}

export default AddToCart