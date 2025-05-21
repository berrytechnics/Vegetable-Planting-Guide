import { VegetableCategory } from '../../types/planting';

export const onionsPlantingData = {
  name: 'Onions',
  category: VegetableCategory.ALLIUM,
  daysToHarvest: 100,
  zones: {
    '3': { plantingMonths: [4, 5] },
    '4': { plantingMonths: [3, 4, 5] },
    '5': { plantingMonths: [3, 4, 5] },
    '6': { plantingMonths: [2, 3, 4, 5] },
    '7': { plantingMonths: [2, 3, 4, 5] },
    '8': { plantingMonths: [1, 2, 3, 4, 5] },
    '9': { plantingMonths: [1, 2, 3, 4, 5] },
    '10': { plantingMonths: [1, 2, 3, 4, 5] },
  },
  varieties: [
    {
      name: 'Yellow',
      description: 'Classic cooking onion with a strong flavor',
      daysToHarvest: 100,
    },
    {
      name: 'Red',
      description: 'Sweet and mild, perfect for salads and sandwiches',
      daysToHarvest: 100,
    },
    {
      name: 'White',
      description: 'Sharp and pungent, great for cooking',
      daysToHarvest: 100,
    },
  ],
  companionPlants: ['Carrots', 'Beets', 'Lettuce', 'Chamomile'],
  spacing: {
    betweenPlants: '4-6 inches',
    betweenRows: '12-18 inches',
  },
};
