import React, { useContext } from 'react'
import { ShopContext } from '../Contexts/ShopContextProvider'

const CompteurCart = () => {

  const { cart } = useContext(ShopContext)

  const totalQuantity = cart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  return (
    <div className='p-1 bg-red-500 rounded-full text-sm'>
        {totalQuantity}
    </div>
  )
}

export default CompteurCart