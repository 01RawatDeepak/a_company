import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const slides = [
  {
    heading: 'Transforming Ideas into',
    highlight: 'Scalable Digital Solutions',
    description:
      'We specialize in crafting innovative web and mobile applications that drive business growth.',
    image: '/build/assets/web/background/hero3.png',
    image1: '/build/assets/web/background/featureimage.jpg',
  },
  {
    heading: 'Innovative Solutions for',
    highlight: 'Modern Businesses',
    description:
      'From startups to enterprises, we deliver custom digital solutions that make an impact.',
    image: '/build/assets/web/background/hero2.png',
  },
  {
    heading: 'Build Smarter, Go Further with',
    highlight: 'Next-Gen Technology',
    description:
      'We help you stay ahead with cutting-edge tools and agile methodologies.',
    image: '/build/assets/web/background/hero1.png',
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      autoplay={false}
      loop={true}
      className="h-auto w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative pb-12 w-full bg-gradient-to-r from-purple-100 to-blue-100 bg-[url('/build/assets/web/background/bg-banner1.png')] bg-cover bg-center px-4 pt-16 md:px-12 sm:pb-12 lg:min-h-full lg:pb-0 flex items-center">
            <div className="container mx-auto flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
              {/* Left Content */}
              <div className="text-center md:w-1/2 md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                  {slide.heading} <br />
                  <span className="primary_bg mt-4 bg-clip-text text-transparent">
                    {slide.highlight}
                  </span>
                </h1>
                <p className="mt-4 text-base font-medium text-purple-600 md:text-lg">
                  {slide.description}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
                  <button className="custom_btn">Get a Quote ↗</button>
                  <button className="rounded-lg border border-purple-500 px-6 py-3 text-purple-500 shadow-md transition hover:bg-purple-500 hover:text-white">
                    Explore Our Work ↗
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative w-full md:w-1/2 flex justify-center items-center">
                <img
                  src={slide.image}
                  alt="Hero"
                  className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] object-contain"
                />

                {slide.image1 && (
                  <img
                    src={slide.image1}
                    alt=""
                    className="absolute slide-in-from-bottom-20 right-[-60px] w-36 h-20 rounded-xl shadow-lg shadow-purple-300 sm:w-48 sm:h-28 md:w-60 md:h-32 lg:w-72 lg:h-40"
                  />
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
