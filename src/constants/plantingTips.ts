/**
 * Core planting tips data for the Vegetable Planting Guide application
 */

/**
 * Interface defining the structure of planting tips for each vegetable
 */
interface PlantingTip {
  soil: string;
  sunlight: string;
  spacing: string;
  watering: string;
  care: string[];
  harvest: string;
  companion: string[];
}

/**
 * Comprehensive database of planting tips for various vegetables
 * Contains detailed growing instructions and companion planting information
 */
export const PLANTING_TIPS: Record<string, PlantingTip> = {
  "Tomatoes": {
    soil: "NPK 5-10-10 for fruiting, 10-10-10 for growth",
    sunlight: "Full sun (6-8 hours daily)",
    spacing: "24-36 inches apart",
    watering: "1-2 inches per week, water at soil level",
    care: [
      "Stake or cage plants for support",
      "Remove suckers (shoots between main stem and branches)",
      "Mulch to retain moisture and prevent soil-borne diseases",
      "Fertilize with balanced fertilizer every 2-3 weeks"
    ],
    harvest: "Harvest when fruits are fully colored and slightly soft",
    companion: ["Basil", "Marigolds", "Garlic", "Onions", "Carrots"]
  },
  "Carrots": {
    soil: "NPK 1-2-2 for root development",
    sunlight: "Full sun to partial shade",
    spacing: "2-3 inches apart",
    watering: "Keep soil consistently moist but not waterlogged",
    care: [
      "Thin seedlings to prevent crowding",
      "Keep soil loose for straight root growth",
      "Mulch to keep soil cool and moist",
      "Remove weeds carefully to avoid disturbing roots"
    ],
    harvest: "Harvest when tops are 3/4 inch in diameter",
    companion: ["Onions", "Rosemary", "Sage", "Lettuce"]
  },
  "Lettuce": {
    soil: "NPK 3-1-2 for leafy growth",
    sunlight: "Partial shade in hot weather",
    spacing: "6-12 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Plant in cool weather",
      "Succession plant every 2-3 weeks",
      "Protect from hot sun in summer",
      "Fertilize lightly every 2-3 weeks"
    ],
    harvest: "Harvest outer leaves or entire head when mature",
    companion: ["Carrots", "Radishes", "Strawberries", "Cucumbers"]
  },
  "Cucumbers": {
    soil: "NPK 5-10-10 for fruiting, 10-10-10 for growth",
    sunlight: "Full sun",
    spacing: "36-60 inches apart",
    watering: "1-2 inches per week, water at soil level",
    care: [
      "Train vines on trellis for better air circulation",
      "Mulch to keep soil moist and fruits clean",
      "Fertilize when first flowers appear",
      "Monitor for cucumber beetles"
    ],
    harvest: "Harvest when firm and bright green",
    companion: ["Corn", "Beans", "Peas", "Radishes", "Sunflowers"]
  },
  "Peppers": {
    soil: "NPK 5-10-10 for fruiting, 10-10-10 for growth",
    sunlight: "Full sun",
    spacing: "18-24 inches apart",
    watering: "1-2 inches per week, water at soil level",
    care: [
      "Start indoors 8-10 weeks before last frost",
      "Use black plastic mulch to warm soil",
      "Fertilize when first flowers appear",
      "Support plants if heavy with fruit"
    ],
    harvest: "Harvest when firm and fully colored",
    companion: ["Basil", "Oregano", "Marigolds", "Onions"]
  },
  "Spinach": {
    soil: "NPK 3-1-2 for leafy growth",
    sunlight: "Full sun to partial shade",
    spacing: "3-6 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Plant in cool weather",
      "Succession plant every 2-3 weeks",
      "Protect from hot sun in summer",
      "Fertilize lightly every 2-3 weeks"
    ],
    harvest: "Harvest outer leaves when 6-8 inches long",
    companion: ["Strawberries", "Radishes", "Lettuce", "Kale"]
  },
  "Green Beans": {
    soil: "NPK 1-2-2 for root development",
    sunlight: "Full sun",
    spacing: "3-4 inches apart",
    watering: "1 inch per week, water at soil level",
    care: [
      "Plant after last frost",
      "Provide support for pole varieties",
      "Mulch to retain moisture",
      "Fertilize when first flowers appear"
    ],
    harvest: "Harvest when pods are firm and crisp",
    companion: ["Corn", "Potatoes", "Cucumbers", "Strawberries"]
  },
  "Zucchini": {
    soil: "NPK 5-10-10 for fruiting, 10-10-10 for growth",
    sunlight: "Full sun",
    spacing: "24-36 inches apart",
    watering: "1-2 inches per week, water at soil level",
    care: [
      "Plant after last frost",
      "Mulch to retain moisture",
      "Fertilize when first flowers appear",
      "Monitor for squash bugs"
    ],
    harvest: "Harvest when 6-8 inches long",
    companion: ["Corn", "Beans", "Nasturtiums", "Marigolds"]
  },
  "Bok Choy": {
    soil: "NPK 3-1-2 for leafy growth",
    sunlight: "Full sun to partial shade",
    spacing: "6-12 inches apart",
    watering: "Keep soil consistently moist but not waterlogged",
    care: [
      "Plant in cool weather",
      "Protect from hot sun in summer",
      "Fertilize lightly every 2-3 weeks",
      "Watch for cabbage worms"
    ],
    harvest: "Harvest when heads are firm and before they bolt",
    companion: ["Carrots", "Beets", "Lettuce", "Spinach"]
  },
  "Kohlrabi": {
    soil: "NPK 1-2-2 for root development",
    sunlight: "Full sun",
    spacing: "6-8 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Plant in cool weather",
      "Mulch to keep soil cool",
      "Fertilize lightly every 2-3 weeks",
      "Watch for cabbage worms"
    ],
    harvest: "Harvest when bulbs are 2-3 inches in diameter",
    companion: ["Beets", "Onions", "Cucumbers", "Lettuce"]
  },
  "Rutabaga": {
    soil: "NPK 1-2-2 for root development",
    sunlight: "Full sun",
    spacing: "6-8 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Plant in cool weather",
      "Mulch to keep soil cool",
      "Fertilize lightly every 2-3 weeks",
      "Keep soil loose for root development"
    ],
    harvest: "Harvest after first frost for best flavor",
    companion: ["Peas", "Beans", "Lettuce", "Spinach"]
  },
  "Daikon": {
    soil: "NPK 1-2-2 for root development",
    sunlight: "Full sun",
    spacing: "4-6 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Plant in cool weather",
      "Keep soil loose for root development",
      "Fertilize lightly every 2-3 weeks",
      "Good for breaking up compacted soil"
    ],
    harvest: "Harvest before roots get too large and woody",
    companion: ["Lettuce", "Spinach", "Carrots", "Cucumbers"]
  },
  "Bitter Melon": {
    soil: "NPK 5-10-10 for fruiting, 10-10-10 for growth",
    sunlight: "Full sun",
    spacing: "36-48 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Provide strong trellis support",
      "Mulch to retain moisture",
      "Fertilize when first flowers appear",
      "Monitor for pests"
    ],
    harvest: "Harvest when fruits are 4-6 inches long",
    companion: ["Beans", "Corn", "Marigolds", "Nasturtiums"]
  },
  "Jicama": {
    soil: "NPK 1-2-2 for root development",
    sunlight: "Full sun",
    spacing: "12-18 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Needs long growing season",
      "Mulch to retain moisture",
      "Fertilize lightly every 2-3 weeks",
      "Protect from frost"
    ],
    harvest: "Harvest before first frost",
    companion: ["Corn", "Beans", "Marigolds", "Nasturtiums"]
  },
  "Taro": {
    soil: "NPK 1-2-2 for root development",
    sunlight: "Partial shade in hot climates",
    spacing: "24-36 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Plant in warm weather",
      "Mulch to retain moisture",
      "Fertilize lightly every 2-3 weeks",
      "Protect from frost"
    ],
    harvest: "Harvest when leaves start to yellow",
    companion: ["Beans", "Corn", "Marigolds", "Nasturtiums"]
  },
  "Malabar Spinach": {
    soil: "NPK 3-1-2 for leafy growth",
    sunlight: "Full sun to partial shade",
    spacing: "12-18 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Provide trellis support",
      "Harvest leaves regularly",
      "Fertilize lightly every 2-3 weeks",
      "Tolerates heat better than regular spinach"
    ],
    harvest: "Harvest leaves regularly to promote growth",
    companion: ["Beans", "Corn", "Cucumbers", "Peppers"]
  },
  "Luffa": {
    soil: "NPK 5-10-10 for fruiting, 10-10-10 for growth",
    sunlight: "Full sun",
    spacing: "36-48 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Provide strong trellis support",
      "Mulch to retain moisture",
      "Fertilize when first flowers appear",
      "Requires long growing season"
    ],
    harvest: "Harvest young for eating, mature for sponges",
    companion: ["Corn", "Beans", "Marigolds", "Nasturtiums"]
  },
  "Yardlong Beans": {
    soil: "NPK 1-2-2 for root development",
    sunlight: "Full sun",
    spacing: "6-8 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Provide trellis support",
      "Mulch to retain moisture",
      "Fertilize when first flowers appear",
      "Prefers hot weather"
    ],
    harvest: "Harvest when pods are 12-18 inches long",
    companion: ["Corn", "Cucumbers", "Potatoes", "Strawberries"]
  },
  "Chayote": {
    soil: "NPK 5-10-10 for fruiting, 10-10-10 for growth",
    sunlight: "Full sun",
    spacing: "36-48 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Provide strong trellis support",
      "Mulch to retain moisture",
      "Fertilize when first flowers appear",
      "Prefers warm, humid conditions"
    ],
    harvest: "Harvest when fruits are 4-6 inches long",
    companion: ["Beans", "Corn", "Marigolds", "Nasturtiums"]
  },
  "Winged Bean": {
    soil: "NPK 1-2-2 for root development",
    sunlight: "Full sun",
    spacing: "6-8 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Provide trellis support",
      "Mulch to retain moisture",
      "Fertilize when first flowers appear",
      "All parts of the plant are edible"
    ],
    harvest: "Harvest pods when young and tender",
    companion: ["Corn", "Cucumbers", "Potatoes", "Strawberries"]
  },
  "Oca": {
    soil: "NPK 1-2-2 for root development",
    sunlight: "Full sun",
    spacing: "12-18 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Plant in cool weather",
      "Mulch to keep soil cool",
      "Fertilize lightly every 2-3 weeks",
      "Can be stored like potatoes"
    ],
    harvest: "Harvest after first frost",
    companion: ["Beans", "Corn", "Marigolds", "Nasturtiums"]
  },
  "Ulluco": {
    soil: "NPK 1-2-2 for root development",
    sunlight: "Full sun",
    spacing: "12-18 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Plant in cool weather",
      "Mulch to keep soil cool",
      "Fertilize lightly every 2-3 weeks",
      "Store in cool, humid conditions"
    ],
    harvest: "Harvest after first frost",
    companion: ["Beans", "Corn", "Marigolds", "Nasturtiums"]
  },
  "Mashua": {
    soil: "NPK 1-2-2 for root development",
    sunlight: "Full sun",
    spacing: "12-18 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Plant in cool weather",
      "Mulch to keep soil cool",
      "Fertilize lightly every 2-3 weeks",
      "Can be stored like potatoes"
    ],
    harvest: "Harvest after first frost",
    companion: ["Beans", "Corn", "Marigolds", "Nasturtiums"]
  },
  "Yacon": {
    soil: "NPK 1-2-2 for root development",
    sunlight: "Full sun",
    spacing: "24-36 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Plant in warm weather",
      "Mulch to retain moisture",
      "Fertilize lightly every 2-3 weeks",
      "Store in cool, humid conditions"
    ],
    harvest: "Harvest after first frost",
    companion: ["Beans", "Corn", "Marigolds", "Nasturtiums"]
  },
  "Basil": {
    soil: "NPK 3-1-2 for leafy growth",
    sunlight: "Full sun",
    spacing: "12-18 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Pinch off flower buds to promote leaf growth",
      "Harvest leaves regularly",
      "Fertilize lightly every 2-3 weeks",
      "Prefers warm temperatures"
    ],
    harvest: "Harvest leaves regularly to encourage bushiness",
    companion: ["Tomatoes", "Peppers", "Oregano", "Marigolds"]
  },
  "Rosemary": {
    soil: "NPK 1-1-1 for herbs",
    sunlight: "Full sun",
    spacing: "24-36 inches apart",
    watering: "Tolerates drought once established",
    care: [
      "Prune regularly to maintain shape",
      "Protect from frost in cold climates",
      "Fertilize lightly in spring",
      "Can be grown as a perennial in warmer zones"
    ],
    harvest: "Harvest stems as needed",
    companion: ["Sage", "Thyme", "Carrots", "Beans"]
  },
  "Thyme": {
    soil: "NPK 1-1-1 for herbs",
    sunlight: "Full sun",
    spacing: "12-18 inches apart",
    watering: "Tolerates drought once established",
    care: [
      "Prune regularly to maintain shape",
      "Protect from frost in cold climates",
      "Fertilize lightly in spring",
      "Can be grown as a perennial in warmer zones"
    ],
    harvest: "Harvest stems as needed",
    companion: ["Cabbage", "Broccoli", "Eggplant", "Strawberries"]
  },
  "Oregano": {
    soil: "NPK 1-1-1 for herbs",
    sunlight: "Full sun",
    spacing: "12-18 inches apart",
    watering: "Tolerates drought once established",
    care: [
      "Prune regularly to maintain shape",
      "Protect from frost in cold climates",
      "Fertilize lightly in spring",
      "Can be grown as a perennial in warmer zones"
    ],
    harvest: "Harvest leaves before flowering for best flavor",
    companion: ["Peppers", "Tomatoes", "Basil", "Marigolds"]
  },
  "Sage": {
    soil: "NPK 1-1-1 for herbs",
    sunlight: "Full sun",
    spacing: "24-36 inches apart",
    watering: "Tolerates drought once established",
    care: [
      "Prune regularly to maintain shape",
      "Protect from frost in cold climates",
      "Fertilize lightly in spring",
      "Can be grown as a perennial in warmer zones"
    ],
    harvest: "Harvest leaves as needed",
    companion: ["Rosemary", "Cabbage", "Carrots", "Strawberries"]
  },
  "Mint": {
    soil: "NPK 3-1-2 for leafy growth",
    sunlight: "Partial shade in hot climates",
    spacing: "18-24 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Best grown in containers to control spread",
      "Prune regularly to maintain shape",
      "Fertilize lightly every 2-3 weeks",
      "Divide plants every 2-3 years"
    ],
    harvest: "Harvest leaves as needed",
    companion: ["Cabbage", "Tomatoes", "Peppers", "Broccoli"]
  },
  "Lavender": {
    soil: "NPK 1-1-1 for herbs",
    sunlight: "Full sun",
    spacing: "24-36 inches apart",
    watering: "Tolerates drought once established",
    care: [
      "Prune regularly to maintain shape",
      "Protect from frost in cold climates",
      "Fertilize lightly in spring",
      "Prefers good air circulation"
    ],
    harvest: "Harvest flowers when buds are just opening",
    companion: ["Rosemary", "Sage", "Thyme", "Oregano"]
  },
  "Dill": {
    soil: "NPK 1-1-1 for herbs",
    sunlight: "Full sun",
    spacing: "12-18 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Direct sow as it doesn't transplant well",
      "Succession plant every 2-3 weeks",
      "Fertilize lightly every 2-3 weeks",
      "Let some plants go to seed for next year"
    ],
    harvest: "Harvest leaves as needed",
    companion: ["Cabbage", "Cucumbers", "Lettuce", "Onions"]
  },
  "Cilantro": {
    soil: "NPK 3-1-2 for leafy growth",
    sunlight: "Full sun to partial shade",
    spacing: "6-8 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Direct sow every 2-3 weeks",
      "Plant in cool weather",
      "Fertilize lightly every 2-3 weeks",
      "Harvest before plant bolts"
    ],
    harvest: "Harvest leaves before plant bolts",
    companion: ["Spinach", "Lettuce", "Tomatoes", "Peppers"]
  },
  "Parsley": {
    soil: "NPK 3-1-2 for leafy growth",
    sunlight: "Full sun to partial shade",
    spacing: "8-12 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Start indoors 8-10 weeks before last frost",
      "Fertilize lightly every 2-3 weeks",
      "Biennial but usually grown as annual",
      "Protect from hot sun in summer"
    ],
    harvest: "Harvest outer leaves as needed",
    companion: ["Tomatoes", "Asparagus", "Corn", "Peppers"]
  },
  "Chives": {
    soil: "NPK 1-1-1 for herbs",
    sunlight: "Full sun to partial shade",
    spacing: "8-12 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Divide clumps every 3-4 years",
      "Fertilize lightly in spring",
      "Can be grown as a perennial in most zones",
      "Protect from hot sun in summer"
    ],
    harvest: "Harvest leaves as needed",
    companion: ["Carrots", "Tomatoes", "Broccoli", "Cabbage"]
  },
  "Tarragon": {
    soil: "NPK 1-1-1 for herbs",
    sunlight: "Full sun",
    spacing: "18-24 inches apart",
    watering: "Tolerates drought once established",
    care: [
      "Prune regularly to maintain shape",
      "Protect from frost in cold climates",
      "Fertilize lightly in spring",
      "Can be grown as a perennial in warmer zones"
    ],
    harvest: "Harvest leaves as needed",
    companion: ["Eggplant", "Peppers", "Tomatoes", "Marigolds"]
  },
  "Marjoram": {
    soil: "NPK 1-1-1 for herbs",
    sunlight: "Full sun",
    spacing: "12-18 inches apart",
    watering: "Tolerates drought once established",
    care: [
      "Prune regularly to maintain shape",
      "Protect from frost in cold climates",
      "Fertilize lightly in spring",
      "Can be grown as a perennial in warmer zones"
    ],
    harvest: "Harvest leaves before flowering",
    companion: ["Carrots", "Peppers", "Tomatoes", "Basil"]
  },
  "Lemongrass": {
    soil: "NPK 3-1-2 for leafy growth",
    sunlight: "Full sun",
    spacing: "24-36 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Bring indoors in cold climates",
      "Fertilize lightly every 2-3 weeks",
      "Divide plants every 2-3 years",
      "Protect from frost"
    ],
    harvest: "Harvest stalks as needed",
    companion: ["Basil", "Mint", "Marigolds", "Nasturtiums"]
  },
  "Stevia": {
    soil: "NPK 3-1-2 for leafy growth",
    sunlight: "Full sun",
    spacing: "18-24 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Bring indoors in cold climates",
      "Fertilize lightly every 2-3 weeks",
      "Harvest before flowering",
      "Protect from frost"
    ],
    harvest: "Harvest leaves before flowering",
    companion: ["Basil", "Mint", "Marigolds", "Nasturtiums"]
  },
  "Lemon Balm": {
    soil: "NPK 3-1-2 for leafy growth",
    sunlight: "Full sun to partial shade",
    spacing: "18-24 inches apart",
    watering: "Keep soil consistently moist",
    care: [
      "Prune regularly to maintain shape",
      "Fertilize lightly in spring",
      "Can be grown as a perennial in most zones",
      "Divide plants every 2-3 years"
    ],
    harvest: "Harvest leaves as needed",
    companion: ["Tomatoes", "Peppers", "Basil", "Marigolds"]
  },
  "Catnip": {
    soil: "NPK 3-1-2 for leafy growth",
    sunlight: "Full sun to partial shade",
    spacing: "18-24 inches apart",
    watering: "Tolerates drought once established",
    care: [
      "Prune regularly to maintain shape",
      "Fertilize lightly in spring",
      "Can be grown as a perennial in most zones",
      "Divide plants every 2-3 years"
    ],
    harvest: "Harvest leaves before flowering",
    companion: ["Beans", "Corn", "Marigolds", "Nasturtiums"]
  },
  "Borage": {
    soil: "NPK 3-1-2 for leafy growth",
    sunlight: "Full sun",
    spacing: "12-18 inches apart",
    watering: "Tolerates drought once established",
    care: [
      "Self-seeds readily",
      "Fertilize lightly in spring",
      "Attracts pollinators",
      "Can be grown as an annual"
    ],
    harvest: "Harvest leaves and flowers as needed",
    companion: ["Tomatoes", "Strawberries", "Squash", "Cucumbers"]
  }
}; 