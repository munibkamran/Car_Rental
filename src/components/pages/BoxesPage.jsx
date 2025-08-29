import React from 'react'
import { features } from '../Boxes.jsx';

const BoxesPage = () => {
  return (
    <section className="bg-gray-100 w-full mx-auto mt-8 px-4 sm:px-6 lg:px-12 py-10">
      <div className="max-w-[1140px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center px-2">
          <span className="text-gray-700 text-2xl sm:text-3xl font-bold">
            Why Choose AutoRent?
          </span>
          <p className="text-gray-600 mt-2 max-w-2xl text-sm sm:text-base">
            We're committed to providing you with the best car rental experience 
            through our premium services and customer-first approach.
          </p>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {features.map((item, index) => (
            <div data-aos="fade-down"
              key={index}
              className="rounded-xl p-6 bg-white shadow-xl transform transition duration-300 ease-in-out hover:-translate-y-2 active:-translate-y-1"
            >
              <div className="flex flex-col items-center justify-center text-center">
                <span className="bg-blue-500 h-16 w-16 flex justify-center items-center rounded-full text-white text-2xl">
                  {item.icon}
                </span>
                <span className="text-gray-700 mt-3 font-bold text-lg">
                  {item.title}
                </span>
                <p className="text-gray-500 mt-1 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BoxesPage
  