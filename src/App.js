
import { Routes, Route } from 'react-router-dom';
import { useCallback, useEffect,useState } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './components/layout/Home.jsx';
import Register from './components/account/Register.jsx';
import Login from './components/account/Login.jsx';
import Cart from './components/cart/Cart.jsx'

import ProductDetails from './components/catalog/ProductDetails.jsx';
import CategoryPage from './components/catalog/CategoryPage.jsx';
import NotFound from './components/errors/NotFound.jsx';
import { useDispatch } from 'react-redux';
import { setBasket } from './redux/basketSlice.js';
import {getCookie} from './components/util/utils.js';
import agent from './components/api/agent.js';
import LoadingComponent from './components/layout/LoadingComponent.jsx';
import {fetchBasketAsync} from './redux/basketSlice.js'
import { fetchCurrentUser } from './redux/accountSlice.js';



function App() {

  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true);

  const initApp = useCallback(async () => {

    try{

      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  })

  useEffect(() => {

    initApp().then(() => setLoading(false));

  }, [initApp])

      if(loading) return <LoadingComponent message='Initialising app...'/>

      
        return (
    <div className="App">
       <Navbar/>
      
             <main id="main-page-content">
                         <Routes>
                           <Route exact path="/" element={<Home/>}/>
                           <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register/>} />
                            <Route path="/details/:id" element={<ProductDetails />} />
                            <Route path="/cart" element={<Cart/>} />
                            <Route path="/categories" element={<CategoryPage />} />
                            <Route path="*" element={<NotFound/>} />
                         </Routes>
                         
                        
             </main>
       <Footer/>
 
    </div>
  );
}

export default App;
