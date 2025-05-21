import { VegetableCategory } from '../../types/planting';

export const oreganoPlantingData = {
  name: 'Oregano',
  category: VegetableCategory.HERB,
  daysToHarvest: 90,
  zones: {
    '3': { plantingMonths: [5, 6] },
    '4': { plantingMonths: [4, 5, 6] },
    '5': { plantingMonths: [4, 5, 6] },
    '6': { plantingMonths: [3, 4, 5, 6] },
    '7': { plantingMonths: [2, 3, 4, 5, 6, 7] },
    '8': { plantingMonths: [2, 3, 4, 5, 6, 7, 8] },
    '9': { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9] },
    '10': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  },
  varieties: [
    {
      name: 'Greek Oregano',
      description: 'Classic variety with strong, aromatic flavor',
      daysToHarvest: 90,
    },
    {
      name: 'Italian Oregano',
      description: 'Milder flavor, great for Italian dishes',
      daysToHarvest: 90,
    },
    {
      name: 'Golden Oregano',
      description: 'Decorative variety with golden leaves',
      daysToHarvest: 90,
    },
  ],
  companionPlants: ['Tomatoes', 'Peppers', 'Basil', 'Cabbage'],
  spacing: {
    betweenPlants: '12-18 inches',
    betweenRows: '18-24 inches',
  },
}; 