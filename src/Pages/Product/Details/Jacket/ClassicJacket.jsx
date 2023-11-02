import React, { useState } from 'react'
import Header from '../../../../Layout/Header/Header'
import CarouselClassicJacket from '../../../../Components/Carousel/CarouselClassicJacket'
import Footer from '../../../../Layout/Footer/Footer'
import { jacketProductPage } from '../../../../data/DataText'
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6"
import AddToCart from '../../../../Components/Forms/Button/Addtocart/AddToCart'


const ClassicJacket = () => {

  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    console.log(item);
  }

  const jacketProduct = jacketProductPage.find(item => item.id === 1);

  return (
    <div className='full'>
      <Header />
      <CarouselClassicJacket />
      <div className='p-3'>
        <p className='font-bold uppercase text-xl'>{jacketProduct.title}</p>
        <div className='flex justify-between pt-2'>
          <div className='flex gap-4 items-center'>
            <p className='font-bold text-lg'>{jacketProduct.price}</p>
            <p className='text-sm font-bold text-red-400 cross line-through'>{jacketProduct.oldprice}</p>
          </div>
          <div className='flex items-center gap-2'>
            <div className='flex'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStarHalfStroke />
            </div>
            <p>{jacketProduct.review}</p>
          </div>
        </div>
        <div className='h-2'/>
        <div>
          <p>{jacketProduct.color}</p>
          <picture className='flex gap-4 py-2'>
            <button>
              <img src="/Images/men/veste/vestecolor02.jpeg" alt="Brown color" className='w-10'/>
            </button>
            <button>
              <img src="/Images/men/veste/color01.jpeg" alt="Brown color" className='w-10' />
            </button>
          </picture>
        </div>
        <p>{jacketProduct.size}</p>
        <div className='flex justify-around p-2 text-center'>
          <button className='w-8 h-8 bg-lightblack text-white flex justify-center items-center'>XS</button>
          <button className='w-8 h-8 bg-lightblack text-white flex justify-center items-center'>S</button>
          <button className='w-8 h-8 bg-lightblack text-white flex justify-center items-center'>M</button>
          <button className='w-8 h-8 bg-lightblack text-white flex justify-center items-center'>L</button>
          <button className='w-8 h-8 bg-lightblack text-white flex justify-center items-center'>XL</button>
        </div>
        <div className='h-4'></div>
        <AddToCart />
      </div>
      <Footer />
    </div>
  )
}

export default ClassicJacket