export default function Service() {
    const services = [
        {
            title: 'Web Development',
            desc: 'Scalable and high-performing web applications. Transform your online presence with our expert web development solutions.',
            icon: '/build/assets/web/background/m1.svg',
        },
        {
            title: 'Mobile App Development',
            desc: 'Android & iOS apps with user-friendly interfaces. Unified performance and modern tech tailored for mobile.',
            icon: '/build/assets/web/background/m2.svg',
        },
        {
            title: 'AI & Machine Learning',
            desc: 'Unlock business potential with AI & ML. Improve operations, boost data-driven decisions, and automate intelligently.',
            icon: '/build/assets/web/background/m3.svg',
        },
        {
            title: 'Cloud Solutions',
            desc: 'Secure, scalable cloud services. Power business operations with efficient infrastructure and seamless backup.',
            icon: '/build/assets/web/background/m4.svg',
        },
        {
            title: 'UI/UX Design',
            desc: 'Design that converts. Elevate user experience with intuitive, engaging, and functional UI/UX.',
            icon: '/build/assets/web/background/m5.svg',
        },
    ];

    return (
        <div className="relative w-full overflow-hidden">         
            <div className="absolute inset-0 scale-110 bg-[url('/build/assets/web/background/bg-3.svg')] bg-cover bg-center blur-md filter"></div>
            <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>
            <div className="relative z-10 py-20">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl font-bold text-gray-900">
                            Our <span className="text-gradient">Services</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-gray-600">
                            We offer a range of development services tailored to your business needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, idx) => (
                            <div key={idx} className="rounded-2xl shadow-lg">
                                {/* Gradient Border */}
                                <div className="group h-full rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] shadow-md transition-all duration-300">
                                    {/* Inner content with white background */}
                                    <div className="h-full rounded-xl bg-white p-5 transition-all duration-300 group-hover:bg-white/90 sm:p-6">
                                        <div className="mb-4 h-12 w-12 sm:h-14 sm:w-14">
                                            <img src={service.icon} alt={service.title} className="h-full w-full object-contain" />
                                        </div>
                                        <h3 className="mb-2 text-lg font-bold text-gray-800 sm:text-xl">{service.title}</h3>
                                        <p className="text-sm text-gray-600 sm:text-base">{service.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
