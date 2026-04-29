import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Professional = () => {
  return (
    <div className="bg-red-500 h-auto flex items-center justify-center py-10">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-xl px-2 gap-4">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center md:flex-row md:items-center w-full md:w-auto border border-white rounded-lg p-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon / Circle */}
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center p-4 mb-2 md:mb-0">
                <FontAwesomeIcon
                  icon={faCakeCandles}
                  className="text-white text-3xl"
                />
              </div>

              {/* Text Section */}
              <div className="text-white text-center md:text-left md:pl-4">
                <h1 className="text-2xl font-semibold">Professional Chef</h1>
                <p className="text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default Professional;

