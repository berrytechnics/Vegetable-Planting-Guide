import { VegetableCategory } from '../../../types/planting';

export const potatoesPlantingData = {
  name: "Potatoes",
  category: VegetableCategory.ROOT,
  daysToHarvest: 100,
  zones: {
    "3": { plantingMonths: [4, 5] },
    "4": { plantingMonths: [4, 5] },
    "5": { plantingMonths: [3, 4, 5] },
    "6": { plantingMonths: [3, 4, 5] },
    "7": { plantingMonths: [2, 3, 4, 5] },
    "8": { plantingMonths: [2, 3, 4, 5] },
    "9": { plantingMonths: [1, 2, 3, 4, 5, 6] },
    "10": { plantingMonths: [1, 2, 3, 4, 5, 6] },
  },
  varieties: [
    {
      name: "Yukon Gold",
      description: "Yellow-fleshed potato with buttery flavor",
      daysToHarvest: 90
    },
    {
      name: "Russet",
      description: "Classic baking potato with fluffy texture",
      daysToHarvest: 100
    },
    {
      name: "Red Pontiac",
      description: "Red-skinned potato with waxy texture",
      daysToHarvest: 95
    }
  ],
  companionPlants: [
    "Beans",
    "Corn",
    "Cabbage",
    "Horseradish",
    "Marigolds"
  ],
  spacing: {
    betweenPlants: "12-15 inches",
    betweenRows: "30-36 inches"
  }
}; 