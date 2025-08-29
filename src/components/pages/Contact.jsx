import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="mx-auto max-w-[1140px] mt-24 p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Contact <span className="text-blue-500">Us</span></h2>
        <p className="text-gray-500 mt-2">
          Have questions or need help? We’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Contact Info */}
        <div data-aos="zoom-out" className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Get in Touch</h3>
          <div className="flex items-center gap-4 mb-4">
            <Mail className="text-blue-500 w-6 h-6" />
            <span className="text-gray-600">support@carrental.com</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <Phone className="text-blue-500 w-6 h-6" />
            <span className="text-gray-600">+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-500 w-6 h-6" />
            <span className="text-gray-600">
              123 Main Street, New York, USA
            </span>
          </div>
        </div>

        {/* Right Section - Form */}
        <form data-aos="zoom-out" className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Send a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 cursor-pointer hover:bg-blue-600 transition-all text-white py-3 rounded-md font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
