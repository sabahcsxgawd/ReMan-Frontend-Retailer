import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Reg from './components/reg.jsx'
import RegOk from './components/regOk.jsx'
import LoginPhoneNum from './components/loginPhoneNum.jsx';
import LoginPhoneOTP from './components/loginPhoneOTP.jsx';
import LoginPIN from './components/loginPIN.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Reg />} />
        <Route path='/loginPIN' element={<LoginPIN />} />
        <Route path='/loginOTP' element={<LoginPhoneOTP />} />
        <Route path='/loginPhn' element={<LoginPhoneNum />} />
        <Route path='/reg' element={<Reg />} />/
        <Route path='/regOk' element={<RegOk />} />
      </Routes>
    </Router>
  );
}

export default App
