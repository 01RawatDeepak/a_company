import { useState } from "react";
import { FaBars, FaTimes, FaComments } from "react-icons/fa";
import { Link } from "@inertiajs/react";

export default function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = (menu: string) => {
        setDropdownOpen(dropdownOpen === menu ? null : menu);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-5 xl:px-0">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        LEARN2EARN
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden text-2xl text-orange-500 hover:bg-orange-800" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex space-x-6 text-gray-700 items-center">
                        <li>
                            <Link href="/" className="hover:text-red-500">
                                Home
                            </Link>
                        </li>

                        <li className="relative">
                            <button
                                onClick={() => toggleDropdown("about")}
                                className="hover:text-red-500 flex items-center"
                            >
                                About Us ▾
                            </button>
                            {dropdownOpen === "about" && (
                                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/why-us">Why Us</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li className="relative">
                            <button
                                onClick={() => toggleDropdown("services")}
                                className="hover:text-red-500 flex items-center"
                            >
                                Our Services ▾
                            </button>
                            {dropdownOpen === "services" && (
                                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md">
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/our-work">Our Work</Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100">
                                        <Link href="/technologies">Technologies</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link href="/blog" className="hover:text-red-500  mr-5">
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                className="relative flex items-center bg-gradient-to-r from-[#9B5DFF] to-[#438FFE] text-white font-medium pl-14 pr-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
                            >
                                {/* Icon Container */}
                                <div className="absolute left-0 -ml-3 bg-white p-2 rounded-full shadow-md flex items-center justify-center w-10 h-10">
                                    <FaComments className="text-[#9B5DFF]" size={20} />
                                </div>

                                {/* Vertical Separator */}
                                <div className="w-[1px] h-6 bg-white opacity-50 mx-2"></div>

                                {/* Text */}
                                <span>Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <ul className="lg:hidden flex flex-col space-y-2 text-gray-700 mb-5">
                        <li>
                            <Link href="/" className="block py-2 px-4 hover:bg-gray-100">
                                Home
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => toggleDropdown("about")}
                                className="w-full text-left py-2 px-4 hover:bg-gray-100"
                            >
                                About Us ▾
                            </button>
                            {dropdownOpen === "about" && (
                                <ul className="pl-4">
                                    <li className="py-2 px-4 hover:bg-gray-100">
                                        <Link href="/why-us">Why Us</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <button
                                onClick={() => toggleDropdown("services")}
                                className="w-full text-left py-2 px-4 hover:bg-gray-100"
                            >
                                Our Services ▾
                            </button>
                            {dropdownOpen === "services" && (
                                <ul className="pl-4">
                                    <li className="py-2 px-4 hover:bg-gray-100">
                                        <Link href="/our-work">Our Work</Link>
                                    </li>
                                    <li className="py-2 px-4 hover:bg-gray-100">
                                        <Link href="/technologies">Technologies</Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link href="/blog" className="block py-2 px-4 hover:bg-gray-100">
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                className="w-90 relative flex items-center bg-gradient-to-r from-[#9B5DFF] to-[#438FFE] text-white font-medium pl-14 pr-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
                            >
                                {/* Icon Container */}
                                <div className="absolute left-0 -ml-3 bg-white p-2 rounded-full shadow-md flex items-center justify-center w-10 h-10">
                                    <FaComments className="text-[#9B5DFF]" size={20} />
                                </div>

                                {/* Vertical Separator */}
                                <div className="w-[1px] h-6 bg-white opacity-50 mx-2"></div>

                                {/* Text */}
                                <span>Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
