import { FaMapMarkerAlt } from 'react-icons/fa';

export default function MapCustom() {
  return (
    <div className="bg-white pt-12  mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Map + Address */}
        <div className="relative">
          {/* Map */}
          <iframe
            title="Company Location"
            className="w-full h-[500px] "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.89514649598!2d77.33424342677548!3d28.56758579265096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce538fb6f7133%3A0x257f8c6175f5e19e!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1615567588926!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>

          {/* Address Box */}
          <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 w-11/12 max-w-md bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-1">Company Address</h2>
            <a href="#" className="text-[#8E44AD] font-semibold block">Learn2 Earn</a>
            <div className="flex items-start mt-2 text-sm text-gray-700">
              <FaMapMarkerAlt className="mt-1 text-red-500 mr-2" />
              <p>
                123 Tech Park, City, Country Gautam Budh Nagar, Noida (U.P.) – 203207
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white rounded-lg p-4 mr-[120px] md:p-6">
          <h2 className="text-2xl font-bold mb-6 border-b-4 border-black w-fit text-black">Get in Touch</h2>
          <form className="space-y-4 w-[80%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="bg-gradient-to-r from-purple-100 to-blue-100 p-3 rounded-md outline-none w-full placeholder-black"
              />
              <input
                type="tel"
                placeholder="Enter Your Phone No."
                className="bg-gradient-to-r from-purple-100 to-blue-100 p-3 rounded-md outline-none w-full  placeholder-black"
              />
            </div>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-gradient-to-r from-purple-100 to-blue-100 p-3 rounded-md outline-none w-full  placeholder-black"
            />
            <textarea
              rows={4}
              placeholder="Write your message here..."
              className="bg-gradient-to-r from-purple-100 to-blue-100 p-3 rounded-md outline-none w-full  placeholder-black"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-md font-semibold shadow-md hover:opacity-90 transition  placeholder-black" 
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
