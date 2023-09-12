import React from "react";

const Contact = () => {
  return (
    <div
      className="w-full h-screen bg-[#272829] flex items-center justify-center p-4"
      name="contact"
    >
      <form
        method="POST"
        action="https://getform.io/f/e1781f01-ae98-4989-9259-67eaaa8cbc88"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#FFCC70] text-white">
            Contact
          </p>
          <p className="text-white py-4">
            Submit the form below or shoot me a email to rashen598@gmail.com
          </p>
        </div>

        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="text"
          name="name"
        />
        <input
          className="bg-[#ccd6fc] p-2 my-4"
          type="email"
          placeholder="email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6fc] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 flex justify-center items-center p-2 my-3 mx-auto hover:bg-[#FFCC70] hover:border-[#FFCC70] hover:text-black">
          Contact Me
        </button>
      </form>
    </div>
  );
};

export default Contact;
