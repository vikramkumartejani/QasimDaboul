import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#FCF3E7] w-full px-4 overflow-hidden">
      <div className="md:py-[100px] py-[40px] max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between md:flex-row flex-col border-b border-[#20202033] pb-12 gap-4">
          <h1
            data-aos="fade-right"
            className="text-[#000000] text-[30px] font-bold leading-[47px] font-abhaya"
          >
            QasimDaboul
          </h1>
          <ul
            data-aos="fade-up"
            className="flex items-center flex-wrap justify-center gap-4 text-[18px] text-[#202020]"
          >
            <li>
              <Link href="/#home" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="">
                About
              </Link>
            </li>
            <li>
              <Link href="/#services" className="">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#projects" className="">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/#testimonials" className="">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="pt-12 flex items-center justify-between sm:flex-row flex-col gap-5">
          <h3 className="text-[18px] text-[#202020] font-normal text-center">
            © Copyright QasimDaboul – All Rights Reserved
          </h3>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/assets/facebook.svg"
                alt="facebook"
                width={35}
                height={35}
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/twitter.svg"
                alt="facebook"
                width={35}
                height={35}
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/linkedin.svg"
                alt="facebook"
                width={35}
                height={35}
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/instagram.svg"
                alt="facebook"
                width={35}
                height={35}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
