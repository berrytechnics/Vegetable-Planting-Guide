import { VegetableCategory } from '../../../types/planting';

export const peppersPlantingData = {
  name: 'Peppers',
  category: VegetableCategory.FRUIT,
  daysToHarvest: 70,
  zones: {
    '3': { plantingMonths: [5, 6] },
    '4': { plantingMonths: [5, 6] },
    '5': { plantingMonths: [4, 5, 6] },
    '6': { plantingMonths: [4, 5, 6] },
    '7': { plantingMonths: [3, 4, 5, 6, 7] },
    '8': { plantingMonths: [2, 3, 4, 5, 6, 7, 8] },
    '9': { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9] },
    '10': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  },
  varieties: [
    {
      name: 'Bell',
      description: 'Sweet, crisp peppers perfect for fresh eating',
      daysToHarvest: 70,
    },
    {
      name: 'Jalapeño',
      description: 'Medium-hot pepper great for salsas and cooking',
      daysToHarvest: 65,
    },
    {
      name: 'Habanero',
      description: 'Very hot pepper with fruity flavor',
      daysToHarvest: 80,
    },
  ],
  companionPlants: ['Basil', 'Oregano', 'Onions', 'Carrots', 'Tomatoes'],
  spacing: {
    betweenPlants: '18-24 inches',
    betweenRows: '24-36 inches',
  },
};
