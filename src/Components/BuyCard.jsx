import { useState } from 'react';
import { motion } from 'framer-motion';

const BuyCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="bg-sageGreen flex items-center justify-center p-10">
      <motion.div
        className="bg-gray-200 sm:flex w-full lg:max-w-screen-lg rounded-lg overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="border border-gray-300 p-4 sm:w-3/4"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Special Kaki Modak
          </h2>
          <ul className="text-sm text-gray-700 list-disc ml-6">
            <li>Handcrafted with premium quality ingredients</li>
            <li>Authentic recipe passed down through generations</li>
            <li>Deliciously sweet with a hint of cardamom</li>
            <li>Perfect for festivals and special occasions</li>
          </ul>
        </div>
        <div className="border border-gray-300 p-4 sm:w-1/4 bg-gray-100 flex flex-col justify-center items-center">
          <p className="text-gray-700 mb-2">Price of Kaki Modak</p>
          <p className="text-3xl font-semibold text-gray-800">
            &#8377;249 <strike className="text-lg font-normal">499</strike>
          </p>
          <button className="mt-4 px-4 py-2 bg-royalYellow text-black font-semibold rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-400 transition duration-300">
            Buy now!
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BuyCard;
