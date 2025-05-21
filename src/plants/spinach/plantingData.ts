import { VegetableCategory } from '../../types/planting';

export const spinachPlantingData = {
  name: 'Spinach',
  category: VegetableCategory.LEAFY,
  daysToHarvest: 45,
  zones: {
    '3': { plantingMonths: [5, 6, 7] },
    '4': { plantingMonths: [4, 5, 6, 7, 8] },
    '5': { plantingMonths: [4, 5, 6, 7, 8] },
    '6': { plantingMonths: [3, 4, 5, 6, 7, 8, 9] },
    '7': { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9] },
    '8': { plantingMonths: [1, 2, 3, 4, 5, 9, 10, 11] },
    '9': { plantingMonths: [1, 2, 3, 4, 5, 9, 10, 11, 12] },
    '10': { plantingMonths: [1, 2, 3, 4, 5, 9, 10, 11, 12] },
  },
  varieties: [
    {
      name: 'Savoy',
      description: 'Dark green, crinkled leaves with rich flavor',
      daysToHarvest: 45,
    },
    {
      name: 'Smooth Leaf',
      description: 'Flat leaves, easier to clean',
      daysToHarvest: 40,
    },
    {
      name: 'Baby Leaf',
      description: 'Small, tender leaves perfect for salads',
      daysToHarvest: 30,
    },
  ],
  companionPlants: ['Strawberries', 'Radishes', 'Lettuce', 'Cabbage', 'Cauliflower'],
  spacing: {
    betweenPlants: '6-8 inches',
    betweenRows: '12-18 inches',
  },
};
