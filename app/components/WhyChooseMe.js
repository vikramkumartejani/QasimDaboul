import React from "react";

const WhyChooseMe = () => {
  return (
    <div
      id="testimonials"
      className="bg-color-bg flex items-center justify-center pb-[60px] overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[60px] md:gap-[20px] mx-4 md:mx-auto">
        {/* Left column - Image */}
        <div data-aos="fade-right" className="relative w-full">
          <img
            src="/assets/why-choose-me.png"
            alt="Profile"
            className="w-full max-h-[900px]  md:ms-[-4px] ms-[-20px]  object-contain rounded-br-[100px]"
          />
        </div>

        {/* Right column - Text content */}
        <div className="lg:w-[90%] flex flex-col justify-center text-left md:p-4 xl:py-[160px] md:py-[80px] py-[60px]">
          <h2
            data-aos="fade-up"
            className="text-[35px] text-primaryColor sm:text-[40px] md:text-[4.4vw] xl:text-[56.14px] font-[600] md:mb-[43px] mb-[30px]"
          >
            Why Choose Me?
          </h2>
          <p
            data-aos="fade-left"
            className="text-secondaryColor xl:text-[20px] text-[18px] leading-[30px] font-[400] mb-6"
          >
            Choosing me as your interior designer means partnering with someone
            who is deeply committed to bringing your vision to life with
            precision and creativity. I combine a keen eye for detail with a
            strong understanding of design principles, ensuring that each space
            is not only beautiful but also functional and reflective of your
            personal style.
          </p>
          <p
            data-aos="fade-left"
            className="text-secondaryColor xl:text-[20px] text-[18px] leading-[30px] font-[400] mb-6"
          >
            My approach is collaborative and client-focused—I listen to your
            needs and ideas, then translate them into thoughtful, well-crafted
            designs that enhance the way you live. With a proven track record of
            delivering on time and within budget, I’m dedicated to exceeding
            your expectations and creating a space you’ll love for years to
            come.
          </p>
          <button
            data-aos="fade-up"
            className="bg-primaryColor uppercase rounded-[10px] text-white md:text-[20px] text-[18px] font-[700] tracking-[6%] leading-[26px] flex items-center justify-center md:w-[220px] w-[150px] md:py-[16px] py-[12px] px-2"
          >
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
