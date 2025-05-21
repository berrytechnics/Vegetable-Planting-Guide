import { VegetableCategory } from '../../types/planting';

export const collardGreensPlantingData = {
  name: 'Collard Greens',
  category: VegetableCategory.LEAFY,
  daysToHarvest: 60,
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
      name: 'Georgia Southern',
      description: 'Classic collard with large, dark green leaves',
      daysToHarvest: 60,
    },
    {
      name: 'Vates',
      description: 'Compact variety with blue-green leaves',
      daysToHarvest: 55,
    },
    {
      name: 'Champion',
      description: 'Disease-resistant variety with tender leaves',
      daysToHarvest: 65,
    },
  ],
  companionPlants: ['Dill', 'Mint', 'Sage', 'Thyme'],
  spacing: {
    betweenPlants: '18-24 inches',
    betweenRows: '24-36 inches',
  },
};
