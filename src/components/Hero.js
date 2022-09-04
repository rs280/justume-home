import React from "react";

// import images
import Image from "../assets/img/hero-img.png";
import Logo from "../assets/img/logo.png";
// import icons
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Hero = () => {
  return (
    <section>
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          
          {/* hero text */}
          <div className="flex-1">
           
            {/* title */}
            <h1
              className="text-[32px] lg:text-[64px] font-bold leading-tight mb-6"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              The most secure chat you will ever use
            </h1>
            <image src={Logo} alt="logo" />
            <h2
              className="text-[16px] lg:text-[32px] font-bold leading-tight mb-6"
              data-aos="fade-down"
              data-aos-delay="500"
            >
             Powered by the blockchain
            </h2>
            <p
              className="max-w-[440px] leading-relaxed mb-8"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Chat with anywhere, anytime, and on any device. Your messages and
              files are secured with end-to-end encryption, and
              are only accessible to you and the people you choose.
            </p>
            <button
              className="btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base"
              data-aos="fade-down"
              data-aos-delay="700"
              onClick={() => window.open("https://justumechat.hop.sh/")}
            >
              Try for free
              <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
            </button>
          </div>
          {/* hero image */}
          <div className="flex-1">
            <img src={Image} alt="" data-aos="fade-up" data-aos-delay="600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
