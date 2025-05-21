import { VegetableCategory } from '../../../types/planting';

export const cauliflowerPlantingData = {
  name: "Cauliflower",
  category: VegetableCategory.CRUCIFEROUS,
  daysToHarvest: 80,
  zones: {
    "3": { plantingMonths: [5, 6] },
    "4": { plantingMonths: [4, 5, 6] },
    "5": { plantingMonths: [4, 5, 6, 7] },
    "6": { plantingMonths: [3, 4, 5, 6, 7] },
    "7": { plantingMonths: [2, 3, 4, 5, 6, 7, 8] },
    "8": { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    "9": { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    "10": { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }
  },
  varieties: [
    {
      name: "Snowball",
      description: "Classic white variety with tight, compact heads",
      daysToHarvest: 80
    },
    {
      name: "Purple",
      description: "Rich in antioxidants, turns green when cooked",
      daysToHarvest: 80
    },
    {
      name: "Orange",
      description: "High in vitamin A, maintains color when cooked",
      daysToHarvest: 80
    }
  ],
  companionPlants: ["Celery", "Beans", "Spinach", "Peas"],
  spacing: {
    betweenPlants: "18-24 inches",
    betweenRows: "24-36 inches"
  }
}; 