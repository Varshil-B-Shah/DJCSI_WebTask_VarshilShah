"use client";

import { BsPersonWorkspace } from "react-icons/bs";
import { TbParkingCircle } from "react-icons/tb";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { IoWifiOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GrSwim } from "react-icons/gr";
import { CiDumbbell } from "react-icons/ci";
import { PiDotsThreeOutlineLight } from "react-icons/pi";

const Facilities = () => {

  return (
    <div className="lg:mt-28 mt-14 w-full">
      <div className="lg:px-16 px-3">
        <div className="flex lg:flex-row flex-col lg:gap-7">
          <div className="flex flex-col gap-3 lg:mb-0 mb-5 lg:gap-7 lg:flex-none md:flex md:items-center lg:items-start md:justify-center">
            <h2 className="lg:text-4xl md:text-3xl text-xl font-semibold md:w-[550px] lg:w-[400px] w-[350px] lg:leading-[43px]">
              We do our best facilities provide you
            </h2>
            <p className="lg:text-sm lg:pl-0 md:pl-4 md:text-base text-xs text-[#6b6a6a] md:w-[550px] lg:w-[330px] w-[330px] leading-[24px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry's standard dummy
            </p>
            <button className="text-white  bg-[#24ab70] lg:mt-5 lg:text-sm md:text-base text-xs w-[150px] md:w-[200px] lg:w-[150px] lg:py-3 md:py-4 lg:px-[1.25rem] md:px-7 py-3 px-[1.25rem] hover:bg-[#1e6b4a] hover:text-[#ccf5e3] duration-300 transition rounded-3xl">
              Contact Now
            </button>
          </div>
          <div className="w-full overflow-hidden">
            <div className="lg:flex grid grid-flow-row md:grid-cols-2 flex-col gap-3 lg:gap-7">
              <div className="lg:flex grid grid-cols-2 gap-3 lg:gap-7 justify-center items-center lg:justify-between">
                <div className="border-[#f0ecec] border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl lg:h-[190px] md:h-[190px] h-[150px] w-[170px] md:w-[180px] lg:w-[220px] gap-7 items-center justify-center  flex flex-col">
                  <div className="text-3xl text-[#24ab70]">
                    <BsPersonWorkspace />
                  </div>
                  <p>Private Workspace</p>
                </div>
                <div className="border-[#f0ecec] border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl lg:h-[190px] md:h-[190px] h-[150px] w-[170px] md:w-[180px] lg:w-[220px] gap-7 items-center justify-center  flex flex-col">
                  <div className="text-3xl text-[#24ab70]">
                    <TbParkingCircle />
                  </div>
                  <p>Parking Area</p>
                </div>
                <div className="border-[#f0ecec] border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl lg:h-[190px] md:h-[190px] h-[150px] w-[170px] md:w-[180px] lg:w-[220px] gap-7 items-center justify-center  flex flex-col">
                  <div className="text-3xl text-[#24ab70]">
                    <MdOutlineFreeBreakfast />
                  </div>
                  <p>Breakfast</p>
                </div>
                <div className="border-[#f0ecec] border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl lg:h-[190px] md:h-[190px] h-[150px] w-[170px] md:w-[180px] lg:w-[220px] gap-7 items-center justify-center  flex flex-col">
                  <div className="text-3xl text-[#24ab70]">
                    <IoWifiOutline />
                  </div>
                  <p>Free Wifi</p>
                </div>
              </div>
              <div className="lg:flex grid grid-cols-2 gap-3 lg:gap-7 justify-center items-center lg:justify-between">
                <div className="border-[#f0ecec] border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl lg:h-[190px] md:h-[190px] h-[150px] w-[170px] md:w-[180px] lg:w-[220px] gap-7 items-center justify-center  flex flex-col">
                  <div className="text-3xl text-[#24ab70]">
                    <AiOutlineThunderbolt />
                  </div>
                  <p>Free Electricity</p>
                </div>
                <div className="border-[#f0ecec] border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl lg:h-[190px] md:h-[190px] h-[150px] w-[170px] md:w-[180px] lg:w-[220px] gap-7 items-center justify-center  flex flex-col">
                  <div className="text-3xl text-[#24ab70]">
                    <GrSwim />
                  </div>
                  <p>Swimming Pool</p>
                </div>
                <div className="border-[#f0ecec] border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl lg:h-[190px] md:h-[190px] h-[150px] w-[170px] md:w-[180px] lg:w-[220px] gap-7 items-center justify-center  flex flex-col">
                  <div className="text-3xl text-[#24ab70]">
                    <CiDumbbell />
                  </div>
                  <p>Exercise Space</p>
                </div>
                <div className="border-[#f0ecec] border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer rounded-xl lg:h-[190px] md:h-[190px] h-[150px] w-[170px] md:w-[180px] lg:w-[220px] gap-7 items-center justify-center  flex flex-col">
                  <div className="text-3xl text-[#24ab70]">
                    <PiDotsThreeOutlineLight />
                  </div>
                  <p>Other Service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
