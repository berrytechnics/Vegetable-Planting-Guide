import { VegetableCategory } from '../../types/planting';

export const parsnipsPlantingData = {
  name: 'Parsnips',
  category: VegetableCategory.ROOT,
  daysToHarvest: 120,
  zones: {
    '3': { plantingMonths: [5, 6] },
    '4': { plantingMonths: [4, 5, 6] },
    '5': { plantingMonths: [4, 5, 6] },
    '6': { plantingMonths: [3, 4, 5, 6] },
    '7': { plantingMonths: [2, 3, 4, 5, 6] },
    '8': { plantingMonths: [1, 2, 3, 4, 5, 6] },
    '9': { plantingMonths: [1, 2, 3, 4, 5, 6] },
    '10': { plantingMonths: [1, 2, 3, 4, 5, 6] },
  },
  varieties: [
    {
      name: 'Hollow Crown',
      description: 'Classic parsnip with long, tapered roots',
      daysToHarvest: 120,
    },
    {
      name: 'All American',
      description: 'Uniform, smooth roots with sweet flavor',
      daysToHarvest: 110,
    },
    {
      name: 'Gladiator',
      description: 'Disease-resistant variety with excellent flavor',
      daysToHarvest: 115,
    },
  ],
  companionPlants: ['Onions', 'Radishes', 'Lettuce', 'Peas'],
  spacing: {
    betweenPlants: '3-4 inches',
    betweenRows: '18-24 inches',
  },
};
