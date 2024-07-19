// Dropdown.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DropButton from "@/assets/dashboardWorkshop/dropButton.svg";

const choices = [
  { name: "Friends" },
  { name: "School" },
  { name: "Roadshow" },
  { name: "Social Media" },
  { name: "Others" },
];

const Dropdown: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(
    localStorage.getItem("selectedValue") || "Choose"
  );

  useEffect(() => {
    localStorage.setItem("selectedValue", selectedValue || "Choose");
  }, [selectedValue]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const selectCategory = (name: string) => {
    setSelectedValue(name);
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="relative flex h-fit font-fredoka text-light select-none
                    mobile:text-[12px] ipad:text-[14px] lg:text-[1rem]"
    >
      <button
        onClick={toggleDropdown}
        className="bg-white/10 h-full px-4 py-1 rounded-[0.5rem] flex justify-between items-center w-full"
      >
        <span
          className={`${
            selectedValue === "Choose" ? "opacity-70" : "opacity-100"
          }`}
        >
          {selectedValue}
        </span>
        <img src={DropButton} className="h-[12px]" alt="Drop button" />
      </button>
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full w-full rounded-[0.5rem] shadow-lg bg-transparent_black z-10"
          >
            {choices.map((choice) => (
              <button
                key={choice.name}
                onClick={() => selectCategory(choice.name)}
                className="w-full text-left px-4 text-white rounded-[0.5rem] hover:bg-gray-4"
              >
                {choice.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
