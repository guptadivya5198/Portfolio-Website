import React, { useState } from 'react';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    country: '',
    subject: '',
    message: '',
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log('Form submitted:', formData);
  }

  return (
    <section
      id="Contact Me"
      className="pt-6 lg:mb-36 sm:mb-44 mb-44 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-red-600 mb-3">
            Contact Me
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl">
            Have any feedback or just want to connect?
          </p>
        </div>

        <form
          onSubmit={submitHandler}
          className="bg-white rounded-lg shadow-2xl p-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="firstName"
            placeholder="Your Name"
            value={formData.firstName}
            onChange={changeHandler}
            className="col-span-1 sm:col-span-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={changeHandler}
            className="col-span-1 sm:col-span-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
          />
          <select
            name="country"
            value={formData.country}
            onChange={changeHandler}
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-md border border-gray-300 text-gray-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
          >
            <option value="">Select Country</option>
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={changeHandler}
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all"
          />
          <textarea
            name="message"
            placeholder="Enter Your Message"
            rows={5}
            value={formData.message}
            onChange={changeHandler}
            className="col-span-1 sm:col-span-2 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all resize-none"
          />
          <div className="col-span-1 sm:col-span-2 flex justify-center sm:justify-end mt-4">
            <Button
              type="submit"
              className="!bg-red-500 !text-white hover:!bg-red-600 shadow-md px-6 py-2 text-lg rounded-md"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
