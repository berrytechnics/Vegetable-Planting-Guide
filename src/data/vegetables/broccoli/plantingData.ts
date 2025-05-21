import { VegetableCategory } from '../../../types/planting';

export const broccoliPlantingData = {
  name: 'Broccoli',
  category: VegetableCategory.CRUCIFEROUS,
  daysToHarvest: 70,
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
      name: 'Calabrese',
      description: 'Classic green broccoli with large heads',
      daysToHarvest: 65,
    },
    {
      name: 'Purple Sprouting',
      description: 'Produces multiple small purple heads',
      daysToHarvest: 80,
    },
    {
      name: 'Romanesco',
      description: 'Unique spiral-patterned heads with nutty flavor',
      daysToHarvest: 75,
    },
  ],
  companionPlants: ['Beets', 'Celery', 'Onions', 'Potatoes', 'Dill'],
  spacing: {
    betweenPlants: '18-24 inches',
    betweenRows: '24-36 inches',
  },
};
