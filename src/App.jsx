import './App.css';
// import react router dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import pages
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
// import components
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </BrowserRouter>
  )
}
export default App