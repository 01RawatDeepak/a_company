import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#9B5DFF] text-white">
            <div className="container">
                <div className="grid grid-cols-1 items-start gap-10 px-6 py-12 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-3">
                            <span className="text-3xl font-bold tracking-wide">LE△RN2EARN</span>
                        </div>
                        <p className="mt-4 text-sm text-white/90">
                            Fast, flexible, and result-driven approach to deliver high-quality, impactful, and innovative solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold underline underline-offset-4">Quick Links</h3>
                        <div className="flex flex-wrap gap-3">
                            <a href="#" className="rounded border border-white px-4 py-2 text-sm hover:bg-white hover:text-[#8E44AD]">
                                About Us
                            </a>
                            <a href="#" className="rounded border border-white px-4 py-2 text-sm hover:bg-white hover:text-[#8E44AD]">
                                Services
                            </a>
                            <a href="#" className="rounded border border-white px-4 py-2 text-sm hover:bg-white hover:text-[#8E44AD]">
                                Contact Us
                            </a>
                            <a href="#" className="rounded border border-white px-4 py-2 text-sm hover:bg-white hover:text-[#8E44AD]">
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold underline underline-offset-4">Social Media</h3>
                        <div className="flex gap-4">
                            <a href="#" className="rounded-full bg-white p-2 text-[orange] transition hover:scale-110">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="#" className="rounded-full bg-white p-2 text-[orange] transition hover:scale-110">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="rounded-full bg-white p-2 text-[orange] transition hover:scale-110">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/20 py-4 text-center text-sm">
                    © Copyright 2025 Learn2Earn | Designed & Maintained by Learn2Earn
                </div>
            </div>
        </footer>
    );
}
