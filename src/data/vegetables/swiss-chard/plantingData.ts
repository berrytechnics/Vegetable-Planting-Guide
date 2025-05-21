import { VegetableCategory } from '../../../types/planting';

export const swissChardPlantingData = {
  name: "Swiss Chard",
  category: VegetableCategory.LEAFY,
  daysToHarvest: 55,
  zones: {
    "3": { plantingMonths: [4, 5, 6, 7] },
    "4": { plantingMonths: [4, 5, 6, 7] },
    "5": { plantingMonths: [4, 5, 6, 7, 8] },
    "6": { plantingMonths: [3, 4, 5, 6, 7, 8] },
    "7": { plantingMonths: [2, 3, 4, 5, 6, 7, 8, 9] },
    "8": { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    "9": { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    "10": { plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  },
  varieties: [
    {
      name: "Bright Lights",
      description: "Colorful stems in yellow, orange, pink, and red",
      daysToHarvest: 55
    },
    {
      name: "Fordhook Giant",
      description: "Classic green with white stems",
      daysToHarvest: 60
    },
    {
      name: "Ruby Red",
      description: "Deep red stems and veins",
      daysToHarvest: 55
    }
  ],
  companionPlants: ["Onions", "Garlic", "Beans", "Cabbage"],
  spacing: {
    betweenPlants: "6-8 inches",
    betweenRows: "18-24 inches"
  }
}; 