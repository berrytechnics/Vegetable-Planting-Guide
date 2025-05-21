import { VegetableCategory } from '../../../types/planting';

export const kalePlantingData = {
  name: "Kale",
  category: VegetableCategory.LEAFY,
  daysToHarvest: 55,
  zones: {
    "3": { plantingMonths: [4, 5, 6, 7, 8] },
    "4": { plantingMonths: [4, 5, 6, 7, 8] },
    "5": { plantingMonths: [3, 4, 5, 6, 7, 8, 9] },
    "6": { plantingMonths: [3, 4, 5, 6, 7, 8, 9] },
    "7": { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
    "8": { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
    "9": { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    "10": { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  },
  varieties: [
    {
      name: "Lacinato",
      description: "Italian heirloom with dark, bumpy leaves",
      daysToHarvest: 60
    },
    {
      name: "Red Russian",
      description: "Tender, purple-veined leaves with sweet flavor",
      daysToHarvest: 50
    },
    {
      name: "Winterbor",
      description: "Cold-hardy variety with curly leaves",
      daysToHarvest: 55
    }
  ],
  companionPlants: [
    "Beets",
    "Celery",
    "Onions",
    "Potatoes",
    "Herbs"
  ],
  spacing: {
    betweenPlants: "12-18 inches",
    betweenRows: "18-24 inches"
  }
}; 