
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';

import Footer from './components/Footer.jsx';
import Home from './HomePage/Home.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Cart from './components/Cart.jsx'
import './App.css';
import ProductDetails from './components/ProductDetails.jsx';
import CategoryPage from './components/CategoryPage.jsx';

function App() {
  return (
    <div className="App">
       <Navbar/>
      
             <main id="main-page-content">
                         <Routes>
                           <Route path="/" element={<Home/>}/>
                           <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register/>} />
                            <Route path="/details/:productId" element={<ProductDetails />} />
                            <Route path="/cart" element={<Cart/>} />
                            <Route path="/categories" element={<CategoryPage />} />
                         </Routes>
                         
                        
             </main>
       <Footer/>
     
    </div>
  );
}

export default App;
