import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {

    let myLinks = [
        { name: "Accueil", link:"/" },
        { name: "Panier", link:"/" },
        { name: "Catégorie", link:"/" },
        { name: "Contact", link:"/" }
    ];

    let [open, setOpen] = useState(false);

    return (
        <div className='bg-lightgray p-5 w-full fixed top-0 left-0'>
            <section className='flex justify-between items-center'>
                <div onClick={() => setOpen(!open)}>
                    { open ? (
                        <RiMenu2Fill className='text-3xl cursor-pointer' />
                    ) : (
                        <AiOutlineClose className='text-3xl cursor-pointer' />
                    )}
                </div>
                <p className='text-2xl'>Delgoshop</p>
                <IoCartOutline className='text-3xl cursor-pointer' />
            </section>

            <ul className={`flex flex-col justify-center items-center absolute bg-lightgray pb-10 z-[-1] left-0 w-full ${!open ? 'top-20 opacity-100' : 'top-[-40px]'} opacity-0`}>
                {
                    myLinks.map((link) => (
                        <li key={link.name} className='flex flex-col justify-center mt-4'>
                            <a href={link.link} className='text-xl'>{link.name}</a>
                        </li>
                    ))
                }
                <div className='flex flex-col w-1/2 mt-4 pt-4 gap-6'>
                    <Button>
                        Se connecter
                    </Button>
                    <Button>
                        S'inscrire
                    </Button>
                </div>
            </ul>
        </div>
    );
};

export default Navbar