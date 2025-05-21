import { VegetableCategory } from '../../../types/planting';

export const asparagusPlantingData = {
  name: 'Asparagus',
  category: VegetableCategory.PERENNIAL,
  daysToHarvest: 730, // Takes 2 years to establish
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
      name: 'Jersey Knight',
      description: 'All-male hybrid with high yields and disease resistance',
      daysToHarvest: 730,
    },
    {
      name: 'Purple Passion',
      description: 'Purple spears that turn green when cooked',
      daysToHarvest: 730,
    },
    {
      name: 'Mary Washington',
      description: 'Classic variety with good disease resistance',
      daysToHarvest: 730,
    },
  ],
  companionPlants: ['Tomatoes', 'Parsley', 'Basil', 'Marigolds'],
  spacing: {
    betweenPlants: '12-18 inches',
    betweenRows: '36-48 inches',
  },
}; 