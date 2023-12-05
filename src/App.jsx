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

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/bookmark' element={<Bookmark />} />
        <Route path='/account' element={<Account />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category/men' element={<Men />} />
        <Route path='/category/accessories' element={<Accessories />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App