"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Data array for services
const projectsData = [
  {
    id: 1,
    title: "Indoor Project Phase-B",
    imgSrc: "/assets/completed-project1.png",
  },
  {
    id: 2,
    title: "Indoor Project Phase-A",
    imgSrc: "/assets/completed-project2.png",
    video: true,
  },
  {
    id: 3,
    title: "Indoor Project Phase-C",
    imgSrc: "/assets/completed-project3.png",
  },
  {
    id: 4,
    title: "Indoor Project Phase-A",
    imgSrc: "/assets/completed-project2.png",
    video: true,
  },
  // Add more services as needed
];

const CompletedProjects = () => {
  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets and small laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-color-bg px-4 overflow-hidden">
      <div className="md:py-[160px] py-[60px] max-w-[1280px] mx-auto overflow-hidden">
        {/* About Text Section */}
        <div className="mb-[50px] pt-[20px]">
          <h1
            data-aos="fade-right"
            className="sm:text-[56px] text-[40px] sm:leading-[67.37px] leading-[50px] font-[600] text-primaryColor mb-[23px] mt-[6px] text-center"
          >
            Completed Projects
          </h1>
          <p
            data-aos="fade-up"
            className="max-w-[1011px] mx-auto text-secondaryColor md:text-[20px] text-[19px] font-[400] leading-[30px] text-center"
          >
            Recently completed a modern home renovation that seamlessly blends
            contemporary aesthetics with functional living spaces, reflecting
            the client’s unique style.
          </p>
        </div>

        {/* Slick Slider */}
        <Slider {...settings} className="mt-[50px]">
          {projectsData.map((project) => (
            <div data-aos="fade-up" key={project.id} className="p-[10px]">
              <div className="rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="w-full max-h-[700px] object-cover rounded-[40px]"
                  />
                  {project.video && (
                    <button className="absolute inset-0 flex items-center justify-center z-[3]">
                      <Image
                        className="pointer"
                        width={162}
                        height={162}
                        src="/assets/play-button.svg"
                        alt="Play Button"
                      />
                    </button>
                  )}
                </div>
                <div className="p-[10px] pt-[30px] text-center">
                  <h3 className="xl:text-[32px] lg:text-[28px] md:text-[26px] text-[24px] font-[500] text-primaryColor leading-[38.4px] mb-[20px]">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompletedProjects;
