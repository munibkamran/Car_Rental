import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import FeaturedCars from "../pages/FeaturedCars";
import Banner from "./Banner";
import BoxesPage from "./BoxesPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
    AOS.init({
      duration: 1000,  // animation speed (ms)
      once: true,      // sirf 1 bar chale
    });
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-500 w-full min-h-[500px] flex items-center">
        <div data-aos="fade-right" className="gap-6 max-w-[1140px] mx-auto flex flex-col items-center px-4 py-12 w-full">
          {/* Heading */}
          <p className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center leading-snug px-2 mt-14">
            Find Your Perfect{" "}
            <span className="text-yellow-400">Rental Car</span>
          </p>

          {/* Subtext */}
          <p className="text-white text-sm sm:text-base md:text-lg text-center max-w-[650px] px-3 mt-2">
            Discover amazing deals on quality vehicles. Book now and drive away
            with confidence.
          </p>

          {/* Search Box */}
          <div className="mt-9 flex flex-col sm:flex-row flex-wrap items-center gap-4 bg-white shadow-lg rounded-lg p-4 w-full max-w-[95%] sm:max-w-[900px]">
            {/* Pickup Location */}
            <div className="flex-1 min-w-[200px]">
              <label className="flex items-center text-xs text-gray-500 mb-1">
                <IoLocationOutline className="text-gray-700 size-5" />
                <span className="ml-1 text-gray-700 text-[14px]">
                  Pickup Location
                </span>
              </label>
              <select className="cursor-pointer w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select city</option>
                <option>Burnaby</option>
                <option>Tipolia</option>
                <option>Vancouver</option>
                <option>New York</option>
              </select>
            </div>

            {/* Pickup Date */}
            <div className="flex-1 min-w-[200px]">
              <label className="flex items-center text-xs text-gray-500 mb-1">
                <MdOutlineDateRange className="text-gray-700 size-5" />
                <span className="ml-1 text-gray-700 text-[14px]">
                  Pickup Date
                </span>
              </label>
              <input
                type="date"
                className="cursor-pointer w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Pickup Time */}
            <div className="flex-1 min-w-[200px]">
              <label className="flex items-center text-xs text-gray-500 mb-1">
                <IoMdTime className="text-gray-700 size-5" />
                <span className="ml-1 text-gray-700 text-[14px]">
                  Pickup Time
                </span>
              </label>
              <input
                type="time"
                className="cursor-pointer w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Return Date */}
            <div className="flex-1 min-w-[200px]">
              <label className="flex items-center text-xs text-gray-500 mb-1">
                <MdOutlineDateRange className="text-gray-700 size-5" />
                <span className="ml-1 text-gray-700 text-[14px]">
                  Return Date
                </span>
              </label>
              <input
                type="date"
                className="cursor-pointer w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Search Button */}
            <div className="flex-1 min-w-[200px]">
              <button className="flex w-full justify-center items-center gap-2 mt-2 sm:mt-6 cursor-pointer px-4 py-0.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
               
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-10 w-full px-4">
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-2xl sm:text-3xl">
                500+
              </span>
              <p className="text-white text-sm">Premium Cars</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-2xl sm:text-3xl">
                50+
              </span>
              <p className="text-white text-sm">Locations</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-2xl sm:text-3xl">
                24/7
              </span>
              <p className="text-white text-sm">Support</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-white font-bold text-2xl sm:text-3xl">
                99%
              </span>
              <p className="text-white text-sm">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <FeaturedCars />
      <Banner />
      <BoxesPage />
    </>
  );
};

export default Home;
