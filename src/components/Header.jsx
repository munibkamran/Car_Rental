import React from 'react'
import { LiaCarSideSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa6";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from 'react';
import { TbMenu3 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import { useNavigate } from 'react-router-dom';
const Header = ({setShowLogin}) => {
  
  const [ShowMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!ShowMenu)
  }
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* w-full ensures no overflow, max-w keeps it centered on large screens */}
      <nav className="mx-auto w-full max-w-[1140px] flex items-center justify-between py-4 px-4">
        
        {/* Logo */}
        <Link to={'/'} href="#" className="flex gap-1 items-center">
          <LiaCarSideSolid className="h-8 w-8" />
          {/* AutoRent text only on md+ screens */}
          <span className="font-bold text-lg">AutoRent</span>
        </Link>

        {/* Desktop Menu Links */}
       <ul className="md:flex gap-7 hidden">
  <li>
    <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
  </li>
  <li>
    <Link to="/cars" className="text-gray-600 hover:text-blue-500">Cars</Link>
  </li>
  <li>
    <Link to="/about" className="text-gray-600 hover:text-blue-500">About</Link>
  </li>
  <li>
    <Link to="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
  </li>
</ul>


        {/* Desktop Buttons */}
        <div className="md:flex items-center gap-3 hidden">
          <button onClick={()=> setShowLogin(true)} className="group flex cursor-pointer font-medium items-center gap-1 px-2 rounded-md py-1">
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/> Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="text-zinc-800 text-3xl md:hidden ml-auto" onClick={toggleMenu}>
           {ShowMenu ? <RxCross2 /> : <RiMenu3Fill />}
        </button>
         
         {/* Mobile Menu */}
         <ul className={`flex flex-col gap-y-9 bg-white/15 rounded-xl backdrop-blur-lg p-13 md:hidden position absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${ShowMenu ? 'left-1/2' : null}`}>
          <li><Link to={'/'} className="text-blue-600 font-medium hover:text-blue-500">Home<hr className='text-gray-500'/></li>
          <li><Link to={'/cars'} className="text-blue-600 font-medium hover:text-blue-500">Cars<hr className='text-gray-500'/></li>
          <li><Link to={'/about'} className="text-blue-600 font-medium hover:text-blue-500">About<hr className='text-gray-500'/></li>
          <li><Link to={'/contact'} className="text-blue-600 font-medium hover:text-blue-500">Contact<hr className='text-gray-500'/></li>

          {/* Mobile View Button */}
           <li>
            <div className="flex items-center gap-3">
          <button onClick={()=>setShowLogin(true)} className="flex cursor-pointer font-medium items-center gap-1 group">
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/> Login
          </button>
          <button className="cursor-pointer bg-blue-500 backdrop-blur-xl text-white font-medium rounded px-3 py-1">
            <span className=''>Help?</span> 
          </button>
        </div>
           </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
