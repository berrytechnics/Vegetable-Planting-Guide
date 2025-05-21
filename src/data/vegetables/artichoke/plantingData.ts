import { VegetableCategory } from '../../../types/planting';

export const artichokePlantingData = {
  name: 'Artichoke',
  category: VegetableCategory.OTHER,
  daysToHarvest: 180,
  zones: {
    '3': { plantingMonths: [5] },
    '4': { plantingMonths: [4, 5] },
    '5': { plantingMonths: [4, 5] },
    '6': { plantingMonths: [3, 4, 5] },
    '7': { plantingMonths: [2, 3, 4, 5, 6] },
    '8': { plantingMonths: [1, 2, 3, 4, 5, 6, 7] },
    '9': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8] },
    '10': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  },
  varieties: [
    {
      name: 'Green Globe',
      description: 'Classic variety with large, round heads',
      daysToHarvest: 180,
    },
    {
      name: 'Imperial Star',
      description: 'Hybrid variety that produces in first year',
      daysToHarvest: 150,
    },
    {
      name: 'Violetto',
      description: 'Italian variety with purple-tinged heads',
      daysToHarvest: 180,
    },
  ],
  companionPlants: ['Tarragon', 'Cabbage', 'Sunflowers', 'Tarragon'],
  spacing: {
    betweenPlants: '36-48 inches',
    betweenRows: '48-60 inches',
  },
}; 