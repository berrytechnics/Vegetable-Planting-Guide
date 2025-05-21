import { VegetableCategory } from '../../types/planting';

export const basilPlantingData = {
  name: 'Basil',
  category: VegetableCategory.HERB,
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
      name: 'Sweet Basil',
      description: 'Classic Italian variety with large, aromatic leaves',
      daysToHarvest: 60,
    },
    {
      name: 'Thai Basil',
      description: 'Anise-flavored variety popular in Asian cuisine',
      daysToHarvest: 60,
    },
    {
      name: 'Purple Basil',
      description: 'Decorative variety with purple leaves and pink flowers',
      daysToHarvest: 60,
    },
  ],
  companionPlants: ['Tomatoes', 'Peppers', 'Oregano', 'Marigolds'],
  spacing: {
    betweenPlants: '12-18 inches',
    betweenRows: '18-24 inches',
  },
}; 