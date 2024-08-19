import { LuDribbble } from "react-icons/lu";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="text-black py-10 sm:py-16 font-titleFont w-full overflow-hidden">
      <div className="max-w-screen-xl lg:mr-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-8 md:gap-2">
        <div className="flex flex-col gap-8 items-center sm:items-start md:ml-2">
          <div className="flex flex-col gap-7 md:pl-6 md:pt-14 lg:pt-16">
            <p className="lg:text-sm md:text-xs tracking-wide text-[#6b6a6a] md:w-[200px] lg:w-[250px] text-center rem sm:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-5">
              <img src="facebook.svg" alt="Facebook" className="h-5 w-5"/>
              <img src="instagram.svg" alt="Instagram" className="h-5 w-5"/>
              <img src="google.svg" alt="Google" className="h-5 w-5"/>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 lg:ml-48 md:ml-11 md:text-start text-center justify-center">
          <h2 className="lg:text-2xl md:text-xl text-lg md:font-normal font-semibold mb-6">Home</h2>
          <div className="text-base flex md:ml-0 ml-1 flex-col gap-5">
            <p className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2">
              Booking
            </p>
            <p className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2">
              Facilities
            </p>
            <p className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2">
              Location
            </p>
            <p className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2">
              Contact
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 lg:ml-20 md:ml-5 md:text-start text-center justify-center">
          <h2 className="lg:text-2xl md:text-xl text-lg md:font-normal font-semibold mb-6">Help</h2>
          <div className="text-base flex md:ml-0 ml-1 flex-col gap-5">
            <p className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2">
              About Us
            </p>
            <p className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2">
              Help center
            </p>
            <p className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2">
              Privacy policy
            </p>
            <p className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2">
              FAQs
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 md:text-start text-center justify-center">
          <h2 className="lg:text-2xl md:text-xl text-lg md:font-normal font-semibold mb-6">
            Get the app
          </h2>
          <div className="text-base flex md:ml-0 ml-1 flex-col gap-5">
            <p className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2">
              iOS app
            </p>
            <p className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2">
              Android app
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
