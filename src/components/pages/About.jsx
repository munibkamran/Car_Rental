import React from "react";

const About = () => {
  return (
    <section className="mt-24 px-4 sm:px-8 lg:px-16 max-w-[1140px] mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          About <span className="text-blue-500">CarRental</span>
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          We are committed to providing the best car rental experience with a wide
          selection of premium vehicles, affordable pricing, and excellent
          customer service.
        </p>
      </div>

      {/* Mission / Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div data-aos="fade-right" className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            🚗 Our Mission
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            To make car rentals simple, transparent, and accessible for everyone.
            Whether you’re traveling for business, leisure, or adventure, we
            ensure you have the perfect ride at your fingertips.
          </p>
        </div>

        <div data-aos="fade-left" className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            🌍 Our Vision
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            To become the most trusted car rental platform worldwide, offering
            reliable vehicles and an effortless booking experience with modern
            technology and top-class support.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Why Choose <span className="text-blue-500">Us?</span>
        </h2>
        <div data-aos="flip-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Wide Selection", desc: "Choose from economy to luxury cars tailored to your needs." },
            { title: "Affordable Pricing", desc: "Enjoy competitive daily rates with no hidden charges." },
            { title: "24/7 Support", desc: "Our team is always ready to assist you anytime, anywhere." },
            { title: "Easy Booking", desc: "Quick and seamless reservation process online." },
            { title: "Trusted Service", desc: "Thousands of happy customers trust our platform daily." },
            { title: "Premium Quality", desc: "All vehicles are well-maintained and regularly serviced." }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-xl p-5 shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-500">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
