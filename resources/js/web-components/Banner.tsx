import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full h-auto"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative bg-gradient-to-r from-purple-100 to-blue-100 w-full h-auto pt-16 px-4 md:px-12 bg-[url(/build/assets/web/background/bg-banner1.png)] w-full h-[800px]  bg-cover">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Transforming Ideas into <br />
                <span className="bg-clip-text text-transparent primary_bg mt-4">
                  Scalable Digital Solutions
                </span>
              </h1>
              <p className="text-purple-500 mt-4 font-bold md:text-lg">
                We specialize in crafting innovative web and mobile applications that drive business growth.
              </p>
              <div className="mt-6 flex justify-center md:justify-start gap-4">
                <button className="custom_btn">
                  Get a Quote ↗
                </button>
                <button className="border border-purple-500 px-6 py-3 rounded-lg text-purple-500 shadow-md hover:bg-purple-500 hover:text-white transition">
                  Explore Our Work ↗
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
              <img src="/build/assets/web/background/hero3.png" alt="Hero" className="w-[100%]  h-[600px]" />
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative bg-gradient-to-r from-green-100 to-yellow-100 w-full h-auto pt-16 px-4 md:px-12 w-full h-[800px]  bg-cover">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Build with <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500 mt-4">
                  Cutting-Edge Technology
                </span>
              </h1>
              <p className="text-green-500 mt-4 font-bold md:text-lg">
                Our expert team delivers top-notch software solutions tailored to your business needs.
              </p>
              <div className="mt-6 flex justify-center md:justify-start gap-4">
                <button className="bg-gradient-to-r from-green-500 to-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
                  Contact Us ↗
                </button>
                <button className="border border-green-500 px-6 py-3 rounded-lg text-green-500 shadow-md hover:bg-green-500 hover:text-white transition">
                  View Case Studies ↗
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
              <img src="/build/assets/web/background/hero2.png" alt="Hero" className="w-[100%] h-[600px]" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
