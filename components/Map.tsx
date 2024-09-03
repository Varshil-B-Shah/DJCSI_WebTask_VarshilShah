"use client";

const Map = () => {
  return (
    <div className="w-full mt-14 md:mt-10 lg:mt-28 overflow-x-hidden">
      <div className="lg:px-16 md:px-10">
        <div className="z-10 relative">
          <div className="py-8 min-[1800px]:py-12 hidden md:absolute md:w-[600px] lg:w-[1300px] min-[1800px]:w-[1675px] md:bottom-6 lg:bottom-16 md:left-4 lg:left-10 rounded-xl bg-white px-8 md:flex-row flex-col md:flex">
            <div className="flex flex-col lg:flex-1 items-start justify-start gap-6">
              <h2 className="font-semibold md:text-3xl text-xl lg:text-4xl">
                Location of our Hotelos
              </h2>
              <p className="lg:text-base md:text-sm text-xs text-[#6b6a6a] leading-[25px] w-[200px] md:w-[300px] lg:w-[500px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's
              </p>
            </div>
            <div className="md:items-end md:justify-end flex">
              <div className="relative">
                <input
                  className="bg-[#fafafa] md:w-[250px] lg:w-[400px] text-gray-700 rounded-3xl pl-6 text-xs md:text-sm lg:text-base py-3"
                  placeholder="Enter your email"
                />
                <button className="bg-[#24ab70] text-white hover:bg-[#2a9667] transition duration-300 px-6 text-xs md:text-sm lg:text-base py-3 rounded-3xl absolute right-0">
                  Contact
                </button>
              </div>
            </div>
          </div>
          <iframe
            width="100%"
            height="550"
            className="rounded-2xl md:w-full md:h-[550px] h-[200px] w-[300px] md:ml-0 ml-9"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=52.3555,1.1743+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div className="flex flex-col gap-5 md:hidden">
            <div className="flex md:hidden flex-col mt-6 w-full gap-3 items-center justify-center">
              <h2 className="font-semibold text-xl">Location of our Hotelos</h2>
              <p className="text-xs text-[#6b6a6a] leading-[20px] text-center w-[370px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum has been the industry's
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <input
                  className="bg-[#fafafa] w-[250px] rounded-3xl pl-6 text-gray-700 text-xs md:text-sm lg:text-base py-3"
                  placeholder="Enter your email"
                />
                <button className="bg-[#24ab70] text-white px-6 hover:bg-[#2a9667] transition duration-300 text-xs md:text-sm lg:text-base py-3 rounded-3xl absolute right-0">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
