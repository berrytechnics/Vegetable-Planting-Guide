import { VegetableCategory } from '../../../types/planting';

export const greenBeansPlantingData = {
  name: 'Green Beans',
  category: VegetableCategory.LEGUME,
  daysToHarvest: 55,
  zones: {
    '3': { plantingMonths: [4, 5, 6] },
    '4': { plantingMonths: [4, 5, 6] },
    '5': { plantingMonths: [4, 5, 6, 7] },
    '6': { plantingMonths: [4, 5, 6, 7] },
    '7': { plantingMonths: [3, 4, 5, 6, 7, 8] },
    '8': { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9] },
    '9': { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
    '10': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  },
  varieties: [
    {
      name: 'Blue Lake',
      description: 'Classic stringless bean with excellent flavor',
      daysToHarvest: 55,
    },
    {
      name: 'Kentucky Wonder',
      description: 'Pole bean with long, tender pods',
      daysToHarvest: 65,
    },
    {
      name: 'Provider',
      description: 'Bush bean with early, reliable production',
      daysToHarvest: 50,
    },
  ],
  companionPlants: ['Corn', 'Cucumbers', 'Potatoes', 'Strawberries', 'Celery'],
  spacing: {
    betweenPlants: '4-6 inches',
    betweenRows: '18-24 inches',
  },
};
