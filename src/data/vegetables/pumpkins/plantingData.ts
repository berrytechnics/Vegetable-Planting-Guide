import { VegetableCategory } from '../../../types/planting';

export const pumpkinsPlantingData = {
  name: "Pumpkins",
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
      name: "Jack O'Lantern",
      description: "Classic orange pumpkin for carving",
      daysToHarvest: 100
    },
    {
      name: "Sugar Pie",
      description: "Small, sweet pumpkin perfect for pies",
      daysToHarvest: 95
    },
    {
      name: "Atlantic Giant",
      description: "Giant pumpkin variety for competitions",
      daysToHarvest: 120
    }
  ],
  companionPlants: ["Corn", "Beans", "Marigolds", "Nasturtiums"],
  spacing: {
    betweenPlants: "36-48 inches",
    betweenRows: "48-72 inches"
  }
}; 