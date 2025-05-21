import { VegetableCategory } from '../../types/planting';

export const eggplantPlantingData = {
  name: 'Eggplant',
  category: VegetableCategory.FRUIT,
  daysToHarvest: 75,
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
      name: 'Black Beauty',
      description: 'Classic large, deep purple variety',
      daysToHarvest: 75,
    },
    {
      name: 'Ichiban',
      description: 'Long, slender Japanese variety',
      daysToHarvest: 65,
    },
    {
      name: 'White Egg',
      description: 'Small, white, egg-shaped variety',
      daysToHarvest: 70,
    },
  ],
  companionPlants: ['Marigolds', 'Beans', 'Peppers', 'Spinach'],
  spacing: {
    betweenPlants: '18-24 inches',
    betweenRows: '24-36 inches',
  },
};
