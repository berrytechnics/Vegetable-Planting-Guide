import { VegetableCategory } from '../../../types/planting';

export const turnipsPlantingData = {
  name: 'Turnips',
  category: VegetableCategory.ROOT,
  daysToHarvest: 50,
  zones: {
    '3': { plantingMonths: [5, 6, 7] },
    '4': { plantingMonths: [4, 5, 6, 7] },
    '5': { plantingMonths: [4, 5, 6, 7, 8] },
    '6': { plantingMonths: [3, 4, 5, 6, 7, 8] },
    '7': { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9] },
    '8': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    '9': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    '10': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  },
  varieties: [
    {
      name: 'Purple Top White Globe',
      description: 'Classic variety with purple top and white bottom',
      daysToHarvest: 50,
    },
    {
      name: 'Tokyo Cross',
      description: 'Fast-growing variety with smooth, white roots',
      daysToHarvest: 35,
    },
    {
      name: 'Golden Ball',
      description: 'Yellow-fleshed variety with sweet flavor',
      daysToHarvest: 55,
    },
  ],
  companionPlants: ['Peas', 'Beans', 'Lettuce', 'Spinach'],
  spacing: {
    betweenPlants: '4-6 inches',
    betweenRows: '12-18 inches',
  },
};
