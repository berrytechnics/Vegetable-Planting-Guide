import { VEGETABLE_DATABASE } from '../constants/plantingData';
import { PlantingRecommendation, Vegetable } from '../types/planting';
import { getHardinessZone } from './hardinessZoneService';

/**
 * Gets planting recommendations for a given USDA hardiness zone
 * @param zone - The USDA hardiness zone (e.g., "7")
 * @returns Array of planting recommendations for the given zone
 */
export function getPlantingRecommendations(zone: string): PlantingRecommendation[] {
  const recommendations: PlantingRecommendation[] = [];
  
  VEGETABLE_DATABASE.forEach((vegetable: Vegetable) => {
    if (vegetable.zones[zone]) {
      recommendations.push({
        vegetable: vegetable.name,
        category: vegetable.category,
        daysToHarvest: vegetable.daysToHarvest,
        plantingMonths: vegetable.zones[zone].plantingMonths.map(month => month.toString())
      });
    }
  });
  
  return recommendations;
}

/**
 * Gets planting recommendations for a zip code by first determining its hardiness zone
 * @param zipCode - 5-digit US zip code
 * @returns Promise that resolves to an array of planting recommendations
 * @throws Error if the hardiness zone cannot be determined
 */
export async function getPlantingGuide(zipCode: string): Promise<PlantingRecommendation[]> {
  try {
    const zone = await getHardinessZone(zipCode);
    return getPlantingRecommendations(zone);
  } catch (error) {
    throw new Error('Failed to get planting guide');
  }
} 