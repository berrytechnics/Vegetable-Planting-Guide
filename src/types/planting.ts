/**
 * Core type definitions for the Vegetable Planting Guide application
 */

/**
 * Response from the USDA Hardiness Zone API
 */
export interface HardinessZoneResponse {
  /** The USDA hardiness zone (e.g., "5a", "7b") */
  zone: string;
  /** The zip code used for the lookup */
  zipcode: string;
  /** The temperature range for the zone (e.g., "-20°F to -10°F") */
  temperature_range: string;
}

/**
 * Month information with name and number
 */
export interface Month {
  /** Full month name (e.g., "January") */
  name: string;
  /** Three-letter month abbreviation (e.g., "Jan") */
  shortName: string;
  /** Month number (1-12) */
  number: number;
}

/**
 * Enum representing different categories of vegetables
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
  OTHER = 'Other Vegetables'
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
  /** Name of the vegetable */
  vegetable: string;
  /** Category the vegetable belongs to */
  category: VegetableCategory;
  /** Number of days from planting to harvest */
  daysToHarvest: number;
  /** Array of months when planting is recommended */
  plantingMonths: string[];
}

/**
 * Planting data for a specific vegetable
 */
export interface VegetablePlantingData {
  /** Name of the vegetable */
  name: string;
  /** Category the vegetable belongs to */
  category: VegetableCategory;
  /** Number of days from planting to harvest */
  daysToHarvest: number;
  /** Map of hardiness zones to recommended planting months */
  zones: Record<string, string[]>;
  /** Available varieties of the vegetable */
  varieties: Array<{
    name: string;
    description: string;
    daysToHarvest: number;
  }>;
  /** Plants that grow well with this vegetable */
  companionPlants: string[];
  /** Spacing requirements for planting */
  spacing: {
    betweenPlants: string;
    betweenRows: string;
  };
}

/**
 * Base interface for planting tips that are common across all vegetables
 */
interface BasePlantingTips {
  /** Soil requirements */
  soil: {
    type: string;
    ph: string;
    preparation?: string[];
  };
  /** Sunlight requirements */
  sunlight: {
    requirement?: string;
    requirements?: string;
    notes?: string;
  };
  /** Watering requirements */
  watering: {
    frequency: string;
    method?: string;
    tips?: string[];
  };
  /** Harvest information */
  harvest: {
    timing: string;
    method?: string;
    storage?: string;
  };
}

/**
 * Type for care instructions that can be either an array of strings or an object with instructions
 */
type CareInstructions = string[] | { instructions: string[] };

/**
 * Type for problem solutions that can be either a string or an array of objects
 */
type ProblemSolutions = string | Array<{ issue: string; solution: string }> | Array<{ name: string; solution: string }>;

/**
 * Interface for planting tips that extends the base interface with optional care and problems
 */
export interface PlantingTips extends BasePlantingTips {
  /** Care instructions */
  care?: CareInstructions;
  /** Common problems and their solutions */
  problems?: {
    common?: Array<{ issue: string; solution: string }>;
    issues?: Array<{ name: string; solution: string }>;
    [key: string]: ProblemSolutions | undefined;
  };
}
