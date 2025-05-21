/**
 * Core type definitions for the Vegetable Planting Guide application
 */

/**
 * Response from the USDA Hardiness Zone API
 */
export interface HardinessZoneResponse {
  zone: string;
  zipcode: string;
  temperature_range: string;
}

/**
 * Month information with name and number
 */
export interface Month {
  name: string;
  shortName: string;
  number: number;
}

/**
 * Vegetable categories
 */
export enum VegetableCategory {
  ROOT = 'Root Vegetables',
  LEAFY = 'Leafy Greens',
  FRUIT = 'Fruiting Vegetables',
  LEGUME = 'Legumes',
  ALLIUM = 'Alliums',
  CRUCIFEROUS = 'Cruciferous Vegetables',
  CUCURBIT = 'Cucurbits',
  PERENNIAL = 'Perennial Vegetables',
  HERB = 'Herbs',
  OTHER = 'Other',
}

/**
 * Vegetable planting data structure
 */
export interface Vegetable {
  name: string;
  category: VegetableCategory;
  daysToHarvest: number;
  zones: {
    [key: string]: {
      plantingMonths: number[];
    };
  };
}

/**
 * Planting recommendation for a specific vegetable
 */
export interface PlantingRecommendation {
  vegetable: string;
  category: VegetableCategory;
  daysToHarvest: number;
  plantingMonths: string[];
}
