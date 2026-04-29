// import React from "react";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <motion.footer
//       className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
//         {/* Logo & Navigation */}
//         <motion.div
//           className="flex flex-col items-center sm:flex-row sm:justify-between"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: { staggerChildren: 0.2 },
//             },
//           }}
//         >
//           {/* Logo with Hover Effect */}
//           <motion.a
//             href="https://aimfoods.online/"
//             className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img src="/images/logo.png" className="w-24 h-24" alt="Logo" />
//           </motion.a>

//           {/* Navigation Links */}
//           <motion.ul
//             className="flex flex-row flex-wrap justify-center items-center text-lg font-medium text-red-500 space-x-6 dark:text-gray-400"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
//             }}
//           >
//             {["Home", "About", "Shop", "Cart"].map((item, index) => (
//               <motion.li
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <a href="#" className="hover:underline hover:text-red-600 transition-all duration-300">
//                   {item}
//                 </a>
//               </motion.li>
//             ))}
//           </motion.ul>
//         </motion.div>

//         {/* Divider */}
//         <motion.hr
//           className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         />

//         {/* Copyright */}
//         <motion.span
//           className="block text-sm text-gray-500 text-center dark:text-gray-400"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//         >
//           © 2023 <a href="https://aimfoods.online" className="hover:underline">Aimfoods™</a>. All Rights Reserved.
//         </motion.span>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // React Router ka Link use karain

const Footer = () => {
  return (
    <motion.footer
      className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        {/* Logo & Navigation */}
        <motion.div
          className="flex flex-col items-center sm:flex-row sm:justify-between"
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
          {/* Logo with Hover Effect */}
          <motion.a
            href="https://aimfoods.online/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src="/images/logo.png" className="w-24 h-24" alt="Logo" />
          </motion.a>

          {/* Navigation Links with React Router */}
          <motion.ul
            className="flex flex-row flex-wrap justify-center items-center text-lg font-medium text-red-500 space-x-6 dark:text-gray-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
            }}
          >
            {["Home", "About", "Shop", "Cart"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/${item.toLowerCase()}`} className="hover:underline hover:text-red-600 transition-all duration-300">
                  {item}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Divider */}
        <motion.hr
          className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Copyright */}
        <motion.span
          className="block text-sm text-gray-500 text-center dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          © 2023 <a href="https://aimfoods.online" className="hover:underline">Aimfoods™</a>. All Rights Reserved.
        </motion.span>
      </div>
    </motion.footer>
  );
};

export default Footer;

