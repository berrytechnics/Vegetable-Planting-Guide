import { VegetableCategory } from '../../types/planting';

export const okraPlantingData = {
  name: 'Okra',
  category: VegetableCategory.FRUIT,
  daysToHarvest: 55,
  zones: {
    '3': { plantingMonths: [6] },
    '4': { plantingMonths: [5, 6] },
    '5': { plantingMonths: [5, 6] },
    '6': { plantingMonths: [4, 5, 6] },
    '7': { plantingMonths: [3, 4, 5, 6, 7] },
    '8': { plantingMonths: [2, 3, 4, 5, 6, 7, 8] },
    '9': { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9] },
    '10': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  },
  varieties: [
    {
      name: 'Clemson Spineless',
      description: 'Classic okra with spineless pods',
      daysToHarvest: 55,
    },
    {
      name: 'Burgundy',
      description: 'Red-podded variety with ornamental value',
      daysToHarvest: 60,
    },
    {
      name: 'Emerald',
      description: 'Dark green pods with excellent flavor',
      daysToHarvest: 50,
    },
  ],
  companionPlants: ['Peppers', 'Eggplant', 'Basil', 'Marigolds'],
  spacing: {
    betweenPlants: '12-18 inches',
    betweenRows: '24-36 inches',
  },
};
