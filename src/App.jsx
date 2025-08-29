import React from 'react'
import Header from './components/Header'
import Home from './components/pages/Home'
import Footer from './components/Footer'
// import LoginPage from './components/pages/LoginPage'
import { Routes, Route, useLocation } from "react-router-dom"; 
import { useState } from 'react'
import LoginPage from './components/pages/LoginPage';
import CarsDetail from './components/pages/CarsDetail';
import Cars from './components/pages/Cars';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";


const App = () => {
const [showLogin, setShowLogin] = useState(false)
const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
    {showLogin && <LoginPage setShowLogin={setShowLogin}/> }
  {!isOwnerPath && <Header setShowLogin={setShowLogin}/>}

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/carsdetail/:id' element={<CarsDetail/>} />
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        
        {/* <Route path="/login" element={<LoginPage />} />   */}
      </Routes>
      <Footer/>
   
       
     
    </>
  )
}

export default App
