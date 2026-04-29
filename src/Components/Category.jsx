import React from "react";
import { motion } from "framer-motion";

// Data with 8 items
const data = [
  { id: 1, imageUrl: "/images/burger.png", text: "CRISPY ZINGER BURGER" },
  { id: 2, imageUrl: "/images/chicken.png", text: "CHICKEN WINGS" },
  { id: 3, imageUrl: "/images/wings.png", text: "CRISPY FRIED CHICKEN" },
  { id: 4, imageUrl: "/images/fajita.png", text: "FRIED FISH" },
  { id: 5, imageUrl: "/images/fish.png", text: "WINGS" },
  { id: 6, imageUrl: "/images/nuggets.png", text: "NUGGETS" },
  { id: 7, imageUrl: "/images/fries.png", text: "FRIES" },
  { id: 8, imageUrl: "/images/shamiburger.png", text: "ANDA SHAMI BURGER" },
];

// Component for displaying image and text with animation
const ImageTextComponent = ({ imageUrl, text }) => (
  <motion.div
    className="flex flex-col items-center justify-center text-center gap-4"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
  >
    <motion.img
      src={imageUrl}
      alt={text}
      className="w-40 h-40 object-cover"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <p className="text-lg font-semibold">{text}</p>
  </motion.div>
);

const Category = () => {
  return (
    <motion.div
      className="text-center py-10 bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Title Section */}
      <motion.div
        className="pb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-xl mb-2">BROWSE BY CATEGORY</h3>
        <h1 className="text-4xl font-semibold mb-6 border-b-4 border-yellow-500 w-[70%] md:w-[30%] mx-auto pb-1">
          SPICE UP YOUR LIFE
        </h1>
      </motion.div>

      {/* Grid Section (All Items Animated on Scroll) */}
      <motion.div
        className="grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1"
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
        {data.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ImageTextComponent imageUrl={item.imageUrl} text={item.text} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Category;
