import './App.css';
// import react router dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import pages
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
// import components
import Cart from './Pages/Cart';
import Bookmark from './Pages/Bookmark';
import Account from './Pages/Account';
import Contact from './Pages/Contact';
import Men from './Pages/Men';
import Accessories from './Pages/Accessories';
import Chemise from './Pages/Chemise';
import Bag from './Pages/Bag';
import Surchemise from './Pages/Surchemise';
import Pantalon from './Pages/Pantalon';
import Tshirt from './Pages/Tshirt';
import { ShopContextProvider } from './Contexts/ShopContextProvider';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';



function App() {  
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/bookmark' element={<Bookmark />} />
          <Route path='/account' element={<Account />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/men' element={<Men />} />
          <Route path='/men/chemise' element={<Chemise />} />
          <Route path='/men/sur-chemise' element={<Surchemise />} />
          <Route path='/men/t-shirt' element={<Tshirt/>} />
          <Route path='/men/pantalon' element={<Pantalon />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/accessories/sac' element={<Bag />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  )
}
export default App