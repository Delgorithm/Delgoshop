import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {

    let menuLinks = [
        { name: "Accueil", link:"/" },
        { name: "Panier", link:"/" },
        { name: "Catégorie", link:"/" },
        { name: "Contact", link:"/" }
    ];

    let navLinks = [
        { name: "Delgoshop", link:"/"},
        { name: <IoCartOutline />, link:"/"},
    ]

    let [open, setOpen] = useState(true);

    return (
        <div className='bg-lightgray p-5 w-full fixed top-0 left-0'>
            <section className='flex justify-between items-center'>
                <div onClick={() => setOpen(!open)}>
                    {open ? (
                        <RiMenu2Fill className='text-3xl cursor-pointer' />
                    ) : (
                        <AiOutlineClose className='text-3xl cursor-pointer' />
                    )}
                </div>
                {navLinks.map((link) => (
                    <li key={link.name} className='flex text-3xl'>
                        <a href={link.link}>{link.name}</a>
                    </li>
                ))}
            </section>

            {!open && (
                <ul className={'flex flex-col items-center absolute bg-lightgray pb-10 pt-12 left-0 w-full h-screen opacity-100'}>
                        {menuLinks.map((link) => (
                            <li key={link.name} className='flex flex-col justify-center mt-10'>
                                <a href={link.link} className='text-xl'>{link.name}</a>
                            </li>
                        ))}
                    <div className='flex flex-col w-1/2 mt-12 pt-4 gap-6'>
                        <Button>
                            Se connecter
                        </Button>
                        <Button>
                            S'inscrire
                        </Button>
                    </div>
                </ul>
            )}
        </div>
    );
};

export default Navbar