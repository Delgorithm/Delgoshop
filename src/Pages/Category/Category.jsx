import React from 'react'
import Accessories from '../Product/Accessories'
import Jacket from '../Product/jacket'
import Tshirts from '../Product/tshirts'

const Category = () => {
  return (
    <div>
        Category
        <p>Les différentes catégories :</p>
        <Accessories />
        <Jacket />
        <Tshirts />
    </div>
  )
}

export default Category 