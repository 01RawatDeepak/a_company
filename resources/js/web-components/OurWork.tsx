export default function OurWork() {
    const works = [
        {
            title: 'E-Commerce Platforms',
            image: '/build/assets/web/work/ecommerce.png',
        },
        {
            title: 'Enterprise Solutions',
            image: '/build/assets/web/work/enterprise.png',
        },
        {
            title: 'Healthcare Applications',
            image: '/build/assets/web/work/healthcare.png',
        },
        {
            title: 'Education Management Systems',
            image: '/build/assets/web/work/education.png',
        },
        {
            title: 'Fintech Solutions',
            image: '/build/assets/web/work/fintech.png',
        },
    ];

    return (
        <div className="bg-white py-16">
            <div className="container">
                <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-10">
                    {/* Heading */}
                    <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-semibold whitespace-nowrap text-gray-900">
                            Our <span className="font-bold text-black">Work</span>
                        </h2>

                        {/* Vertical Line */}
                        <div className="hidden h-10 w-[1px] bg-gray-300 md:block" />
                    </div>

                    {/* Paragraph */}
                    <p className="max-w-2xl text-base leading-relaxed text-gray-600">
                        Explore our diverse portfolio showcasing innovative projects across various industries. From custom web and mobile
                        applications to AI-driven solutions, our work reflects our commitment to quality and creativity.
                    </p>

                    {/* Button on right for large screens */}
                    <div className="mt-4 md:mt-0 md:ml-auto">
                        <button className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:opacity-90">
                            View Our Portfolio
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                    {works.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="mb-4 flex h-36 items-center justify-center">
                                <img src={item.image} alt={item.title} className="max-h-full object-contain" />
                            </div>
                            <h3 className="text-center text-sm font-semibold text-gray-800">{item.title}</h3>
                            <span className="absolute bottom-0 left-0 h-[4px] w-full origin-left scale-x-0 rounded-b-xl bg-gradient-to-r from-purple-500 to-blue-500 transition-transform duration-300 group-hover:scale-x-100" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
