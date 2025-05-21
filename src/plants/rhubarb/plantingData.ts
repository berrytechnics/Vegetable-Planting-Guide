import { VegetableCategory } from '../../../types/planting';

export const rhubarbPlantingData = {
  name: 'Rhubarb',
  category: VegetableCategory.PERENNIAL,
  daysToHarvest: 365, // Takes a year to establish
  zones: {
    '3': { plantingMonths: [4, 5] },
    '4': { plantingMonths: [4, 5] },
    '5': { plantingMonths: [3, 4, 5] },
    '6': { plantingMonths: [3, 4, 5] },
    '7': { plantingMonths: [2, 3, 4, 5] },
    '8': { plantingMonths: [2, 3, 4, 5] },
    '9': { plantingMonths: [1, 2, 3, 4, 5] },
    '10': { plantingMonths: [1, 2, 3, 4, 5] },
  },
  varieties: [
    {
      name: 'Victoria',
      description: 'Classic green variety with red stalks',
      daysToHarvest: 365,
    },
    {
      name: 'Crimson Red',
      description: 'Deep red stalks with excellent flavor',
      daysToHarvest: 365,
    },
    {
      name: 'Canada Red',
      description: 'Sweet, tender stalks with good disease resistance',
      daysToHarvest: 365,
    },
  ],
  companionPlants: ['Garlic', 'Onions', 'Cabbage', 'Kale'],
  spacing: {
    betweenPlants: '36-48 inches',
    betweenRows: '48-60 inches',
  },
}; 