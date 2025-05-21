import React, { useEffect, useRef, useState } from 'react';
import { VegetableCategory } from '../types/planting';

interface CategoryFilterProps {
  selectedCategories: VegetableCategory[];
  onCategoryChange: (category: VegetableCategory) => void;
}

/**
 * A filter component that allows users to select vegetable categories
 * to filter the planting calendar
 */
export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategories,
  onCategoryChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const allCategories = Object.values(VegetableCategory);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectAll = (selectAll: boolean) => {
    allCategories.forEach(category => {
      if (selectAll && !selectedCategories.includes(category)) {
        onCategoryChange(category);
      } else if (!selectAll && selectedCategories.includes(category)) {
        onCategoryChange(category);
      }
    });
  };

  const handleClear = () => {
    selectedCategories.forEach(category => {
      onCategoryChange(category);
    });
  };

  return (
    <div>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-10 px-4 border border-gray-300 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 flex items-center justify-between"
        >
          <span className="text-gray-700">
            {selectedCategories.length === 0
              ? 'Select categories'
              : `${selectedCategories.length} categories selected`}
          </span>
          <svg
            className={`h-5 w-5 text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto">
            <div className="p-2 border-b border-gray-200">
              <button
                type="button"
                onClick={() => handleSelectAll(true)}
                className="w-full px-3 py-1.5 text-left text-sm text-gray-700 hover:bg-gray-100 rounded"
              >
                Select All
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="w-full px-3 py-1.5 text-left text-sm text-gray-700 hover:bg-gray-100 rounded"
              >
                Clear All
              </button>
            </div>
            <div className="py-1">
              {allCategories.map(category => (
                <button
                  key={category}
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  className={`w-full px-3 py-1.5 text-left text-sm ${
                    selectedCategories.includes(category)
                      ? 'bg-green-50 text-green-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
