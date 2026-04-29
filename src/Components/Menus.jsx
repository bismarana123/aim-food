import React from "react";
import { motion } from "framer-motion";

const Menus = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 py-24">
      <div className="mx-6">
        {/* Title Section with Scroll Animation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Ensures animation runs only once
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
            Our Today's Menu
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Carefully selected meat, chicken, and fish marinated in our special
            mix and grilled on traditional mangal grills.
          </p>
        </motion.div>

        {/* Menu Items Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {/* Reusable Menu Item Component */}
          {[
            { image: "/images/pizza.png", title: "PIZZA", description: "Our pizzas are crafted with passion..." },
            { image: "/images/wings.png", title: "Crispy Fried Chicken", description: "Our fried chicken is crispy & juicy..." },
            { image: "/images/fries.png", title: "FRIES", description: "Crispy on the outside, fluffy inside..." },
            { image: "/images/kbab.png", title: "CHICKEN SEEK KEBAB", description: "Grilled over an open flame for smoky flavor..." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row items-center bg-white p-8 rounded-2xl shadow-xl border-2 border-red-500 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileInView={{ opacity: 1, y: 0 }} // Ensures animation plays on scroll
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-lg mb-6 sm:mb-0">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="size-40 object-cover transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                />
              </div>
              <div className="w-full sm:w-3/5 sm:text-left sm:pl-8 flex flex-col justify-center text-center">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Button */}
        <motion.div
          className="text-center pt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        >
          <motion.button
            className="w-[40%] bg-red-500 p-4 text-white text-lg font-semibold rounded-lg hover:bg-red-600 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Click here
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Menus;
