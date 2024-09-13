import Image from "next/image";
import React from "react";

const Process = () => {
  return (
    <section className="bg-color-bg md:px-0 px-4 overflow-hidden">
      <div className="md:py-[160px] py-[60px] overflow-hidden">
        {/* About Text Section */}
        <div className="mb-[50px] pt-[20px] md:px-4">
          <h2
            data-aos="fade-down"
            className="uppercase text-[22.46px] leading-[26.95px] font-[400] uppercase text-[#6D7D7D] tracking-[6px] text-center"
          >
            PROCESS
          </h2>
          <h1
            data-aos="fade-right"
            className="sm:text-[56px] text-[40px] sm:leading-[67.37px] leading-[50px] font-[600] text-primaryColor mb-[23px] mt-[6px] text-center"
          >
            My Working Approach
          </h1>
          <p
            data-aos="fade-left"
            className="max-w-[1048px] mx-auto text-secondaryColor md:text-[20px] text-[19px] font-[400] leading-[30px] text-center"
          >
            I maintain open communication, providing regular updates and
            involving you in key decisions. This collaborative approach ensures
            that the final design is not only visually stunning but also
            perfectly aligned with your expectations.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 sm:gap-20 md:gap-4 lg:gap-14 md:py-12 xl:ps-[100px] lg:ps-[50px] md:ps-4">
          {/* Text Section */}
          <div className="md:w-1/2">
            <div className="md:mb-[100px] mb-[50px]">
              <h3
                data-aos="fade-right"
                className="lg:text-[36px] md:text-[30px] sm:text-[26px] text-[23px] font-[600] text-primaryColor leading-[48px]"
              >
                Step 01: Understanding
              </h3>
              <p
                data-aos="fade-up"
                className="text-secondaryColor lg:text-[20px] sm:text-[18px] text-[17px] font-[400] leading-[30px] md:mt-[20px] mt-[10px]"
              >
                I start by engaging with you to fully understand your needs,
                preferences, and lifestyle. This involves detailed consultations
                where we discuss your vision, the functionality of the space,
                and any specific requirements you have.
              </p>
            </div>
            <div className="md:mb-[100px] mb-[50px]">
              <h3
                data-aos="fade-right"
                className="lg:text-[36px] md:text-[30px] sm:text-[26px] text-[23px] font-[600] text-primaryColor leading-[48px]"
              >
                Step 02: Conceptualization
              </h3>
              <p
                data-aos="fade-up"
                className="text-secondaryColor lg:text-[20px] sm:text-[18px] text-[17px] font-[400] leading-[30px] md:mt-[20px] mt-[10px]"
              >
                Based on our discussions, I create initial design concepts and
                draft plans. This phase focuses on blending aesthetics with
                functionality, ensuring that each design element serves a
                purpose while enhancing the overall look and feel of the space.
              </p>
            </div>
            <div>
              <h3
                data-aos="fade-right"
                className="lg:text-[36px] md:text-[30px] sm:text-[26px] text-[23px] font-[600] text-primaryColor leading-[48px]"
              >
                Step 03: Execution
              </h3>
              <p
                data-aos="fade-up"
                className="text-secondaryColor lg:text-[20px] sm:text-[18px] text-[17px] font-[400] leading-[30px] md:mt-[20px] mt-[10px]"
              >
                Throughout the project, I maintain clear communication and
                involve you in key decisions. This collaborative process ensures
                that the final design aligns perfectly with your expectations. I
                oversee the execution of the design, ensuring that the end
                result is both beautiful and practical.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div data-aos="fade-left" className="md:w-1/2 relative">
            <img
              src="/assets/process-img.png"
              alt="Design Example"
              className="rounded-lb-[100px] object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center z-[3]">
              <Image
                className="pointer md:w-[162px] w-[120px]"
                width={162}
                height={162}
                src="/assets/play-button.svg"
                alt="Play Button"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
