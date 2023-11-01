import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Accessories from './Pages/Product/Accessories';
import Tshirts from './Pages/Product/Tshirts';
import Cart from './Pages/Cart/Cart';
import Jacket from './Pages/Product/jacket';

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/jacket' element={<Jacket />} />
          <Route path='/tshirts' element={< Tshirts/>} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
