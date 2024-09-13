"use client";
import React, { useState } from "react";

const Contact = () => {
  const [isTypingName, setIsTypingName] = useState(false);
  const [isTypingEmail, setIsTypingEmail] = useState(false);
  return (
    <div className="bg-color-bg py-[20px] md:py-[80px]">
      <div className=" flex items-center justify-center">
        <div
          id="contact"
          className="bg-white max-w-[1280px] grid grid-cols-1 md:grid-cols-2 lg:gap-[60px] md:gap-[20px] gap-10 mx-4 md:mx-auto py-[100px]"
        >
          {/* Left column - Image */}
          <div data-aos="fade-up" className="relative w-full">
            <img
              src="/assets/contact.png"
              alt="Profile"
              className="w-full max-h-[900px] object-contain rounded-t-[100px]"
            />
          </div>

          {/* Right column - Text content */}
          <div className="lg:w-[90%] flex flex-col justify-center text-left">
            <h2
              data-aos="fade-right"
              className="text-[35px] text-primaryColor sm:text-[40px] md:text-[4.4vw] xl:text-[56.14px] font-[600]"
            >
              Contact Us
            </h2>
            <p
              data-aos="fade-up"
              className="text-secondaryColor xl:text-[20px] text-[18px] leading-[30px] font-[400] mb-6"
            >
              We’d love to hear from you! Reach out with any questions or to
              schedule a consultation, and we’ll get back to you as soon as
              possible.
            </p>
            <form className="flex flex-col gap-[20px]">
              <div className="flex sm:flex-row flex-col gap-[20px]">
                <div data-aos="fade-down" className="relative w-full">
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    className="w-full outline-none rounded-[10px] border border-[#D1D0D0] px-[20px] py-[12px] placeholder:text-[#D1D0D0]"
                    onBlur={() => setIsTypingName(false)}
                    onChange={(e) => setIsTypingName(e.target.value.length > 0)}
                  />
                  {!isTypingName && (
                    <span className="absolute left-[65px] top-[12px] text-red-500">
                      *
                    </span>
                  )}
                </div>

                <input
                  required
                  type="number"
                  placeholder="Phone"
                  className="w-full outline-none rounded-[10px] border border-[#D1D0D0] px-[20px] py-[12px] placeholder:text-[#D1D0D0]"
                  data-aos="fade-down"
                />
              </div>
              <div data-aos="fade-up" className="relative w-full">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full outline-none rounded-[10px] border border-[#D1D0D0] px-[20px] py-[12px] placeholder:text-[#D1D0D0]"
                  onBlur={() => setIsTypingEmail(false)}
                  onChange={(e) => setIsTypingEmail(e.target.value.length > 0)}
                />
                {!isTypingEmail && (
                  <span className="absolute left-[63px] top-[12px] text-red-500">
                    *
                  </span>
                )}
              </div>
              <textarea
                data-aos="fade-up"
                required
                placeholder="Describe your Idea"
                className="h-[167px] outline-none w-full rounded-[10px] border border-[#D1D0D0] px-[20px] py-[12px] placeholder:text-[#D1D0D0]"
              />

              <button
                data-aos="fade-left"
                className="bg-primaryColor uppercase rounded-[10px] text-white md:text-[20px] text-[16px] font-[600] tracking-[6%] leading-[26px] flex items-center justify-center md:w-[350px] w-[250px] md:py-[16px] py-[12px] px-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
