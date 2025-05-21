import { VegetableCategory } from '../../types/planting';

export const lettucePlantingData = {
  name: 'Lettuce',
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
      name: 'Butterhead',
      description: 'Tender, sweet leaves forming loose heads',
      daysToHarvest: 45,
    },
    {
      name: 'Romaine',
      description: 'Crisp, upright leaves with a mild flavor',
      daysToHarvest: 60,
    },
    {
      name: 'Leaf',
      description: 'Loose leaves, great for cut-and-come-again harvesting',
      daysToHarvest: 30,
    },
  ],
  companionPlants: ['Carrots', 'Radishes', 'Strawberries', 'Cucumbers', 'Onions'],
  spacing: {
    betweenPlants: '8-12 inches',
    betweenRows: '12-18 inches',
  },
};
