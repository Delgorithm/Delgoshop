import React from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { SlHome } from "react-icons/sl";


const Footer = () => {

  let footerLinks = [
    { icon: <SlHome />, link:"/"},
    { icon: <MdOutlineFavoriteBorder />, link:"/bookmark"},
    { icon: <IoPersonOutline />, link:"/account"}
  ]

  return (
    <div className='bg-lightgray p-6 w-full fixed bottom-0 left-0 flex justify-around'>
      {footerLinks.map((link) => (
        <li key={link.icon} className='flex'>
          <a href={link.link} className='text-3xl'>{link.icon}</a>
        </li>
      ))}
    </div>
  )
}

export default Footer