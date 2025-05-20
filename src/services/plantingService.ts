import { VEGETABLE_DATABASE } from '../constants/plantingData';
import { PlantingRecommendation, Vegetable } from '../types/planting';
import { getHardinessZone } from './hardinessZoneService';

/**
 * Gets planting recommendations for a given USDA hardiness zone
 * Filters the vegetable database to find plants suitable for the specified zone
 * and formats the data into a user-friendly recommendation structure.
 * 
 * @param zone - The USDA hardiness zone (e.g., "7")
 * @returns Array of planting recommendations containing:
 *   - vegetable name
 *   - category (e.g., Root, Leafy, Fruit)
 *   - days to harvest
 *   - recommended planting months
 * @example
 * const recommendations = getPlantingRecommendations("7");
 * // Returns array of vegetables that can be planted in zone 7
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
 * This is the main entry point for getting planting recommendations by location.
 * 
 * @param zipCode - 5-digit US zip code
 * @returns Promise that resolves to an array of planting recommendations
 * @throws Error if the hardiness zone cannot be determined or if the API request fails
 * @example
 * try {
 *   const recommendations = await getPlantingGuide("12345");
 *   console.log("Planting recommendations:", recommendations);
 * } catch (error) {
 *   console.error("Failed to get recommendations:", error);
 * }
 */
export async function getPlantingGuide(zipCode: string): Promise<PlantingRecommendation[]> {
  try {
    const zone = await getHardinessZone(zipCode);
    return getPlantingRecommendations(zone);
  } catch (error) {
    throw new Error('Failed to get planting guide');
  }
} 