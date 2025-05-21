import { VegetableCategory } from '../../types/planting';

export const cabbagePlantingData = {
  name: 'Cabbage',
  category: VegetableCategory.CRUCIFEROUS,
  daysToHarvest: 70,
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
      name: 'Early Jersey Wakefield',
      description: 'Early maturing, pointed head variety',
      daysToHarvest: 65,
    },
    {
      name: 'Red Express',
      description: 'Compact red variety with sweet flavor',
      daysToHarvest: 70,
    },
    {
      name: 'Savoy',
      description: 'Crinkled leaves with excellent flavor',
      daysToHarvest: 75,
    },
  ],
  companionPlants: ['Dill', 'Sage', 'Thyme', 'Mint'],
  spacing: {
    betweenPlants: '12-18 inches',
    betweenRows: '24-36 inches',
  },
};
