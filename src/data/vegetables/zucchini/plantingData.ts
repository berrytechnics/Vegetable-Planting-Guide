import { VegetableCategory } from '../../../types/planting';

export const zucchiniPlantingData = {
  name: "Zucchini",
  category: VegetableCategory.CUCURBIT,
  daysToHarvest: 50,
  zones: {
    "3": { plantingMonths: [5, 6] },
    "4": { plantingMonths: [5, 6] },
    "5": { plantingMonths: [4, 5, 6, 7] },
    "6": { plantingMonths: [4, 5, 6, 7] },
    "7": { plantingMonths: [3, 4, 5, 6, 7, 8] },
    "8": { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9] },
    "9": { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
    "10": { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  },
  varieties: [
    {
      name: "Black Beauty",
      description: "Classic dark green zucchini with excellent flavor",
      daysToHarvest: 50
    },
    {
      name: "Golden",
      description: "Yellow-skinned variety with sweet flavor",
      daysToHarvest: 45
    },
    {
      name: "Costata Romanesco",
      description: "Italian heirloom with ribbed, nutty-flavored fruit",
      daysToHarvest: 55
    }
  ],
  companionPlants: [
    "Corn",
    "Beans",
    "Peas",
    "Radishes",
    "Nasturtiums"
  ],
  spacing: {
    betweenPlants: "24-36 inches",
    betweenRows: "36-48 inches"
  }
}; 