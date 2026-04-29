import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <motion.div
      className="bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Title Section */}
      <motion.div
        className="text-center py-6 pt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-red-500 text-3xl md:text-4xl font-semibold mb-2">
          Testimonial
        </h1>
        <p className="text-4xl md:text-5xl font-extrabold leading-tight border-b-4 border-yellow-500 inline-block pb-1">
          WHAT OUR CLIENT SAYS
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-8 md:gap-4 pt-12 md:pt-24 px-4">
        {/* Testimonial Image */}
        <motion.img
          className="w-full md:w-[40%] max-w-md object-cover"
          src="/images/testimonial.png"
          alt="Testimonial"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Testimonial Cards */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* First Testimonial */}
          <motion.div
            className="w-full md:w-[48%] bg-white p-6 rounded-lg shadow-md transition-transform transform"
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              "From the warm welcome to the quick service, everything was
              top-notch. The fried chicken was crispy and delicious, and the
              fries were perfectly seasoned. Definitely coming back!"
            </p>
            <div className="flex items-center pt-4">
              <img
                className="w-12 h-12 rounded-full"
                src="/images/imge.png"
                alt="User"
              />
              <p className="pl-3 text-gray-800 font-semibold">Satisfied User</p>
            </div>
          </motion.div>

          {/* Second Testimonial */}
          <motion.div
            className="w-full md:w-[48%] bg-white p-6 rounded-lg shadow-md transition-transform transform"
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              "This restaurant has it all—great food, great service, and great
              vibes. The chicken dishes and kebabs are out of this world. I’ll
              be telling all my friends!"
            </p>
            <div className="flex items-center pt-4">
              <img
                className="w-12 h-12 rounded-full"
                src="/images/imge.png"
                alt="Client"
              />
              <p className="pl-3 text-gray-800 font-semibold">Happy Client</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
