export default function TechWeUse() {
    return (
        <>
            <div className="relative w-full overflow-hidden">
                <div className="absolute inset-0 scale-110 bg-[url('/build/assets/web/background/bg-3.svg')] bg-cover bg-center blur-md filter"></div>
                <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>
                <div className="relative z-10 py-20">
                    <div className="container">
                        <div className="grid-col-1 sm:grid-col-1 md:grid-col-1 xl:grid-col-2 grid gap-4 lg:grid-cols-2">
                            <div>
                                <div className="flex flex-row">
                                    <img src="/build/assets/web/background/redline.svg" alt="" />
                                    <p className="title_p mb-0">
                                        Technologies <span className="title_p font-bold">We Use</span>
                                    </p>
                                </div>

                                <p className="p_text">
                                    We work with the latest technologies to build secure, scalable, and high-performance application. We leverage
                                    cutting-edge technologies to deliver robust software solutions. Our team uses a combination of modern programming
                                    languages, frameworks, and tools such as JavaScript, Python, React, Angular, and cloud platforms. We ensure your
                                    software is scalable, secure, and future-ready.
                                </p>
                            </div>
                            <div>
                                <img src="/build/assets/web/background/tech.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
