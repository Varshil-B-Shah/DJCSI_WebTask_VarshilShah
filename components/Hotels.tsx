"use client";

import { ReactNode, useEffect } from "react";

import { motion } from "framer-motion";

import { FaStar } from "react-icons/fa";

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      img: "Tasks2.png",
      location: "London NW8 7JT England",
      name: "Danubius Hotel Regents Park",
      price: "$200 Per Night",
      rating: 4.8,
      ratingStars: [true, true, true, true, false],
    },
    {
      id: 2,
      img: "Tasks4.png",
      location: "London NW8 7JT England",
      name: "The Resident Soho",
      price: "$200 Per Night",
      rating: 4.8,
      ratingStars: [true, true, true, true, false],
    },
    {
      id: 3,
      img: "Tasks3.png",
      location: "London NW8 7JT England",
      name: "London Bridge Hotel",
      price: "$200 Per Night",
      rating: 4.8,
      ratingStars: [true, true, true, true, false],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll<HTMLElement>(".pop-in");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          element.classList.add("visible");
        }
      });
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:mt-24 md:mt-8 mt-6 mb-4 w-full px-4 md:px-8 lg:px-16">
      <div className="flex">
        <div className="items-start justify-start flex-1">
          <div className="flex flex-col gap-[0.5rem] md:gap-[1rem] lg:gap-[1.25rem]">
            <h1 className="font-semibold text-lg md:text-2xl lg:text-4xl">Our most popular Hotels</h1>
            <p className="md:text-sm text-xs text-[#6b6a6a] leading-[16px] w-[240px] md:w-[400px] md:leading-[27px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
        </div>
        <div className="items-end justify-end mt-10 md:pt-5 lg:pt-16">
          <button className="bg-[#eaf7f1] hover:bg-[#24ab70] px-3 md:px-5 py-1 md:py-2 text-[#24ab70] hover:text-[#eaf7f1] rounded-3xl text-xs md:text-sm transition-all duration-300">
            View All
          </button>
        </div>
      </div>

      <div className="mt-5 pop-in">
        <div className="flex md:flex-row flex-col gap-5 md:gap-4 lg:gap-7">
          {hotels.map((hotel) => (
            <div className="flex cursor-pointer overflow-hidden hover:scale-105 transition duration-300 flex-col rounded-xl bg-[#f3efef] h-auto md:w-[33%] lg:w-[33%] gap-2 md:gap-1 pb-6">
              <img src={hotel.img} alt="Task 2" className="object-contain" />
              <div className="px-3">
                <p className="text-xs text-[#24ab6f] mt-5">{hotel.location}</p>
                <h2 className="font-semibold lg:text-2xl md:text-lg text-lg mt-1">{hotel.name}</h2>
                <div className="flex lg:gap-6 md:gap-2 gap-3 mt-4">
                  <p className="lg:text-base md:text-xs text-sm text-[#2c2c2c]">{hotel.price}</p>
                  <p className="text-[#dddddd]">|</p>
                  <div className="flex gap-1">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%",
                      }}
                    >
                      <FaStar className="text-[#f95f5f] lg:text-base md:text-sm mt-1" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%",
                      }}
                    >
                      <FaStar className="text-[#f95f5f] lg:text-base md:text-sm mt-1" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%",
                      }}
                    >
                      <FaStar className="text-[#f95f5f] lg:text-base md:text-sm mt-1" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%",
                      }}
                    >
                      <FaStar className="text-[#f95f5f] lg:text-base md:text-sm mt-1" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      whileTap={{
                        scale: 0.8,
                        rotate: -90,
                        borderRadius: "100%",
                      }}
                    >
                      <FaStar className="text-[#dedcdc] lg:text-base md:text-sm mt-1" />
                    </motion.div>
                    <p className="mt-[2px] lg:text-base md:text-sm ml-2">{hotel.rating}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;
