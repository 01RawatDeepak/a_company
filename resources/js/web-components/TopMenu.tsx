import { Head } from '@inertiajs/react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin,FaEnvelope  } from "react-icons/fa";
export default function TopMenu() {
    return (
        <div className="bg-purple-500 text-white py-2 px-4">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                {/* Left Section - Contact Info */}
                <div className="flex items-center space-x-4 text-sm">
                    <FaWhatsapp />
                    <span className='hover:text-orange-500'>+1 234 567 890</span>
                    <span className="hidden sm:inline">|</span>
                    <FaEnvelope className="hidden sm:inline" />
                    <span className="hidden hover:text-orange-500 sm:inline">contact@Learn2earn@gmail.com</span>
                </div>

                {/* Right Section - Social Media */}
                <div className="flex items-center space-x-3 mt-2 sm:mt-0">
                    <span className="hidden sm:inline">Follow Us</span>
                    <FaLinkedin className="cursor-pointer hover:text-orange-500" />
                    <FaFacebook className="cursor-pointer hover:text-orange-500" />
                    <FaInstagram className="cursor-pointer hover:text-orange-500" />
                </div>
            </div>
        </div>
    );
}