import React from "react";

const About = () => {
  return (
    <section className="bg-color-bg px-4 overflow-hidden">
      <div className="md:py-[160px] py-[60px] max-w-[1280px] mx-auto">
        {/* About Text Section */}

        <div id="about" className="mb-[50px] pt-[20px]">
          <h2
            data-aos="fade-right"
            className="text-[22.46px] leading-[26.95px] font-[400] uppercase text-[#6D7D7D] tracking-[6px]"
          >
            About
          </h2>
          <h1
            data-aos="fade-up"
            className="sm:text-[56px] text-[40px] sm:leading-[67.37px] leading-[50px] font-[600] text-primaryColor mb-[23px] mt-[6px]"
          >
            The Best Interior Design Provider
          </h1>
          <p
            data-aos="fade-up"
            className="text-secondaryColor text-[20px] font-[400] leading-[30px]"
          >
            I am a passionate interior designer dedicated to integrating past
            traditions with modern aesthetics. With a keen eye for blending
            historical elements with contemporary design, I seek opportunities
            to expand my knowledge and skills in interior design. My goal is to
            contribute to projects that not only enhance the human experience
            but also celebrate and express cultural heritage. My approach to
            interior design involves a thoughtful fusion of traditional
            influences with modern trends, creating spaces that are both
            timeless and innovative. I am committed to crafting environments
            that are functional, aesthetically pleasing, and deeply resonant
            with their cultural context. I am eager to engage in new projects
            where I can apply my expertise and creativity to create inspiring
            and meaningful spaces. By joining a forwardthinking team, I aim to
            further develop my skills while contributing to designs that enrich
            lives and reflect the unique blend of history and modernity
          </p>
        </div>

        <div className="flex lg:flex-row flex-col gap-[30px]">
          {/* Image Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
            <img
              src="/assets/about-img1.png"
              alt="Image 1"
              className="w-full max-h-[620px] object-cover"
              data-aos="fade-right"
            />
            <img
              src="/assets/about-img2.png"
              alt="Image 2"
              className="w-full max-h-[620px] object-cover"
              data-aos="fade-right"
            />
          </div>

          {/* Stats Section */}
          <div className="flex flex-col xl:gap-[70px] gap-[40px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[45px]">
              <img
                src="/assets/about-img3.png"
                alt="Image 1"
                className="w-full max-h-[341px] rounded-tl-[70px] object-cover"
                data-aos="fade-left"
              />
              <img
                src="/assets/about-img4.png"
                alt="Image 2"
                className="w-full max-h-[341px] rounded-tr-[70px] object-cover"
                data-aos="fade-left"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center justiy-center text-center">
              <div
                data-aos="fade-up"
                className="sm:w-[70px] sm:mx-auto sm:text-left text-center"
              >
                <h3 className="2xl:text-[2.1vw] lg:text-[4vw] md:text-[5vw] text-[40px] font-[700] text-primaryColor leading-[76.8px]">
                  2K+
                </h3>
                <p className="text-secondaryColor 2xl:text-[0.9vw] lg:text-[1.5vw] text-[18px] font-[400] leading-[33px] tracking-[4px] uppercase xl:mt-[20px] md:mt-[10px]">
                  Projects Done
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="sm:w-[60px] sm:mx-auto sm:text-left"
              >
                <h3 className="2xl:text-[2.1vw] lg:text-[4vw] md:text-[5vw] text-[40px] font-[700] text-primaryColor leading-[76.8px]">
                  20+
                </h3>
                <p className="text-secondaryColor 2xl:text-[0.9vw] lg:text-[1.5vw] text-[18px] font-[400] leading-[33px] tracking-[4px] uppercase xl:mt-[20px] md:mt-[10px]">
                  Pro Designs
                </p>
              </div>
              <div
                data-aos="fade-up"
                className="sm:w-[100px] sm:mx-auto sm:text-left"
              >
                <h3 className="2xl:text-[2.1vw] lg:text-[4vw] md:text-[5vw] text-[40px] font-[700] text-primaryColor leading-[76.8px]">
                  300+
                </h3>
                <p className="text-secondaryColor 2xl:text-[0.9vw] lg:text-[1.5vw] text-[18px] font-[400] leading-[33px] tracking-[4px] uppercase xl:mt-[20px] md:mt-[10px]">
                  Global Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
