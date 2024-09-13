import React from "react";

const MyRecentProjects = () => {
  return (
    <section className="bg-white px-4 overflow-hidden">
      <div className="md:py-[100px] py-[50px] max-w-[1280px] mx-auto overflow-hidden">
        {/* About Text Section */}
        <div id="projects" className="mb-[50px] pt-[20px]">
          <h2
            data-aos="fade-up"
            className="uppercase text-[22.46px] leading-[26.95px] font-[400] uppercase text-[#6D7D7D] tracking-[6px] text-center"
          >
            Project
          </h2>
          <h1
            data-aos="fade-left"
            className="sm:text-[56px] text-[40px] sm:leading-[67.37px] leading-[50px] font-[600] text-primaryColor mb-[23px] mt-[6px] text-center"
          >
            My Recent Projects
          </h1>
          <p
            data-aos="fade-up"
            className="max-w-[1048px] mx-auto text-secondaryColor md:text-[20px] text-[19px] font-[400] leading-[30px] text-center"
          >
            Recently completed a modern home renovation that seamlessly blends
            contemporary aesthetics with functional living spaces, reflecting
            the client’s unique style.
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Row 1 */}
            <div
              data-aos="fade-right"
              className="sm:col-span-1 xl:h-[400px] sm:h-[320px] w-full"
            >
              <img
                src="/assets/recent-project1.png"
                alt="Image 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div
              data-aos="fade-up"
              className="sm:col-span-2 xl:h-[400px] h-[320px]"
            >
              <img
                src="/assets/recent-project2.png"
                alt="Image 2"
                className="object-cover w-full h-full"
              />
            </div>
            <div
              data-aos="fade-left"
              className="sm:col-span-1 xl:h-[400px] h-[320px]"
            >
              <img
                src="/assets/recent-project3.png"
                alt="Image 3"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Row 2 */}
            <div
              data-aos="fade-right"
              className="sm:col-span-2 xl:h-[400px] h-[320px]"
            >
              <img
                src="/assets/recent-project4.png"
                alt="Image 4"
                className="object-cover w-full h-full"
              />
            </div>
            <div
              data-aos="fade-up"
              className="sm:col-span-1 xl:h-[400px] h-[320px]"
            >
              <img
                src="/assets/recent-project5.png"
                alt="Image 5"
                className="object-cover w-full h-full"
              />
            </div>
            <div
              data-aos="fade-left"
              className="sm:col-span-1 xl:h-[400px] h-[320px]"
            >
              <img
                src="/assets/recent-project6.png"
                alt="Image 6"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <button
          data-aos="fade-up"
          className="uppercase font-[700] md:text-[16px] text-[14px] leading-[20.8px] tracking-[2px] rounded-[6px] md:w-[300px] w-[250px] md:h-[64px] h-[54px] px-4 border-[1.5px] border-primaryColor md:mt-[100px] mt-[50px] flex items-center justify-center mx-auto"
        >
          VIEW ALL PROJECTS
        </button>
      </div>
    </section>
  );
};

export default MyRecentProjects;
