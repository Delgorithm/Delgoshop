import React from 'react'

const Button = (props) => {
  return (
    <button className='py-2 px-6 bg-white rounded hover:opacity-60 duration-500'>
        {props.children}
    </button>
  )
}

export default Button