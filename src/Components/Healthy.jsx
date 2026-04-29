// import React from "react";
// import { motion } from "framer-motion";

// const Healthy = () => {
//   return (
//     <div className="bg-gray-100">
//       <div className="flex justify-center items-center py-10 px-10">
//         <div
//           role="status"
//           className="rtl:space-x-reverse md:flex md:items-center"
//         >
//           {/* Image with Animation */}
//           <motion.div
//             className="flex items-center justify-center w-full h-full sm:w-160 dark:bg-gray-700"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//           >
//             <motion.img
//               src="/images/delicious.png"
//               alt=""
//               className="w-full h-full object-cover rounded-lg p-4"
//               whileHover={{ scale: 1.05 }}
//             />
//           </motion.div>

//           {/* Text Section with Animation */}
//           <motion.div
//             className="w-full text-center md:text-left md:pl-8"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
//           >
//             <h1 className="text-3xl font-bold mb-4">
//               We Make Delicious & Healthy Food
//             </h1>
//             <p className="text-lg mb-4">
//               We are passionate about creating food that delights your taste
//               buds while nourishing your body. At the core of our philosophy is
//               the belief that eating well should never mean compromising on
//               flavor. That’s why we dedicate ourselves to preparing dishes that
//               seamlessly blend wholesome, nutrient-rich ingredients with bold,
//               mouthwatering tastes.
//             </p>
//             <motion.button
//               className="bg-red-500 text-white text-lg px-8 py-4 rounded-lg hover:bg-red-600"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.2 }}
//             >
//               Learn More
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Healthy;

import React from "react";
import { motion } from "framer-motion";

const Healthy = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center py-10 px-10">
        <div className="rtl:space-x-reverse md:flex md:items-center">
          {/* Image with Scroll Animation */}
          <motion.div
            className="flex items-center justify-center w-full h-full sm:w-160 dark:bg-gray-700"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} // Ensures it only animates once
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.img
              src="/images/delicious.png"
              alt="Delicious & Healthy Food"
              className="w-full h-full object-cover rounded-lg p-4"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Text Section with Scroll Animation */}
          <motion.div
            className="w-full text-center md:text-left md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <h1 className="text-3xl font-bold mb-4">
              We Make Delicious & Healthy Food
            </h1>
            <p className="text-lg mb-4">
              We are passionate about creating food that delights your taste
              buds while nourishing your body. At the core of our philosophy is
              the belief that eating well should never mean compromising on
              flavor. That’s why we dedicate ourselves to preparing dishes that
              seamlessly blend wholesome, nutrient-rich ingredients with bold,
              mouthwatering tastes.
            </p>
            <motion.button
              className="bg-red-500 text-white text-lg px-8 py-4 rounded-lg hover:bg-red-600"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Healthy;


