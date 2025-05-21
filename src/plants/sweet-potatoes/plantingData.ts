import { VegetableCategory } from '../../types/planting';

export const sweetPotatoesPlantingData = {
  name: 'Sweet Potatoes',
  category: VegetableCategory.ROOT,
  daysToHarvest: 120,
  zones: {
    '3': { plantingMonths: [6] },
    '4': { plantingMonths: [5, 6] },
    '5': { plantingMonths: [5, 6] },
    '6': { plantingMonths: [4, 5, 6] },
    '7': { plantingMonths: [3, 4, 5, 6] },
    '8': { plantingMonths: [2, 3, 4, 5, 6, 7] },
    '9': { plantingMonths: [2, 3, 4, 5, 6, 7, 8] },
    '10': { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  },
  varieties: [
    {
      name: 'Beauregard',
      description: 'Popular variety with orange flesh and good disease resistance',
      daysToHarvest: 120,
    },
    {
      name: 'Jewel',
      description: 'Sweet, moist flesh with good storage qualities',
      daysToHarvest: 110,
    },
    {
      name: 'Georgia Jet',
      description: 'Early maturing variety with deep orange flesh',
      daysToHarvest: 100,
    },
  ],
  companionPlants: ['Beans', 'Corn', 'Marigolds', 'Nasturtiums'],
  spacing: {
    betweenPlants: '12-18 inches',
    betweenRows: '36-48 inches',
  },
};
