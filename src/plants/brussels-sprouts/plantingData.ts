import { VegetableCategory } from '../../types/planting';

export const brusselsSproutsPlantingData = {
  name: 'Brussels Sprouts',
  category: VegetableCategory.CRUCIFEROUS,
  daysToHarvest: 90,
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
      name: 'Long Island Improved',
      description: 'Classic variety with uniform sprouts',
      daysToHarvest: 90,
    },
    {
      name: 'Jade Cross',
      description: 'Compact plant with high yields',
      daysToHarvest: 85,
    },
    {
      name: 'Red Rubine',
      description: 'Purple-red sprouts with sweet flavor',
      daysToHarvest: 95,
    },
  ],
  companionPlants: ['Dill', 'Sage', 'Thyme', 'Mint'],
  spacing: {
    betweenPlants: '18-24 inches',
    betweenRows: '24-36 inches',
  },
};
