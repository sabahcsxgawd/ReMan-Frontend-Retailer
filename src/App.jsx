import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Reg from './components/reg.jsx'
import RegOk from './components/regOk.jsx'
import LoginPhoneNum from './components/loginPhoneNum.jsx';
import HomePage from './components/homepage.jsx';
import { CategoryPage } from './components/categoryPage.jsx';
import SliderTest from './components/sliderTest.jsx';
import SpecificCategoryProduct from './components/specificCategoryProduct.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories/Bevarage' element={<SpecificCategoryProduct category={'Bevarage'} />} />
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
