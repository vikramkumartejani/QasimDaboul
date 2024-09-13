import Image from "next/image";
import React from "react";

const HireMeNow = () => {
  return (
    <div className="bg-color-bg w-full overflow-hidden">
      <div className="pt-10 max-w-[1280px] mx-auto">
        <div className="w-full bg-[#202020] sm:rounded-se-[100px] flex xl:items-center xl:justify-end relative flex-col xl:flex-row overflow-hidden">
          <Image
            src="/assets/hire-me-now.svg"
            alt="hire-me-now"
            width={450}
            height={400}
            className="absolute left-0 h-full xl:block hidden"
            data-aos="fade-right"
          />
          <img
            src="/assets/hire-me-now.svg"
            alt="hire-me-now"
            className="w-full xl:hidden block"
            data-aos="fade-up"
          />
          <div className="xl:pr-[80px] flex xl:items-start gap-5 flex-col py-[30px] sm:py-[50px] justify-end px-4 xl:px-0">
            <h1
              data-aos="fade-up"
              className="text-[28px] sm:text-[40px] md:text-[60px] text-white font-semibold max-w-[700px]"
            >
              Creativity & Functionality in Every Design! Get Now
            </h1>
            <button
              data-aos="fade-left"
              className="text-[#FFFAF3] w-[150px] sm:w-[200px] h-[40px] sm:h-[50px] text-[15px] sm:text-[20px] rounded-lg border border-[#FFFAF3]"
            >
              HIRE ME NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMeNow;
