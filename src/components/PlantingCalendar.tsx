import React from 'react';
import { COMPANION_PLANTS, PLANTING_TIPS } from '../plants';
import { PlantingRecommendation, PlantingTips, VegetableCategory } from '../types/planting';
import SeedlingButton from './SeedlingButton';

interface PlantingCalendarProps {
  /** The USDA hardiness zone */
  zone: string;
  /** Array of planting recommendations */
  plantingGuide: PlantingRecommendation[];
  /** Array of selected vegetable categories */
  selectedCategories: VegetableCategory[];
}

type CompanionPlantsRecord = Record<string, string[]>;
type PlantingTipsRecord = Record<string, PlantingTips>;

/**
 * Helper function to check if care is an object with instructions
 */
function hasInstructions(
  care: string[] | { instructions: string[] }
): care is { instructions: string[] } {
  return typeof care === 'object' && 'instructions' in care;
}

/**
 * Helper function to get companion plants safely
 */
function getCompanionPlants(vegetable: string): string[] {
  return (COMPANION_PLANTS as CompanionPlantsRecord)[vegetable] || [];
}

/**
 * Helper function to get planting tips safely
 */
function getPlantingTips(vegetable: string): PlantingTips | null {
  return (PLANTING_TIPS as PlantingTipsRecord)[vegetable] || null;
}

/**
 * Component that displays a monthly planting calendar based on selected categories and hardiness zone
 */
export const PlantingCalendar: React.FC<PlantingCalendarProps> = ({
  zone,
  plantingGuide,
  selectedCategories,
}) => {
  const months = [
    { name: 'January', shortName: 'Jan', number: 1 },
    { name: 'February', shortName: 'Feb', number: 2 },
    { name: 'March', shortName: 'Mar', number: 3 },
    { name: 'April', shortName: 'Apr', number: 4 },
    { name: 'May', shortName: 'May', number: 5 },
    { name: 'June', shortName: 'Jun', number: 6 },
    { name: 'July', shortName: 'Jul', number: 7 },
    { name: 'August', shortName: 'Aug', number: 8 },
    { name: 'September', shortName: 'Sep', number: 9 },
    { name: 'October', shortName: 'Oct', number: 10 },
    { name: 'November', shortName: 'Nov', number: 11 },
    { name: 'December', shortName: 'Dec', number: 12 },
  ];

  /**
   * Get recommendations for a specific month based on selected categories
   */
  const getRecommendationsForMonth = (monthNumber: number) => {
    return plantingGuide.filter(rec => {
      const isInSelectedCategory = selectedCategories.includes(rec.category);
      const isPlantingMonth = rec.plantingMonths.includes(monthNumber.toString());
      return isInSelectedCategory && isPlantingMonth;
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Planting Calendar for Zone {zone}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {months.map(month => {
          const recommendations = getRecommendationsForMonth(month.number);
          if (recommendations.length === 0) return null;

          return (
            <div
              key={month.name}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-3">{month.name}</h3>
              <ul className="space-y-2">
                {recommendations.map(rec => {
                  const tips = getPlantingTips(rec.vegetable);
                  const companionPlants = getCompanionPlants(rec.vegetable);
                  const careInstructions = tips?.care || [];
                  const instructions = hasInstructions(careInstructions)
                    ? careInstructions.instructions
                    : careInstructions;

                  return (
                    <li key={rec.vegetable} className="flex items-start gap-2">
                      <SeedlingButton
                        plantName={rec.vegetable}
                        tips={instructions}
                        disabled={instructions.length === 0}
                      />
                      <div>
                        <span className="text-gray-900">{rec.vegetable}</span>
                        {companionPlants.length > 0 && (
                          <p className="text-sm text-gray-500">
                            Companion plants: {companionPlants.join(', ')}
                          </p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
