import React from 'react'
import { heroText } from '../../data/DataText'
import { useNavigate } from 'react-router-dom';

const Hero = () => {

    const heroTextNews = heroText.find(item => item.id === 1);

    const navigate = useNavigate();

  return (
    <div className='h-full'>
        <section className=''>
            <picture>
                <img 
                    src="src/assets/Images/men/pull/mpull01.jpeg" 
                    alt="A men wearing a pull" 
                />
            </picture>
            <div className='bg-lightwhite p-5 ml-3 w-11/12 rounded-xl shadow-lg text-center -translate-y-7'>
                <p className='text-xl'>{heroTextNews.title}</p>
                <a href="#" className='text-xs underline'>{heroTextNews.subtitle}</a>
            </div>
        </section>
        <p className='pl-3 pb-1 text-xl'>Category</p>
        <div className='h-full overflow-x-auto p-3'>
            <div className='flex gap-5 w-max '>

                <button className='flex flex-col items-center gap-1' onClick={() => navigate('/jacket')}>
                    <picture>
                        <img src="src/assets/Images/men/veste/vestes03.jpeg" alt="Catégorie vestes" className='transition duration-150 ease-in-out w-28 rounded-xl hover:scale-105' />
                    </picture>
                    <p>Vestes</p>
                </button>

                <button className='flex flex-col items-center gap-1' onClick={() => navigate('/tshirts')}>
                    <picture>
                        <img src="src/assets/Images/men/tshirt/tshirt01.jpeg" alt="Catégorie t-shirts" className='transition duration-150 ease-in-out w-28 rounded-xl hover:scale-105' />
                    </picture>
                    <p>T-shirts</p>
                </button>

                <button className='flex flex-col items-center gap-1' onClick={() => navigate('/accessories')}>
                    <picture>
                        <img src="src/assets/Images/accessories/sac01.jpeg" alt="Catégorie accessoires" className='transition duration-150 ease-in-out w-28 rounded-xl hover:scale-105' />
                    </picture>
                    <p>Accessoires</p>
                </button>
            </div>
        </div>
        <div className='h-full pb-20'>
            <p className='pl-3 pb-1 text-xl'>Produits en vedettes</p>
            <div className='flex justify-around'>

                <div className='p-3 flex flex-col gap-2'>
                    <button className='flex flex-col items-center gap-1' onClick={() => navigate('/jacket')}>
                        <picture>
                            <img src="src/assets/Images/men/pull/mpull02.jpeg" alt="Catégorie vestes" className='transition duration-150 ease-in-out w-28 rounded-xl hover:scale-105' />
                        </picture>
                        <p>Pull</p>
                    </button>

                    <button className='flex flex-col items-center gap-1' onClick={() => navigate('/accessories')}>
                        <picture>
                            <img src="src/assets/Images/accessories/sac04.jpeg" alt="Catégorie accessoires" className='transition duration-150 ease-in-out w-28 rounded-xl hover:scale-105' />
                        </picture>
                        <p>Accessoires</p>
                    </button>
                </div>

                <div className='p-3 flex flex-col gap-2'>
                    <button className='flex flex-col items-center gap-1' onClick={() => navigate('/tshirts')}>
                        <picture>
                            <img src="src/assets/Images/men/tshirt/tshirt07.jpeg" alt="Catégorie vestes" className='transition duration-150 ease-in-out w-28 rounded-xl hover:scale-105' />
                        </picture>
                        <p>T-shirt</p>
                    </button>

                    <button className='flex flex-col items-center gap-1' onClick={() => navigate('/jacket')}>
                        <picture>
                            <img src="src/assets/Images/men/veste/vestes05.jpeg" alt="Catégorie accessoires" className='transition duration-150 ease-in-out w-28 rounded-xl hover:scale-105' />
                        </picture>
                        <p>Vestes</p>
                    </button>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Hero