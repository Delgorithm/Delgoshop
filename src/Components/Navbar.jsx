import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Button from './Button';
import { Link } from 'react-router-dom';

const   Navbar = () => {
    let menuLinks = [
        { name: "Accueil", link:"/" },
        { name: "Panier", link:"/cart" },
        { name: "Catégorie", link:"/category" },
        { name: "Contact", link:"/contact" }
    ];

    let navLinks = [
        { name: "Delgoshop", link:"/"},
        { name: <IoCartOutline />, link:"/cart"},
    ]

    let [open, setOpen] = useState(true);

    return (
        <div className='bg-lightgray p-4 w-full fixed top-0 left-0 z-50'>
            <section className='flex justify-between items-center z-10'>
                <div onClick={() => setOpen(!open)}>
                    {open ? (
                        <RiMenu2Fill className='text-3xl cursor-pointer z-50' />
                    ) : (
                        <AiOutlineClose className='text-3xl cursor-pointer' />
                    )}
                </div>
                {navLinks.map((link) => (
                    <li key={link.name} className='flex text-3xl'>
                        <Link to={link.link}>{link.name}</Link>
                    </li>
                ))}
            </section>

            {!open && (
                <ul className={'flex flex-col items-center absolute bg-lightgray pb-10 pt-12 left-0 w-full h-screen opacity-100 z-50'}>
                        {menuLinks.map((link) => (
                            <li key={link.name} className='flex flex-col justify-center mt-10 z-50'>
                                <Link to={link.link} className='text-xl z-50'>{link.name}</Link>
                            </li>
                        ))}
                    <div className='flex flex-col w-1/2 mt-8 pt-4 gap-6'>
                        <Button>Se connecter</Button>
                        <Button>S'inscrire</Button>
                    </div>
                </ul>
            )}
        </div>
    );
};

export default Navbar