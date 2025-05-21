import { VegetableCategory } from '../../types/planting';

export const carrotPlantingData = {
  name: 'Carrots',
  category: VegetableCategory.ROOT,
  daysToHarvest: 70,
  zones: {
    '3': { plantingMonths: [5, 6, 7] },
    '4': { plantingMonths: [4, 5, 6, 7] },
    '5': { plantingMonths: [4, 5, 6, 7, 8] },
    '6': { plantingMonths: [3, 4, 5, 6, 7, 8, 9] },
    '7': { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
    '8': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    '9': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    '10': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  },
  varieties: [
    {
      name: 'Nantes',
      description: 'Classic sweet carrot, great for fresh eating',
      daysToHarvest: 65,
    },
    {
      name: 'Danvers',
      description: 'Sturdy carrot good for heavy soils',
      daysToHarvest: 75,
    },
    {
      name: 'Chantenay',
      description: 'Short, stout carrot perfect for containers',
      daysToHarvest: 70,
    },
  ],
  companionPlants: ['Onions', 'Rosemary', 'Sage', 'Lettuce', 'Radishes'],
  spacing: {
    betweenPlants: '2-3 inches',
    betweenRows: '12-18 inches',
  },
};
