import { VegetableCategory } from '../../../types/planting';

export const tomatoPlantingData = {
  name: "Tomatoes",
  category: VegetableCategory.FRUIT,
  daysToHarvest: 60,
  zones: {
    "3": { plantingMonths: [6] },
    "4": { plantingMonths: [5, 6] },
    "5": { plantingMonths: [5, 6] },
    "6": { plantingMonths: [4, 5, 6] },
    "7": { plantingMonths: [3, 4, 5, 6, 7] },
    "8": { plantingMonths: [2, 3, 4, 5, 8, 9] },
    "9": { plantingMonths: [2, 3, 4, 8, 9, 10] },
    "10": { plantingMonths: [1, 2, 3, 9, 10, 11] },
  },
  varieties: [
    {
      name: "Roma",
      description: "Plum tomato, great for sauces and canning",
      daysToHarvest: 75
    },
    {
      name: "Beefsteak",
      description: "Large, meaty tomatoes perfect for slicing",
      daysToHarvest: 85
    },
    {
      name: "Cherry",
      description: "Small, sweet tomatoes great for snacking",
      daysToHarvest: 60
    }
  ],
  companionPlants: [
    "Basil",
    "Marigold",
    "Garlic",
    "Onion",
    "Parsley"
  ],
  spacing: {
    betweenPlants: "24-36 inches",
    betweenRows: "36-48 inches"
  }
}; 