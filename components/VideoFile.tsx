import { FaPlay } from "react-icons/fa";

const VideoFile = () => {
  return (
    <div className="my-4 lg:h-[656px] md:h-auto h-auto lg:mx-16 md:mx-10 bg-[#f8fcfc] rounded-t-[4rem]">
      <div className="lg:grid md:flex flex lg:grid-flow-col lg:grid-cols-1">
        <div className="flex flex-col lg:pt-20 pt-10 md:pt-16 lg:pl-24 pl-7 md:pl-9 lg:gap-8 md:gap-6 gap-2">
          <h1 className="lg:text-7xl md:text-3xl text-base lg:leading-[85px] font-semibold">
            Find your perfect place to stay
          </h1>
          <p className="lg:text-xl md:text-sm text-[0.6rem] text-[#555555] lg:w-[600px] md:w-[250px] md:leading-[20px] lg:leading-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <p className="lg:hidden md:flex flex group md:gap-3 gap-2">
            <span className="text-[#28ac74] md:text-sm text-xs lg:p-5 md:p-4 pt-2 bg-white rounded-full group-hover:scale-125 duration-300 transition-all overflow-hidden cursor-pointer">
              <FaPlay />
            </span>
            <span className="lg:pt-4 md:pt-3 pt-2 lg:text-base md:text-[0.9rem] text-[0.5rem] group-hover:scale-105 duration-300 group-hover:text-green-500 group-hover:underline group-hover:underline-offset-1">
              Watch Video 
            </span>
          </p>
        </div>
        <div className="group">
          <div className="overflow-hidden">
            <img
              src="Tasks1.png"
              alt="Tasks1"
              className="scale-100 cursor-pointer group-hover:scale-105 duration-300 transition-all"
            />
          </div>
          <p className="lg:flex gap-4 hidden text-xl font-semibold lg:text-base cursor-pointer text-center group lg:relative md:relative md:bottom-[10rem] md:right-[17.55rem] lg:bottom-[16.2rem] lg:right-[41.05rem]">
            <span className="text-[#28ac74] md:text-sm lg:p-5 md:p-4 bg-white rounded-full group-hover:scale-125 duration-300 transition-all overflow-hidden cursor-pointer">
              <FaPlay />
            </span>
            <span className="lg:pt-4 md:pt-3 lg:text-base md:text-[0.9rem] group-hover:scale-105 duration-300 group-hover:text-green-500 group-hover:underline group-hover:underline-offset-1">
              Watch Video
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoFile;
