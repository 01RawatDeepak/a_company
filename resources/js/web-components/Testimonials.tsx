import { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

interface TestimonialItem {
    name: string;
    text: string;
    image: string;
}

const testimonials: TestimonialItem[] = [
    {
        name: 'Sarah L., Founder of E-ShopX',
        text: `Their team delivered a fantastic solution, exceeding our expectations. Highly recommended! Exceptional service, attention to detail, and prompt delivery. Truly a game-changer for our business!`,
        image: '/build/assets/web/background/test1.png',
    },
    {
        name: 'Anna, Founder of E-ShopX',
        text: `Delivered a fantastic solution, exceeding our expectations. Exceptional service and professionalism.`,
        image: '/build/assets/web/background/test.png',
    },
];

export default function Testimonial() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    // Assign refs once DOM is ready
    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            // @ts-ignore
            swiperInstance.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <div className="bg-white">
            <div className="relative mx-auto max-w-6xl px-4 py-10">
                <Swiper modules={[Navigation]} slidesPerView={1} onSwiper={setSwiperInstance} className="w-full">
                    {testimonials.map((item, idx) => (
                        <SwiperSlide key={idx} className="p-3">
                            <div className="rounded-2xl border border-gray-100 shadow-lg">
                                <div className="grid grid-cols-1 items-center gap-6 overflow-hidden rounded-xl bg-white md:grid-cols-2">
                                    <div className="relative flex justify-center">
                                        <img src={item.image} alt={item.name} className="h-[350px] w-full rounded-md object-cover" />
                                    </div>

                                    <div className="p-6 text-left">
                                        <h3 className="text-lg font-semibold text-gray-900">- {item.name}</h3>
                                        <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <button
                    ref={prevRef}
                    className="swiper-button-prev-custom absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded bg-white p-2 shadow-md hover:bg-blue-100"
                >
                    <FaArrowLeft className="text-orange-500" />
                </button>
                <button
                    ref={nextRef}
                    className="swiper-button-next-custom absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded bg-white p-2 shadow-md hover:bg-blue-100"
                >
                    <FaArrowRight className="text-orange-500" />
                </button>
            </div>
        </div>
    );
}
