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
import Category from './Pages/Category';
import Contact from './Pages/Contact';
import Men from './Pages/Men';
import Accessories from './Pages/Accessories';
import Chemise from './Pages/Chemise';
import Bag from './Pages/Bag';
import Surchemise from './Pages/Surchemise';
import Trousers from './Pages/Trousers';
import Tshirt from './Pages/Tshirt';
import { ShopContextProvider } from './Contexts/ShopContextProvider';

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
          <Route path='/category' element={<Category />} />
          <Route path='/category/men' element={<Men />} />
          <Route path='/category/men/chemise' element={<Chemise />} />
          <Route path='/category/men/sur-chemise' element={<Surchemise />} />
          <Route path='/category/men/t-shirt' element={<Tshirt/>} />
          <Route path='/category/men/pantalon' element={<Trousers />} />
          <Route path='/category/accessories' element={<Accessories />} />
          <Route path='/category/accessories/sac' element={<Bag />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  )
}
export default App