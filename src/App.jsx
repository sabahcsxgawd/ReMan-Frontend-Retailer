import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Reg from './components/reg.jsx'
import RegOk from './components/regOk.jsx'
import LoginPhoneNum from './components/loginPhoneNum.jsx';
import HomePage from './components/HomePage.jsx';
import { CategoryPage } from './components/categoryPage.jsx';
import SliderTest from './components/sliderTest.jsx';
import SpecificCategoryProduct from './components/specificCategoryProduct.jsx';
import SelectQuantityProduct from './components/selectQuantityProduct.jsx';
import Cart from './components/cart.jsx';
import Checkout from './components/Checkout.jsx';
import PaymentSuccess from './components/PaymentSuccess.jsx';
import PaymentFail from './components/PaymentFail.jsx';
import NotificationPage from './components/NotificationPage.jsx';
import OrderHistory from './components/OrderHistory.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPhoneNum />} />
        <Route path='/orderHistory' element={<OrderHistory />} />
        <Route path='/notifications' element={<NotificationPage />} />
        <Route path='/payment/success' element={<PaymentSuccess />} />
        <Route path='/payment/fail' element={<PaymentFail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/categories/:category/select-quantity' element={<SelectQuantityProduct />} />
        <Route path='/categories/:category' element={<SpecificCategoryProduct />} />
        <Route path='/categories' element={<CategoryPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPhoneNum />} />
        <Route path='/reg' element={<Reg />} />/
        <Route path='/regOk' element={<RegOk />} />
      </Routes>
    </Router>
  );
}

export default App
