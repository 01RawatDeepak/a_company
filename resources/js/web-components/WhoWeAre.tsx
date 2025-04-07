export default function WhoWeAre() {
    return (
        <>
            <div className="bg-white">
                <div className="container py-[80px]">
                    <div className="grid-col-1 sm:grid-col-1 md:grid-col-1 lg:grid-cols-2 gap-4 xl:grid-col-2 gap-4 grid">
                        <div>
                            <img src="/build/assets/web/background/men3.png" className="z-[-1]" alt="" />
                          <img src="" alt="" />  
                        </div>
                        <div>
                            <div className="flex flex-row">
                                <img src="/build/assets/web/background/redline.svg" alt="" />
                                <p className="font-nunito text-sm text-[#5F5A5A] ms-2 uppercase">Who We Are</p>
                            </div>
                            <p className="title_p">
                                Empowering <span className="font-bold title_p"> Innovation, Delivering Excellence.</span>
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
