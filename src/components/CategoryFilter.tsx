import React from 'react';
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
  const allCategories = Object.values(VegetableCategory);

  /**
   * Handles selecting or deselecting all categories
   * @param selectAll - Whether to select or deselect all categories
   */
  const handleSelectAll = (selectAll: boolean) => {
    allCategories.forEach(category => {
      if (selectAll && !selectedCategories.includes(category)) {
        onCategoryChange(category);
      } else if (!selectAll && selectedCategories.includes(category)) {
        onCategoryChange(category);
      }
    });
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-4 mb-4">
        {allCategories.map((category) => (
          <label
            key={category}
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">{category}</span>
          </label>
        ))}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => handleSelectAll(true)}
          className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Select All
        </button>
        <button
          onClick={() => handleSelectAll(false)}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Deselect All
        </button>
      </div>
    </div>
  );
}; 