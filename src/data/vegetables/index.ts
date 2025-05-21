import { beetsPlantingData } from './beets/plantingData';
import { beetsPlantingTips } from './beets/plantingTips';
import { broccoliPlantingData } from './broccoli/plantingData';
import { broccoliPlantingTips } from './broccoli/plantingTips';
import { brusselsSproutsPlantingData } from './brussels-sprouts/plantingData';
import { brusselsSproutsPlantingTips } from './brussels-sprouts/plantingTips';
import { cabbagePlantingData } from './cabbage/plantingData';
import { cabbagePlantingTips } from './cabbage/plantingTips';
import { carrotPlantingData } from './carrot/plantingData';
import { carrotPlantingTips } from './carrot/plantingTips';
import { cauliflowerPlantingData } from './cauliflower/plantingData';
import { cauliflowerPlantingTips } from './cauliflower/plantingTips';
import { collardGreensPlantingData } from './collard-greens/plantingData';
import { collardGreensPlantingTips } from './collard-greens/plantingTips';
import { cucumbersPlantingData } from './cucumbers/plantingData';
import { cucumbersPlantingTips } from './cucumbers/plantingTips';
import { eggplantPlantingData } from './eggplant/plantingData';
import { eggplantPlantingTips } from './eggplant/plantingTips';
import { garlicPlantingData } from './garlic/plantingData';
import { garlicPlantingTips } from './garlic/plantingTips';
import { greenBeansPlantingData } from './green-beans/plantingData';
import { greenBeansPlantingTips } from './green-beans/plantingTips';
import { kalePlantingData } from './kale/plantingData';
import { kalePlantingTips } from './kale/plantingTips';
import { lettucePlantingData } from './lettuce/plantingData';
import { lettucePlantingTips } from './lettuce/plantingTips';
import { okraPlantingData } from './okra/plantingData';
import { okraPlantingTips } from './okra/plantingTips';
import { onionsPlantingData } from './onions/plantingData';
import { onionsPlantingTips } from './onions/plantingTips';
import { parsnipsPlantingData } from './parsnips/plantingData';
import { parsnipsPlantingTips } from './parsnips/plantingTips';
import { peppersPlantingData } from './peppers/plantingData';
import { peppersPlantingTips } from './peppers/plantingTips';
import { potatoesPlantingData } from './potatoes/plantingData';
import { potatoesPlantingTips } from './potatoes/plantingTips';
import { pumpkinsPlantingData } from './pumpkins/plantingData';
import { pumpkinsPlantingTips } from './pumpkins/plantingTips';
import { radishesPlantingData } from './radishes/plantingData';
import { radishesPlantingTips } from './radishes/plantingTips';
import { spinachPlantingData } from './spinach/plantingData';
import { spinachPlantingTips } from './spinach/plantingTips';
import { sweetPotatoesPlantingData } from './sweet-potatoes/plantingData';
import { sweetPotatoesPlantingTips } from './sweet-potatoes/plantingTips';
import { swissChardPlantingData } from './swiss-chard/plantingData';
import { swissChardPlantingTips } from './swiss-chard/plantingTips';
import { tomatoPlantingData } from './tomato/plantingData';
import { tomatoPlantingTips } from './tomato/plantingTips';
import { turnipsPlantingData } from './turnips/plantingData';
import { turnipsPlantingTips } from './turnips/plantingTips';
import { winterSquashPlantingData } from './winter-squash/plantingData';
import { winterSquashPlantingTips } from './winter-squash/plantingTips';
import { zucchiniPlantingData } from './zucchini/plantingData';
import { zucchiniPlantingTips } from './zucchini/plantingTips';

// Export all planting data
export const VEGETABLE_DATABASE = [
  tomatoPlantingData,
  carrotPlantingData,
  lettucePlantingData,
  peppersPlantingData,
  cucumbersPlantingData,
  broccoliPlantingData,
  spinachPlantingData,
  greenBeansPlantingData,
  zucchiniPlantingData,
  kalePlantingData,
  radishesPlantingData,
  potatoesPlantingData,
  beetsPlantingData,
  swissChardPlantingData,
  pumpkinsPlantingData,
  winterSquashPlantingData,
  onionsPlantingData,
  garlicPlantingData,
  cauliflowerPlantingData,
  eggplantPlantingData,
  sweetPotatoesPlantingData,
  brusselsSproutsPlantingData,
  cabbagePlantingData,
  turnipsPlantingData,
  parsnipsPlantingData,
  collardGreensPlantingData,
  okraPlantingData,
];

// Export all planting tips
export const PLANTING_TIPS = {
  Tomatoes: tomatoPlantingTips,
  Carrots: carrotPlantingTips,
  Lettuce: lettucePlantingTips,
  Peppers: peppersPlantingTips,
  Cucumbers: cucumbersPlantingTips,
  Broccoli: broccoliPlantingTips,
  Spinach: spinachPlantingTips,
  'Green Beans': greenBeansPlantingTips,
  Zucchini: zucchiniPlantingTips,
  Kale: kalePlantingTips,
  Radishes: radishesPlantingTips,
  Potatoes: potatoesPlantingTips,
  Beets: beetsPlantingTips,
  'Swiss Chard': swissChardPlantingTips,
  Pumpkins: pumpkinsPlantingTips,
  'Winter Squash': winterSquashPlantingTips,
  Onions: onionsPlantingTips,
  Garlic: garlicPlantingTips,
  Cauliflower: cauliflowerPlantingTips,
  Eggplant: eggplantPlantingTips,
  'Sweet Potatoes': sweetPotatoesPlantingTips,
  'Brussels Sprouts': brusselsSproutsPlantingTips,
  Cabbage: cabbagePlantingTips,
  Turnips: turnipsPlantingTips,
  Parsnips: parsnipsPlantingTips,
  'Collard Greens': collardGreensPlantingTips,
  Okra: okraPlantingTips,
};

// Export companion plants
export const COMPANION_PLANTS = {
  Tomatoes: tomatoPlantingData.companionPlants,
  Carrots: carrotPlantingData.companionPlants,
  Lettuce: lettucePlantingData.companionPlants,
  Peppers: peppersPlantingData.companionPlants,
  Cucumbers: cucumbersPlantingData.companionPlants,
  Broccoli: broccoliPlantingData.companionPlants,
  Spinach: spinachPlantingData.companionPlants,
  'Green Beans': greenBeansPlantingData.companionPlants,
  Zucchini: zucchiniPlantingData.companionPlants,
  Kale: kalePlantingData.companionPlants,
  Radishes: radishesPlantingData.companionPlants,
  Potatoes: potatoesPlantingData.companionPlants,
  Beets: beetsPlantingData.companionPlants,
  'Swiss Chard': swissChardPlantingData.companionPlants,
  Pumpkins: pumpkinsPlantingData.companionPlants,
  'Winter Squash': winterSquashPlantingData.companionPlants,
  Onions: onionsPlantingData.companionPlants,
  Garlic: garlicPlantingData.companionPlants,
  Cauliflower: cauliflowerPlantingData.companionPlants,
  Eggplant: eggplantPlantingData.companionPlants,
  'Sweet Potatoes': sweetPotatoesPlantingData.companionPlants,
  'Brussels Sprouts': brusselsSproutsPlantingData.companionPlants,
  Cabbage: cabbagePlantingData.companionPlants,
  Turnips: turnipsPlantingData.companionPlants,
  Parsnips: parsnipsPlantingData.companionPlants,
  'Collard Greens': collardGreensPlantingData.companionPlants,
  Okra: okraPlantingData.companionPlants,
};
