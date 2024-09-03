"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="text-black py-10 sm:py-16 font-titleFont w-full overflow-hidden">
      <div className="lg:max-w-screen-xl min-[1800px]:max-w-screen-2xl min-[1800px]:mr-10 lg:mr-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
        <div className="flex flex-col gap-8 min-[1800px]:mr-7 min-[1800px]:ml-0 items-center sm:items-start md:ml-2">
          <div className="flex flex-col gap-7 md:pl-6 md:pt-14 lg:pt-16">
            <p className="lg:text-sm min-[1800px]:text-base md:text-xs tracking-wide text-[#6b6a6a] md:px-0 px-4 md:w-[200px] lg:w-[250px] min-[1800px]:w-[280px] text-center rem sm:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-5">
              <img src="facebook.svg" alt="Facebook" className="h-5 w-5 min-[1800px]:h-7 min-[1800px]:w-7" />
              <img src="instagram.svg" alt="Instagram" className="h-5 w-5 min-[1800px]:h-7 min-[1800px]:w-7" />
              <img src="google.svg" alt="Google" className="h-5 w-5 min-[1800px]:h-7 min-[1800px]:w-7" />
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 lg:ml-48 md:ml-11 md:text-start text-center justify-center">
          <motion.h2
            initial={{
              translateY: 200,
              opacity: 0,
            }}
            whileInView={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
            }}
            className="lg:text-2xl md:text-xl text-lg md:font-normal font-semibold mb-6"
          >
            Home
          </motion.h2>
          <div className="text-base flex md:ml-0 ml-1 flex-col gap-5">
            <motion.p
              initial={{
                translateY: 180,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2"
            >
              Booking
            </motion.p>
            <motion.p
              initial={{
                translateY: 160,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2"
            >
              Facilities
            </motion.p>
            <motion.p
              initial={{
                translateY: 120,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2"
            >
              Location
            </motion.p>
            <motion.p
              initial={{
                translateY: 80,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2"
            >
              Contact
            </motion.p>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 lg:ml-48 md:ml-11 md:text-start text-center justify-center">
          <motion.h2
            initial={{
              translateY: 200,
              opacity: 0,
            }}
            whileInView={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
            }}
            className="lg:text-2xl md:text-xl text-lg md:font-normal font-semibold mb-6"
          >
            Help
          </motion.h2>
          <div className="text-base flex md:ml-0 ml-1 flex-col gap-5">
            <motion.p
              initial={{
                translateY: 180,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2"
            >
              About Us
            </motion.p>
            <motion.p
              initial={{
                translateY: 160,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2"
            >
              Help center
            </motion.p>
            <motion.p
              initial={{
                translateY: 120,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2"
            >
              Privacy policy
            </motion.p>
            <motion.p
              initial={{
                translateY: 80,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2"
            >
              FAQs
            </motion.p>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 md:block hidden lg:ml-24 md:ml-11 md:text-start text-center justify-center">
          <motion.h2
            initial={{
              translateY: 200,
              opacity: 0,
            }}
            whileInView={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
            }}
            className="lg:text-2xl md:text-xl text-lg md:font-normal font-semibold mb-6"
          >
            Get the app
          </motion.h2>
          <div className="text-base flex md:ml-0 ml-1 flex-col gap-5">
            <motion.p
              initial={{
                translateY: 180,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2"
            >
              iOS app
            </motion.p>
            <motion.p
              initial={{
                translateY: 100,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2"
            >
              Android app
            </motion.p>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 md:hidden lg:ml-24 md:ml-11 md:text-start text-center justify-center">
          <motion.h2
            initial={{
              translateY: 100,
              opacity: 0,
            }}
            whileInView={{
              translateY: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
            }}
            className="lg:text-2xl md:text-xl text-lg md:font-normal font-semibold mb-6"
          >
            Get the app
          </motion.h2>
          <div className="text-base flex md:ml-0 ml-1 flex-col gap-5">
            <motion.p
              initial={{
                translateY: 80,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2"
            >
              iOS app
            </motion.p>
            <motion.p
              initial={{
                translateY: 50,
                opacity: 0,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
              }}
              className="cursor-pointer lg:text-base md:text-sm duration-300 transition hover:underline hover:underline-offset-2"
            >
              Android app
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
