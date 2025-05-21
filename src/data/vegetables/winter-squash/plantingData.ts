import { VegetableCategory } from '../../../types/planting';

export const winterSquashPlantingData = {
  name: "Winter Squash",
  category: VegetableCategory.CUCURBIT,
  daysToHarvest: 100,
  zones: {
    "3": { plantingMonths: [5, 6] },
    "4": { plantingMonths: [5, 6] },
    "5": { plantingMonths: [4, 5, 6] },
    "6": { plantingMonths: [4, 5, 6] },
    "7": { plantingMonths: [3, 4, 5, 6, 7] },
    "8": { plantingMonths: [2, 3, 4, 5, 6, 7, 8] },
    "9": { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9] },
    "10": { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  },
  varieties: [
    {
      name: "Butternut",
      description: "Sweet, nutty flavor with tan skin",
      daysToHarvest: 100
    },
    {
      name: "Acorn",
      description: "Small, dark green with sweet flesh",
      daysToHarvest: 85
    },
    {
      name: "Spaghetti",
      description: "Yellow flesh that separates into strands",
      daysToHarvest: 90
    }
  ],
  companionPlants: ["Corn", "Beans", "Marigolds", "Nasturtiums"],
  spacing: {
    betweenPlants: "36-48 inches",
    betweenRows: "48-72 inches"
  }
}; 