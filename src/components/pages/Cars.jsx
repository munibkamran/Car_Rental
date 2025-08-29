import React, { useContext, useEffect, useState } from "react";
import { CiSearch, CiLocationArrow1, CiLocationOn } from "react-icons/ci";
import { Cog, Fuel, Star, Users } from "lucide-react";
import { cars } from "../Data.js";
import { useNavigate } from "react-router-dom";
import { dataContext } from "../context/UserContext.jsx";

const Cars = () => {
  const { input, setInput } = useContext(dataContext); // search string
  const [filteredCars, setFilteredCars] = useState(cars); // cars list
  const navigate = useNavigate();

  useEffect(() => {
    const newList = cars.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredCars(newList); // ✅ yaha update karna hai, setInput nahi
  }, [input]);

  return (
    <>
      {/* Search Box */}
      <div className="w-full bg-blue-50 flex items-center justify-center mt-32 ">
        <div className="py-16 text-center">
          <span className="text-gray-800 text-2xl font-bold">
            Available Cars
          </span>
          <p className="text-gray-500 mt-2 text-sm">
            Browse Our Selected Premium vehicles available for your next
            adventure
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white shadow rounded-full items-center flex mt-5"
          >
            <CiSearch className="text-gray-700 size-5.5 cursor-pointer ml-3" />
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)} // ✅ sirf string update
              type="text"
              placeholder="Search by make, model, or features"
              className="w-full h-full p-3 rounded-full  focus:outline-none text-gray-600"
            />
            <CiLocationArrow1 className="text-gray-700 size-5.5 cursor-pointer mr-3" />
          </form>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div
              data-aos="fade-down"
                key={car.id}
                onClick={() => navigate(`/carsdetail/${car.id}`)}
                className="transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl
                   p-4 rounded-lg shadow-lg bg-white cursor-pointer"
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
                      <Users className="w-4 h-4 text-blue-500" /> {car.seats}{" "}
                      seats
                    </span>
                    <span className="inline-flex gap-1 items-center">
                      <Cog className="w-4 h-4 text-blue-500" />{" "}
                      {car.transmission}
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
                    <span className="text-sm font-normal text-gray-500">
                      {" "}
                      /day
                    </span>
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button className="hover:bg-gray-200 cursor-pointer transition rounded border flex-1 py-1 border-gray-300 px-3">
                      <span className="text-gray-700 text-sm">View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              Car not found...
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cars;
