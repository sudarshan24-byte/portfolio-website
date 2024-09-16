import React, { useState } from 'react';

const Dropdown = ({ setOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        setOption(option)
    };

    return (
        <div className="relative inline-block w-64">
            <button
                onClick={toggleDropdown}
                className="w-full bg-[#191919] text-white py-2 px-4 rounded-lg flex justify-between items-center focus:outline-none"
            >
                {selectedOption}
                <span>{isOpen ? "▲" : "▼"}</span>
            </button>
            {isOpen && (
                <ul className="absolute w-full bg-[#101010] text-white py-2 mt-1 rounded-lg shadow-lg z-10">
                    <li
                        className="px-4 py-2 cursor-pointer hover:bg-[#f9004d]"
                        onClick={() => handleOptionClick("All")}
                    >
                        All
                    </li>
                    <li
                        className="px-4 py-2 cursor-pointer hover:bg-[#f9004d]"
                        onClick={() => handleOptionClick("Machine Learning")}
                    >
                        Machine Learning
                    </li>
                    <li
                        className="px-4 py-2 cursor-pointer hover:bg-[#f9004d]"
                        onClick={() => handleOptionClick("Web Development")}
                    >
                        Web Development
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
