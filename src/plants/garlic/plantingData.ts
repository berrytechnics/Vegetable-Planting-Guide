import { VegetableCategory } from '../../types/planting';

export const garlicPlantingData = {
  name: 'Garlic',
  category: VegetableCategory.ALLIUM,
  daysToHarvest: 240,
  zones: {
    '3': { plantingMonths: [9, 10] },
    '4': { plantingMonths: [9, 10] },
    '5': { plantingMonths: [9, 10] },
    '6': { plantingMonths: [9, 10, 11] },
    '7': { plantingMonths: [9, 10, 11] },
    '8': { plantingMonths: [9, 10, 11] },
    '9': { plantingMonths: [9, 10, 11] },
    '10': { plantingMonths: [9, 10, 11] },
  },
  varieties: [
    {
      name: 'Hardneck',
      description: 'Cold-hardy with complex flavors and easy-to-peel cloves',
      daysToHarvest: 240,
    },
    {
      name: 'Softneck',
      description: 'Milder flavor, stores longer, and produces more cloves',
      daysToHarvest: 240,
    },
    {
      name: 'Elephant',
      description: 'Large, mild-flavored cloves, actually a type of leek',
      daysToHarvest: 240,
    },
  ],
  companionPlants: ['Tomatoes', 'Peppers', 'Potatoes', 'Cabbage'],
  spacing: {
    betweenPlants: '4-6 inches',
    betweenRows: '12-18 inches',
  },
};
