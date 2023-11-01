import React from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Jacket = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className='p-3  h-screen'>
        <p>test</p>
      </div>
      <Footer />
    </div>
  )
}

export default Jacket