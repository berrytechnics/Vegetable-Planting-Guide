import { VegetableCategory } from '../../types/planting';

export const radishesPlantingData = {
  name: 'Radishes',
  category: VegetableCategory.ROOT,
  daysToHarvest: 30,
  zones: {
    '3': { plantingMonths: [4, 5, 6, 7, 8] },
    '4': { plantingMonths: [4, 5, 6, 7, 8] },
    '5': { plantingMonths: [3, 4, 5, 6, 7, 8, 9] },
    '6': { plantingMonths: [3, 4, 5, 6, 7, 8, 9] },
    '7': { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
    '8': { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
    '9': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    '10': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  },
  varieties: [
    {
      name: 'Cherry Belle',
      description: 'Classic red radish with crisp, white flesh',
      daysToHarvest: 25,
    },
    {
      name: 'French Breakfast',
      description: 'Elongated red and white radish with mild flavor',
      daysToHarvest: 28,
    },
    {
      name: 'Daikon',
      description: 'Large white radish with mild, sweet flavor',
      daysToHarvest: 60,
    },
  ],
  companionPlants: ['Carrots', 'Cucumbers', 'Lettuce', 'Peas', 'Spinach'],
  spacing: {
    betweenPlants: '1-2 inches',
    betweenRows: '12-18 inches',
  },
};
