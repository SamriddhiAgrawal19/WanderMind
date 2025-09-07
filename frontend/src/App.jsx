import React from 'react'
import LandingPage from './pages/Landingpage';
import './index.css'
import SigninPage from './pages/signinPage';
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SigninPage />} />
    </Routes>
  )
}

export default App
