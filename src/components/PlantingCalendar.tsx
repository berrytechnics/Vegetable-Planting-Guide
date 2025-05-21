import React from "react";
import { COMPANION_PLANTS } from "../constants/plantingData";
import { PLANTING_TIPS } from "../constants/plantingTips";
import { PlantingRecommendation, VegetableCategory } from "../types/planting";
import SeedlingButton from "./SeedlingButton";

interface PlantingCalendarProps {
  zone: string;
  plantingGuide: PlantingRecommendation[];
  selectedCategories: VegetableCategory[];
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
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  /**
   * Gets planting recommendations for a specific month
   * @param monthNumber - The month number (1-12)
   * @returns Array of planting recommendations for the month
   */ 
  const getRecommendationsByMonth = (monthNumber: number) => {
    if (selectedCategories.length === 0) return [];

    return plantingGuide.filter((rec) => {
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
            <div
              key={month}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {month}
              </h2>
              {recommendations.length > 0 ? (
                <div className="space-y-4">
                  {recommendations.map((rec) => (
                    <div
                      key={rec.vegetable}
                      className="p-4 bg-green-50 rounded-md border border-green-100"
                    >
                      <h3 className="font-medium text-green-900 flex justify-between items-center">
                        <span>{rec.vegetable}</span> 
                        <SeedlingButton 
                          plantName={rec.vegetable}
                          tips={PLANTING_TIPS[rec.vegetable] ? [
                            `Soil: ${PLANTING_TIPS[rec.vegetable].soil}`,
                            `Sunlight: ${PLANTING_TIPS[rec.vegetable].sunlight}`,
                            `Spacing: ${PLANTING_TIPS[rec.vegetable].spacing}`,
                            `Watering: ${PLANTING_TIPS[rec.vegetable].watering}`,
                            ...PLANTING_TIPS[rec.vegetable].care,
                            `Harvest: ${PLANTING_TIPS[rec.vegetable].harvest}`,
                            `Companion Plants: ${PLANTING_TIPS[rec.vegetable].companion.join(', ')}`
                          ] : [
                            `Plant in ${rec.category.toLowerCase()} soil`,
                            `Harvest in approximately ${rec.daysToHarvest} days`,
                            ...(COMPANION_PLANTS[rec.vegetable] 
                              ? [`Best planted with: ${COMPANION_PLANTS[rec.vegetable].join(', ')}`]
                              : [])
                          ]}
                        />
                      </h3>
                      <p className="text-sm text-green-700">
                        Category: {rec.category}
                      </p>
                      <p className="text-sm text-green-700">
                        Days to harvest: {rec.daysToHarvest}
                      </p>
                      {COMPANION_PLANTS[rec.vegetable] && (
                        <p className="text-sm text-green-700 mt-1">
                          Companion plants: {COMPANION_PLANTS[rec.vegetable].join(", ")}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  No planting recommendations
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
