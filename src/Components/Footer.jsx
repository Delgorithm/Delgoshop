import React from 'react'
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { SlHome } from "react-icons/sl";


const Footer = () => {

  let footerLinks = [
    { name: <SlHome />, link:"/"},
    { name: <MdOutlineFavoriteBorder />, link:"/"},
    { name: <IoPersonOutline />, link:"/"}
  ]

  return (
    <div className='bg-lightgray p-6 w-full fixed bottom-0 left-0 flex justify-around'>
      {footerLinks.map((link) => (
        <li key={link.name} className='flex'>
          <a href={link.link} className='text-3xl'>{link.name}</a>
        </li>
      ))}
    </div>
  )
}

export default Footer