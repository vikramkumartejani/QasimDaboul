import React from "react";

const Hero = () => {
  return (
    <section className="bg-color-bg px-4 overflow-hidden">
      <div
        id="home"
        className="flex md:flex-row flex-col xl:gap-[50px] lg:gap-[40px] gap-[30px] pt-[48px] lg:pt-[9vw] pb-[60px] max-w-[1280px] mx-auto"
      >
        <div
          data-aos="fade-right"
          className="md:w-1/2 w-full flex flex-col justify-end"
        >
          <h1 className="font-abhaya 2xl:text-[5.4vw] lg:text-[8vw] md:text-[8.7vw] sm:text-[9vw] text-[50px] font-[700] text-black 2xl:leading-[6vw] xl:leading-[6.8vw] lg:leading-[8vw] md:leading-[8.7vw] leading-[50px]">
            Best Interior Designs!
          </h1>
          <p className="md:text-[24px] text-[19px] font-[400] md:leading-[42px] text-secondaryColor md:mt-[40px] mt-[20px] md:mb-[60px] mb-[30px]">
            I specialize in creating spaces that are not only aesthetically
            pleasing but also perfectly aligned with your lifestyle and needs.
          </p>
          <button className="bg-primaryColor uppercase rounded-[10px] text-white md:text-[20px] text-[18px] font-[700] tracking-[6%] leading-[26px] flex items-center justify-center md:w-[220px] w-[150px] md:py-[16px] py-[12px] px-2">
            Hire Me
          </button>
        </div>
        <div
          data-aos="fade-left"
          className="md:w-1/2 w-full lg:h-[570px] md:h-[500px] h-[100vw] mt-6 md:mt-0 flex justify-center relative"
        >
          <div className="absolute bottom-0 z-[2] bg-[#91918F] rounded-t-full 2xl:w-[599px] 2xl:h-[587px] w-[90%] xl:h-[37vw] md:h-[40vw] h-[80vw]"></div>
          <img
            className="absolute max-w-[80%] rounded-[15px] bottom-0 z-[3]"
            src="/assets/hero-img.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
