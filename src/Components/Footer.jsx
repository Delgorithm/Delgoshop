import React from 'react';
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { SlHome } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Footer = () => {
  let footerLinks = [
    { icon: <SlHome />, link:"/"},
    { icon: <MdOutlineFavoriteBorder />, link:"/bookmark"},
    { icon: <IoPersonOutline />, link:"/account"}
  ];

  return (
    <div className='bg-lightgray p-3 w-full sticky bottom-0 left-0 flex justify-around'>
      {footerLinks.map((link, index) => (
        <li key={index} className='flex'>
          <Link to={link.link} className='text-3xl'>{link.icon}</Link>
        </li>
      ))}
    </div>
  );
};

export default Footer;
