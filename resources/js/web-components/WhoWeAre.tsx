export default function WhoWeAre() {
    return (
        <>
            <div className="bg-white">
                <div className="container py-[80px]">
                    <div className="grid-col-1 sm:grid-col-1 md:grid-col-1 xl:grid-col-2 grid gap-4 lg:grid-cols-2">
                        <div className="relative">
                            <div className="flex justify-center">
                                <img src="/build/assets/web/background/S2.png" className="" alt="" />
                            </div>
                            <img src="/build/assets/web/background/search.svg" className="absolute top-10 left-0" alt="" />
                            <div className="absolute bottom-[-30px] left-30 w-[300px] rounded-md bg-[#ffffffbd] p-4 shadow-sm">
                                <p className="text-purple-600">Mission</p>
                                <p className="text-black">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium excepturi, sapiente necessitatibus enim
                                    nobis commodi!
                                </p>
                                <div className="flex justify-end">
                                    <img src="/build/assets/web/background/shield.svg" alt="" />
                                </div>
                            </div>
                            <div className="w-52 rounded-xl bg-gradient-to-b from-white to-slate-100 p-4 shadow-lg absolute top-0 right-0">
                                <div className="mb-4 flex items-center justify-between">
                                    <h3 className="text-sm font-semibold text-gray-800">Client Satisfaction</h3>
                                    {/* <span className="text-lg text-gray-500">{'>'}</span> */}
                                </div>

                                {/* Circular percentage */}
                                <div className="flex items-center justify-center">
                                    <div className="relative h-24 w-24">
                                        <svg className="absolute top-0 left-0 h-full w-full">
                                            <circle cx="50%" cy="50%" r="40%" stroke="#EF4444" strokeWidth="6" fill="none" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-red-500">100%</div>
                                    </div>
                                </div>

                                {/* Text Details */}
                                <div className="mt-4 text-sm">
                                    <div className="flex justify-between text-gray-700">
                                        <span>Code Efficiency</span>
                                        <span className="font-medium text-purple-600">100%</span>
                                    </div>
                                    <div className="flex justify-between text-gray-700">
                                        <span>Code Maintainability</span>
                                        <span className="font-medium text-purple-600">100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row">
                                <img src="/build/assets/web/background/redline.svg" alt="" />
                                <p className="font-nunito ms-2 text-sm text-[#5F5A5A] uppercase">Who We Are</p>
                            </div>
                            <p className="title_p">
                                Empowering <span className="title_p font-bold"> Innovation, Delivering Excellence.</span>
                            </p>
                            <p className="p_text">
                                We are a leading software development company dedicated to delivering high-quality, customized solutions. With years
                                of expertise, we turn business challenges into scalable software products.
                            </p>
                            <button className="custom_btn">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
