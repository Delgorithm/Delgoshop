import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from "react-router-dom"

const Category = () => {
  return (
    <div>
        <Navbar />
        <p className='h-screen bg-red-600 mt-24'>Categories</p>
        <Outlet />
        <Footer />
    </div>
  )
}

export default Category