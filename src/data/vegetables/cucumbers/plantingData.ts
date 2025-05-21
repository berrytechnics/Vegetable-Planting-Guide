import { VegetableCategory } from '../../../types/planting';

export const cucumbersPlantingData = {
  name: "Cucumbers",
  category: VegetableCategory.CUCURBIT,
  daysToHarvest: 60,
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
      name: "Marketmore",
      description: "Classic slicing cucumber, great for fresh eating",
      daysToHarvest: 58
    },
    {
      name: "Pickling",
      description: "Small, crisp cucumbers perfect for pickling",
      daysToHarvest: 50
    },
    {
      name: "English",
      description: "Long, seedless cucumbers with thin skin",
      daysToHarvest: 65
    }
  ],
  companionPlants: [
    "Corn",
    "Beans",
    "Peas",
    "Radishes",
    "Sunflowers"
  ],
  spacing: {
    betweenPlants: "12-18 inches",
    betweenRows: "36-48 inches"
  }
}; 