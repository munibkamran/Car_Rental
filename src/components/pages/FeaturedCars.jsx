import React from "react";
import { LiaCarSideSolid } from "react-icons/lia";
import { cars } from "../Data.js";
import { FaArrowRight } from "react-icons/fa6";
import { Cog, Fuel, Star, Users } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const FeaturedCars = () => {
  const navigate = useNavigate()
  return (
    <section className="mx-auto max-w-[1140px] px-4 py-10">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <span className="flex items-center gap-2 text-gray-800 text-2xl font-semibold">
          <LiaCarSideSolid className="h-10 w-10 text-blue-400" />
          Featured Cars
        </span>
        <p className="text-gray-600 mt-2 max-w-lg">
          Discover our handpicked selection of premium vehicles, perfect for any journey
        </p>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {cars.map((car) => (
          <div data-aos="fade-down" onClick={()=>navigate(`/carsdetail/${car.id}`)}
            className="transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl
              p-4 rounded-lg shadow-lg bg-white cursor-pointer"
            key={car.id}
          >
            {/* Car Image */} 
            <div className="relative">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-44 object-cover rounded-md"
              />
              <div className="absolute top-2 left-0 w-full px-3 flex justify-between">
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-xl">
                  {car.type}
                </span>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-xl">
                  {car.status}
                </span>
              </div>
            </div>

            {/* Car Info */}
            <div className="flex justify-between mt-3">
              <p className="text-gray-700 font-medium">{car.name}</p>
              <span className="text-sm text-yellow-400 flex gap-1">
                <Star className="w-4 h-4" />
                {car.rating}
              </span>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <span className="text-gray-600 text-sm">{car.year}</span>
              <div className="flex items-center gap-1">
                <CiLocationOn />
                <span className="text-gray-600 text-sm">{car.location}</span>
              </div>
              <div className="flex text-sm text-gray-600 gap-3 flex-wrap">
                <span className="inline-flex gap-1 items-center">
                  <Users className="w-4 h-4 text-blue-500" /> {car.seats} seats
                </span>
                <span className="inline-flex gap-1 items-center">
                  <Cog className="w-4 h-4 text-blue-500" /> {car.transmission}
                </span>
                <span className="inline-flex gap-1 items-center">
                  <Fuel className="w-4 h-4 text-blue-500" /> {car.fuel}
                </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {car.badges.map((badge, i) => (
                  <span
                    key={i}
                    className="bg-gray-50 rounded-xl border border-gray-300 text-sm px-2"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Price */}
              <p className="text-blue-500 font-bold">
                ${car.price}
                <span className="text-sm font-normal text-gray-500"> /day</span>
              </p>

              {/* Buttons */}
              <div className="flex gap-2">
                <button className="hover:bg-gray-200 cursor-pointer transition rounded border flex-1 py-1 border-gray-300 px-3">
                  <span className="text-gray-700 text-sm">View Details</span>
                </button>
                {/* <button className="bg-green-500 hover:bg-green-600 transition flex-1 py-1 rounded border border-gray-300 px-3">
                  <span className="text-white text-sm">Book Now</span>
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Cars Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-blue-500 rounded p-2 cursor-pointer group">
          <span className="text-white flex items-center gap-1 text-sm" onClick={()=> navigate('/cars')}>
            View All Cars
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default FeaturedCars;
