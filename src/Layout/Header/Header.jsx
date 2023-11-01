import React from 'react'
import { headerText } from '../../data/DataText'
import Cart from '../../Components/Forms/Button/Cart'
import HamburgerMenu from '../../Components/Forms/Button/HamburgerMenu/HamburgerMenu'
import { useNavigate } from 'react-router-dom'


const Header = () => {

  const navigate = useNavigate();

  return (
    <div className='relative'>
      <div className='bg-lightwhite p-3 fixed w-full z-50'>
          <div className='flex justify-between items-center'>

              <HamburgerMenu />

              {headerText.map((item, id) => (
                  <div key={item.id} className='text-xl'>
                      <button onClick={() => navigate('/')}>{item.title}</button>
                  </div>
              ))}
        
              <Cart />
          </div>
      </div>
      <div className='h-16'></div>
    </div>
  )
}

export default Header