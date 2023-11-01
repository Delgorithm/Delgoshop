import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Category from './Pages/Category/Category';
import Accessories from './Pages/Product/Accessories';
import Jacket from './Pages/Product/jacket';
import Tshirts from './Pages/Product/tshirts';
import Cart from './Pages/Cart/Cart';

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/category'>
            <Route path='accessories' element={<Accessories />} />
            <Route path='jacket' element={< Jacket/>} />
            <Route path='tshirts' element={< Tshirts/>} />
          </Route>
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
