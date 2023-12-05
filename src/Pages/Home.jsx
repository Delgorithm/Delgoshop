import React from 'react'
import DataProduct from '../data/DataProduct'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Carroussel from '../Components/Carroussel'
import GridProducts from '../Components/GridProduct'

const Home = () => {
  return (
    <div>
      <Header />
      <Carroussel />
      <GridProducts />
      <Footer />
    </div>
  )
}

export default Home