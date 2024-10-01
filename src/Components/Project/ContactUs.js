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
    console.log('Finally Printing the value of Form Data');
    console.log(formData);
  }
  return (
    <section id="Contact Me">
      <div className="w-[1600px] bg-gray-200 -mt-24">
        <div className="flex flex-col relative w-[1000px] h-[565px] items-center justify-center my-[10rem] mx-auto py-1">
          <h1 className="text-8xl text-red-600 py-1 ">Contact Me</h1>
          <h3 className="text-3xl text-slate-400 capitalize text-center mr-20">
            Have any feedback or just want to connect?
          </h3>
          <div>
            <form
              className=" items-center justify-center gap-6 w-[70%] my-1 mx-20"
              onSubmit={submitHandler}
            >
              <div className="w-[100%]">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter Your Name"
                  value={formData.firstName}
                  onChange={changeHandler}
                  className="font-light px-1 w-[100%] text-lg h-[40px] my-2 mx-8 rounded-[3px] m-9 shadow-lg"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" Enter Your Email"
                  value={formData.email}
                  onChange={changeHandler}
                  className="font-light px-1 w-[100%] text-lg h-[40px] my-2 mx-8 rounded-[3px] m-9 shadow-lg"
                />
                <select
                  name="country"
                  id="country"
                  value={formData.country}
                  onChange={changeHandler}
                  className="font-light text-gray-400 px-1 w-[100%] text-lg h-[40px] my-2 mx-8 rounded-[3px] m-9 shadow-lg"
                >
                  <option>India</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={changeHandler}
                  className="font-light px-1 w-[100%] text-lg h-[40px] my-2 mx-8 rounded-[3px] m-9 shadow-lg"
                />
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Enter Your Message"
                  cols={30}
                  rows={4}
                  value={formData.message}
                  onChange={changeHandler}
                  className="font-light px-1 w-[100%] text-lg h-auto pt-3 my-2 mx-8 rounded-[3px] m-9 shadow-lg"
                />
              </div>
              <div className="ml-8 mb-3">
                <Button
                  className="w-fit !bg-red-500 px-4 py-1 !mt-1 !shadow-md !shadow-purple-950 !text-base font-semibold cursor-pointer transition-all duration-75  border-transparent hover:scale-95 "
                  variant="contained"
                  endIcon={<SendIcon />}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
