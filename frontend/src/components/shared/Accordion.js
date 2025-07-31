import React, { useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onToggle, isFirst = false, isLast = false }) => {
  return (
    <div className={`border border-gray-200 ${isFirst ? 'rounded-t-lg' : ''} ${isLast ? 'rounded-b-lg' : ''} ${!isFirst ? 'border-t-0' : ''}`}>
      <button
        type="button"
        onClick={onToggle}
        className={`w-full px-6 py-4 text-left
          // bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100
           hover:to-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-200 flex justify-between items-center ${isFirst ? 'rounded-t-lg' : ''} ${isLast && !isOpen ? 'rounded-b-lg' : ''}`}
      >
        <span className="font-semibold text-gray-800 flex items-center">
          {title}
        </span>
        <div className={`p-1 rounded-full shadow-sm transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div  className={`p-6  border-t border-gray-100 ${isLast ? 'rounded-b-lg' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items, defaultOpenIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          isFirst={index === 0}
          isLast={index === items.length - 1}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
