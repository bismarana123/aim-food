import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // Framer Motion for animations

// Counter Component with Animation
const Counter = ({ label, targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetNumber;
    if (start === end) return;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, 20);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <motion.div
      className="text-center p-4"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold text-red-500">{count}</h2>
      <p className="text-lg font-semibold">{label}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="bg-gray-100">
      {/* Title Section */}
      <motion.div
        className="text-center py-8 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="font-semibold text-3xl md:text-4xl pb-6">About our Food</h3>
        <h1 className="font-semibold text-4xl md:text-6xl px-4 md:px-[15%] pb-6">
          Best burger ideas & traditions from the whole world
        </h1>
        <p className="px-4 md:px-[9%]">
          The mouth-watering aroma of sizzling burgers now fills the streets of
          Birmingham thanks to the passionate pursuit of three brothers.
        </p>
      </motion.div>

      {/* Image & Button */}
      <div className="flex flex-col md:flex-row justify-between text-center items-center px-4 md:px-[20%]">
        <motion.div
          className="w-full md:w-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img src="/images/wingfries.png" className="w-full max-w-md mx-auto" alt="" />
        </motion.div>
        <motion.div
          className="mt-4 md:mt-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <button className="bg-red-500 p-4 rounded-lg text-white font-semibold text-md hover:bg-red-700 transition duration-300">
            About our Food
          </button>
        </motion.div>
      </div>

      {/* Video Section */}
      <motion.div
        className="px-4 md:px-[10%] mt-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <video
          className="elementor-video rounded-xl w-full"
          src="http://aimfoods.online/wp-content/uploads/2024/12/WhatsApp-Video-2024-12-24-at-5.44.16-PM-1-2.mp4"
          autoPlay
          controls
          playsInline
          controlsList="nodownload"
        ></video>
      </motion.div>

      {/* Our Food Promise & Counter */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-[10%] py-10">
        <motion.div
          className="w-full md:w-auto"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="/images/pepsi.png" className="w-full max-w-xs mx-auto" alt="" />
        </motion.div>
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-3xl md:text-4xl pb-5">Our Food Promise</h3>
          <h1 className="font-semibold text-4xl md:text-6xl text-red-600 pb-3">
            Made Right. Made Especially For You.
          </h1>
          <p className="text-gray-700">
            Bold Fiery Flavours are our style. We're here to bring a new sizzle
            to the face of fast-casual dining.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-12 mt-6">
            <Counter label="YEAR EXPERIENCE" targetNumber={23} />
            <Counter label="DIFFERENT BURGERS" targetNumber={460} />
          </div>
        </div>
      </div>

      {/* Chef Slider with Animation */}
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-semibold mb-10">Meet Our Expert Chefs</h1>
        <div className="max-w-6xl mx-auto">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 10 },
            }}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <SwiperSlide key={i}>
                <motion.img
                  src={`/images/chef${i}.avif`}
                  className="rounded-lg w-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  alt={`Chef ${i}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;


