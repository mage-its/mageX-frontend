import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DropButton from "@/assets/dashboardWorkshop/dropButton.svg"

interface DropdownProps {
  selectedCategory: 'Multimedia' | 'Robotika' | 'Internet of Things';
  setSelectedCategory: (category: 'Multimedia' | 'Robotika' | 'Internet of Things') => void;
}

const categories = ['Multimedia', 'Robotika', 'Internet of Things'];

const Dropdown: React.FC<DropdownProps> = ({ selectedCategory, setSelectedCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const selectCategory = (category: 'Multimedia' | 'Robotika' | 'Internet of Things') => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative w-full h-fit font-fredoka text-light select-none">
      <button
        onClick={toggleDropdown} 
        className="bg-gray-5 w-full h-full px-8 py-3 rounded-[0.5rem] flex justify-between items-center"
      >
        {selectedCategory}
        <img src={DropButton}></img>
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute w-full rounded-[0.5rem] shadow-lg bg-transparent_black z-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => selectCategory(category as 'Multimedia' | 'Robotika' | 'Internet of Things')}
                className="w-full text-left px-4 text-white rounded-[0.5rem] hover:bg-gray-4"
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
