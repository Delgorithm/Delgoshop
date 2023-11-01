import React from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import { jacketPage } from '../../data/DataText'

const Jacket = () => {

  // const navigate = useNavigate();

  const jacketPageText = jacketPage.find(item => item.id === 1);
  const doudouneInformation = jacketPage.find(item => item.id === 2);
  const vesteInformation = jacketPage.find(item => item.id === 3);

  return (
    <div>
      <Header />
      <div className='p-3 h-full'>
        <p className='text-2xl font-bold pb-4'>{jacketPageText.title}</p>
        <p className='text-sm pb-4'>{jacketPageText.subtitle}</p>
        <div className='flex gap-3 items-center'>
          <picture>
            <img src="src/assets/Images/men/veste/doudoune02.jpeg" alt="Catégorie vestes" className='w-52' />
            <div className='flex justify-between items-center '>
              <p className='font-bold text-xs'>{doudouneInformation.title}</p>
              <p className='text-sm'>{doudouneInformation.price}€</p>
            </div>
          </picture>

          <picture>
            <img src="src/assets/Images/men/veste/vestes05.jpeg" alt="Catégorie vestes" className='w-52'/>
            <div className='flex justify-between items-center '>
              <p className='font-bold text-xs'>{vesteInformation.title}</p>
              <p className='text-sm'>{vesteInformation.price}€</p>
            </div>
          </picture>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Jacket