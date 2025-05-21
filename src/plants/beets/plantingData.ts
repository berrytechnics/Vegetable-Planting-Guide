import { VegetableCategory } from '../../../types/planting';

export const beetsPlantingData = {
  name: 'Beets',
  category: VegetableCategory.ROOT,
  daysToHarvest: 60,
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
      name: 'Detroit Dark Red',
      description: 'Classic deep red beet with sweet flavor',
      daysToHarvest: 60,
    },
    {
      name: 'Golden',
      description: 'Yellow-fleshed beet with mild, sweet flavor',
      daysToHarvest: 55,
    },
    {
      name: 'Chioggia',
      description: 'Italian heirloom with red and white rings',
      daysToHarvest: 65,
    },
  ],
  companionPlants: ['Onions', 'Lettuce', 'Cabbage', 'Garlic'],
  spacing: {
    betweenPlants: '3-4 inches',
    betweenRows: '12-18 inches',
  },
};
