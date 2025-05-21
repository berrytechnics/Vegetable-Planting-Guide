import React from 'react';
import { COMPANION_PLANTS, PLANTING_TIPS } from '../data/vegetables';
import { PlantingRecommendation, VegetableCategory } from '../types/planting';
import SeedlingButton from './SeedlingButton';

interface PlantingCalendarProps {
  zone: string;
  plantingGuide: PlantingRecommendation[];
  selectedCategories: VegetableCategory[];
}

// Type for the planting tips data structure
type PlantingTip = {
  soil: {
    type: string;
    ph: string;
    preparation: string[];
  };
  sunlight: {
    requirement?: string;
    requirements?: string;
    notes: string;
  };
  watering: {
    frequency: string;
    method: string;
    tips: string[];
  };
  care: string[] | { instructions: string[] };
  harvest: {
    timing: string;
    method: string;
    storage: string;
  };
  problems: {
    common?: Array<{
      issue: string;
      solution: string;
    }>;
    issues?: Array<{
      name: string;
      solution: string;
    }>;
    [key: string]:
      | string
      | Array<{ issue: string; solution: string }>
      | Array<{ name: string; solution: string }>
      | undefined;
  };
};

// Type for the companion plants record
type CompanionPlantsRecord = {
  [key: string]: string[];
};

// Type for valid vegetable names
type VegetableName = string;

// Helper function to check if care is an object with instructions
function hasInstructions(
  care: string[] | { instructions: string[] }
): care is { instructions: string[] } {
  return typeof care === 'object' && 'instructions' in care;
}

// Helper function to check if a string is a valid vegetable name
function isValidVegetableName(name: string): name is VegetableName {
  return name in (COMPANION_PLANTS as CompanionPlantsRecord);
}

// Helper function to get companion plants safely
function getCompanionPlants(vegetable: string): string[] {
  if (!isValidVegetableName(vegetable)) {
    return [];
  }
  return (COMPANION_PLANTS as CompanionPlantsRecord)[vegetable] || [];
}

// Helper function to get planting tips safely
function getPlantingTips(vegetable: string): PlantingTip | null {
  if (!isValidVegetableName(vegetable)) {
    return null;
  }
  return (PLANTING_TIPS as unknown as Record<string, PlantingTip>)[vegetable] || null;
}

/**
 * Displays a monthly planting calendar showing which vegetables can be planted in each month
 * based on the selected categories and hardiness zone.
 */
export const PlantingCalendar: React.FC<PlantingCalendarProps> = ({
  zone,
  plantingGuide,
  selectedCategories,
}) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  /**
   * Gets planting recommendations for a specific month
   * @param monthNumber - The month number (1-12)
   * @returns Array of planting recommendations for the month
   */
  const getRecommendationsByMonth = (monthNumber: number) => {
    if (selectedCategories.length === 0) return [];

    return plantingGuide.filter(rec => {
      const monthIndex = monthNumber - 1;
      return selectedCategories.includes(rec.category) && rec.plantingMonths[monthIndex];
    });
  };

  return (
    <div>
      <div className="mb-4 text-lg font-semibold text-green-800" data-testid="zone-label">
        Zone {zone}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {months.map((month, index) => {
          const recommendations = getRecommendationsByMonth(index + 1);

          return (
            <div key={month} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{month}</h2>
              {recommendations.length > 0 ? (
                <div className="space-y-4">
                  {recommendations.map(rec => (
                    <div
                      key={rec.vegetable}
                      className="p-4 bg-green-50 rounded-md border border-green-100"
                    >
                      <h3 className="font-medium text-green-900 flex justify-between items-center">
                        <span>{rec.vegetable}</span>
                        <SeedlingButton
                          plantName={rec.vegetable}
                          tips={(() => {
                            const tips = getPlantingTips(rec.vegetable);
                            if (!tips) {
                              return [
                                `Plant in ${rec.category.toLowerCase()} soil`,
                                `Harvest in approximately ${rec.daysToHarvest} days`,
                                ...(getCompanionPlants(rec.vegetable).length > 0
                                  ? [
                                      `Best planted with: ${getCompanionPlants(rec.vegetable).join(', ')}`,
                                    ]
                                  : []),
                              ];
                            }
                            return [
                              `Soil: ${tips.soil.type}`,
                              `Soil pH: ${tips.soil.ph}`,
                              `Sunlight: ${tips.sunlight.requirement || tips.sunlight.requirements}`,
                              `Watering: ${tips.watering.frequency}`,
                              ...(Array.isArray(tips.care)
                                ? tips.care
                                : hasInstructions(tips.care)
                                  ? tips.care.instructions
                                  : []),
                              `Harvest: ${tips.harvest.timing}`,
                              `Companion Plants: ${getCompanionPlants(rec.vegetable).join(', ')}`,
                            ];
                          })()}
                        />
                      </h3>
                      <p className="text-sm text-green-700">Category: {rec.category}</p>
                      <p className="text-sm text-green-700">Days to harvest: {rec.daysToHarvest}</p>
                      {getCompanionPlants(rec.vegetable).length > 0 && (
                        <p className="text-sm text-green-700 mt-1">
                          Companion plants: {getCompanionPlants(rec.vegetable).join(', ')}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No planting recommendations</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
