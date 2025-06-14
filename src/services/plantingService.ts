/**
 * Service for retrieving and managing vegetable planting recommendations.
 * This service provides functionality to get planting recommendations based on USDA hardiness zones
 * and integrates with the hardiness zone service to provide location-specific recommendations.
 */

import { VEGETABLE_DATABASE } from '../plants';
import { PlantingRecommendation, Vegetable } from '../types/planting';
import { getHardinessZone } from './hardinessZoneService';

/**
 * Gets planting recommendations for a given USDA hardiness zone.
 * Filters the vegetable database to only include vegetables suitable for the specified zone
 * and formats the data for display.
 *
 * @param zone - The USDA hardiness zone (e.g., "7")
 * @returns Array of planting recommendations containing vegetable details and planting months
 */
export function getPlantingRecommendations(zone: string): PlantingRecommendation[] {
  return VEGETABLE_DATABASE.filter((vegetable: Vegetable) => vegetable.zones[zone]).map(
    (vegetable: Vegetable) => ({
      vegetable: vegetable.name,
      category: vegetable.category,
      daysToHarvest: vegetable.daysToHarvest,
      plantingMonths: vegetable.zones[zone].plantingMonths.map(month => month.toString()),
    })
  );
}

/**
 * Gets planting recommendations for a zip code by first determining its hardiness zone.
 * This is the main entry point for getting location-specific planting recommendations.
 *
 * @param zipCode - 5-digit US zip code
 * @returns Promise that resolves to an array of planting recommendations
 * @throws Error if:
 *   - Zip code is empty
 *   - Hardiness zone cannot be determined
 *   - API request fails
 */
export async function getPlantingGuide(zipCode: string): Promise<PlantingRecommendation[]> {
  try {
    const zone = await getHardinessZone(zipCode);
    return getPlantingRecommendations(zone);
  } catch (error: unknown) {
    if (error instanceof Error && error.message === 'Zip code is required') {
      throw error;
    }
    throw new Error('Failed to get planting guide');
  }
}
