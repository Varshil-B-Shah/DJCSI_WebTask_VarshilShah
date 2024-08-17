import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className="w-full h-24 p-4">
      <div className="pl-2 pr-8 pb-5 pt-2 flex justify-around lg:gap-32 md:gap-12 gap-5 md:h-auto h-20">
        <div className="lg:text-3xl hidden md:block md:text-xl text-2xl font-bold md:w-auto w-[600px]">LOREM IPSUM</div>
        <div className="lg:pt-2 lg:pb-0 md:flex hidden md:pb-4 lg:mr-14 text-center justify-around items-center">
          <ul className="flex lg:gap-12 md:gap-5 lg:text-base md:text-sm lg:items-center">
            <li>Booking</li>
            <li>Facilities</li>
            <li>About Us</li>   
            <li>Location</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button className="py-2 md:block hidden lg:mt-1 md:mb-3 lg:mb-0 px-4 rounded-3xl bg-[#28ac74] hover:bg-green-600 duration-300 text-white md:text-sm">
            Login
          </button>
        </div>
        <div className="h-20 items-start justify-end py-3 md:hidden flex gap-11">
        <div className="w-auto">
        <div className="text-xl font-bold md:w-auto w-[200px]">LOREM IPSUM</div>
        </div>
        <div>
          <div className="dropdown">
            <button className="dropbtn relative bottom-2 left-4">
              <IoMdArrowDropdown />
            </button>
            <div className="dropdown-content">
              <a href="/">Booking</a>
              <a href="/">Facilities</a>
              <a href="/">About Us</a>
              <a href="/">Location</a>
              <a href="/">Contact</a>
              <a href="/" className="flex bg-[#28ac74] text-white hover:text-black rounded-md duration-300 justify-center items-center" id="button">
                Login{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
