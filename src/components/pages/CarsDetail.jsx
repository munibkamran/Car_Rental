import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cars } from "../Data";
import { ArrowLeft } from "lucide-react";

const CarsDetail = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const foundCar = cars.find((c) => c.id === parseInt(id));
    setCar(foundCar);
  }, [id]);

  return car ? (
    <section className="mx-auto max-w-[1140px] mt-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left side - Car info */}
        <div className="flex-1">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all cars
          </button>

          <div className="mt-4 flex flex-col">
            <div className="rounded-lg shadow overflow-hidden">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-64 sm:h-80 object-cover"
              />
            </div>
            <p className="text-gray-800 text-xl sm:text-2xl font-semibold mt-3">
              {car.name}
            </p>
            <div className="flex items-center text-gray-600 gap-2 text-sm sm:text-base">
              <span>{car.year}</span>
              <span>•</span>
              <span>{car.type}</span>
            </div>
          </div>
        </div>

        {/* Right side - Booking Form */}
        <div className="w-full lg:w-[380px]">
          <form className="flex flex-col gap-4 w-full text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white p-6 sm:p-8">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-bold text-lg sm:text-xl">
                ${car.price}
              </span>
              <span className="text-gray-500 font-medium text-sm sm:text-base">
                per day
              </span>
            </div>

            <div className="w-full">
              <p className="text-sm font-medium">Pickup Date</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500 text-sm sm:text-base"
                type="date"
                required
              />
            </div>

            <div className="w-full">
              <p className="text-sm font-medium">Return Date</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500 text-sm sm:text-base"
                type="date"
                required
              />
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 transition-all text-white w-full py-2 sm:py-3 rounded-md cursor-pointer text-sm sm:text-base font-medium">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  ) : (
    <p className="text-center mt-20">Loading....</p>
  );
};

export default CarsDetail;
