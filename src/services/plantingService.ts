/**
 * Service for retrieving and managing vegetable planting recommendations
 */

import { VEGETABLE_DATABASE } from '../constants/plantingData';
import { PlantingRecommendation, Vegetable } from '../types/planting';
import { getHardinessZone } from './hardinessZoneService';

/**
 * Gets planting recommendations for a given USDA hardiness zone
 * @param zone - The USDA hardiness zone (e.g., "7")
 * @returns Array of planting recommendations containing vegetable details and planting months
 */
export function getPlantingRecommendations(zone: string): PlantingRecommendation[] {
  return VEGETABLE_DATABASE
    .filter((vegetable: Vegetable) => vegetable.zones[zone])
    .map((vegetable: Vegetable) => ({
      vegetable: vegetable.name,
      category: vegetable.category,
      daysToHarvest: vegetable.daysToHarvest,
      plantingMonths: vegetable.zones[zone].plantingMonths.map(month => month.toString())
    }));
}

/**
 * Gets planting recommendations for a zip code by first determining its hardiness zone
 * @param zipCode - 5-digit US zip code
 * @returns Promise that resolves to an array of planting recommendations
 * @throws Error if the hardiness zone cannot be determined or if the API request fails
 */
export async function getPlantingGuide(zipCode: string): Promise<PlantingRecommendation[]> {
  try {
    const zone = await getHardinessZone(zipCode);
    return getPlantingRecommendations(zone);
  } catch (error: any) {
    if (error instanceof Error && error.message === 'Zip code is required') {
      throw error;
    }
    throw new Error('Failed to get planting guide');
  }
} 