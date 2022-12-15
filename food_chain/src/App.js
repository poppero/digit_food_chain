import './App.css';
import ImageBackground from './HomePage/ImageBackground';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import { UserProvider, VoiceControlContext } from './Api/ContextApi';
import { ProductProvider } from './Api/ProductsApi';
import ProductDetails from './ProductPage/ProductDetails';
import { useContext, useState } from 'react';
import CartPage from './Cart/CartPage';

function App() {
  const redirect = useContext(VoiceControlContext)
  return (
    <div className="App bg-black overflow-x-hidden">
      
      <Router>
        <UserProvider>
          <ProductProvider>
            <Routes>
              <Route path="/" element={<ImageBackground />} />
              <Route path="/product/:name" element={<ProductDetails />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<CartPage />} />

            </Routes>
          </ProductProvider>
        </UserProvider>
      </Router>


    </div>
  );
}

export default App;

