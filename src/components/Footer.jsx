import React from 'react'
import { LiaCarSideSolid } from "react-icons/lia";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-blue-950 w-full px-6 sm:px-10 lg:px-20 py-12">
      <div className="max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <LiaCarSideSolid className="text-blue-400 h-8 w-8" />
            <span className="text-white font-bold text-lg">AutoRent</span>
          </div>
          <p className="text-white text-sm leading-relaxed">
            Your trusted partner for premium car rentals. 
            Experience the freedom of the road with our quality 
            vehicles and exceptional service.
          </p>
          <div className="flex gap-3">
            <FaFacebookF className="text-white h-5 w-5 cursor-pointer hover:text-blue-400 transition" />
            <CiTwitter className="text-white h-5 w-5 cursor-pointer hover:text-blue-400 transition" />
            <FaInstagram className="text-white h-5 w-5 cursor-pointer hover:text-blue-400 transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <span className="text-white font-bold text-lg">Quick Links</span>
          <ul className="flex flex-col gap-2 mt-3">
            <li className="text-white hover:text-blue-400 cursor-pointer">Home</li>
            <li className="text-white hover:text-blue-400 cursor-pointer">Our Cars</li>
            <li className="text-white hover:text-blue-400 cursor-pointer">About Us</li>
            <li className="text-white hover:text-blue-400 cursor-pointer">Contact</li>
            <li className="text-white hover:text-blue-400 cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <span className="text-white font-bold text-lg">Services</span>
          <ul className="flex flex-col gap-2 mt-3">
            <li className="text-white hover:text-blue-400 cursor-pointer">Economy Cars</li>
            <li className="text-white hover:text-blue-400 cursor-pointer">Luxury Vehicles</li>
            <li className="text-white hover:text-blue-400 cursor-pointer">SUVs & Trucks</li>
            <li className="text-white hover:text-blue-400 cursor-pointer">Electric Cars</li>
            <li className="text-white hover:text-blue-400 cursor-pointer">Long-Term Rentals</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <span className="text-white font-bold text-lg">Contact Us</span>
          <p className="flex gap-2 items-center text-sm text-white">
            <FaPhoneAlt className="text-blue-400" /> +1 (555) 123-4567
          </p>
          <p className="flex gap-2 items-center text-sm text-white">
            <MdOutlineMail className="text-blue-400" /> munib@autorent.com
          </p>
          <p className="flex gap-2 items-center text-sm text-white">
            <IoLocationOutline className="text-blue-400" /> 123 St main, City, State 12345
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center">
        <p className="text-gray-400 text-sm">© 2025 AutoRent. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
