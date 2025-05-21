/**
 * The main application component that provides a vegetable planting guide
 * based on the user's hardiness zone and selected vegetable categories.
 * Manages the application state and coordinates between different components.
 */

import React, { useState } from "react";
import { CategoryFilter } from "./components/CategoryFilter";
import { PlantingCalendar } from "./components/PlantingCalendar";
import { ZipCodeInput } from "./components/ZipCodeInput";
import "./index.css";
import { getHardinessZone } from "./services/hardinessZoneService";
import { getPlantingRecommendations } from "./services/plantingService";
import { PlantingRecommendation, VegetableCategory } from "./types/planting";

const App: React.FC = () => {
  const [zipCode, setZipCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [zone, setZone] = useState<string>("");
  const [plantingGuide, setPlantingGuide] = useState<PlantingRecommendation[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<VegetableCategory[]>(
    Object.values(VegetableCategory)
  );

  /**
   * Handles changes to the zip code input.
   * Validates input to ensure only numeric values and proper length.
   * @param value - The new zip code value
   */
  const handleZipCodeChange = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 5);
    setZipCode(numericValue);
    
    if (numericValue.length === 5) {
      setError("");
    } else if (numericValue.length > 0) {
      setError("Please enter a 5-digit zip code");
    } else {
      setError("");
    }
  };

  /**
   * Handles form submission to get planting recommendations.
   * Uses either the zip code or selected zone to get recommendations.
   * @param e - The form event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // If a zone is selected, use it directly
    if (zone) {
      const recommendations = getPlantingRecommendations(zone);
      setPlantingGuide(recommendations);
      return;
    }

    // Otherwise, try to get zone from zip code
    if (!zipCode) {
      setError("Please enter a zip code or select a zone");
      return;
    }

    try {
      setPlantingGuide([]);
      const newZone = await getHardinessZone(zipCode);
      setZone(newZone);
      const recommendations = getPlantingRecommendations(newZone);
      setPlantingGuide(recommendations);
    } catch (err) {
      setError("Failed to get hardiness zone. Please try again.");
    }
  };

  /**
   * Handles changes to category selection.
   * Toggles the selected state of a vegetable category.
   * @param category - The category being toggled
   */
  const handleCategoryChange = (category: VegetableCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  /**
   * Handles changes to zone selection.
   * Updates the planting guide based on the selected zone.
   * @param newZone - The newly selected zone
   */
  const handleZoneChange = (newZone: string) => {
    setZone(newZone);
    if (newZone) {
      const recommendations = getPlantingRecommendations(newZone);
      setPlantingGuide(recommendations);
    } else {
      setPlantingGuide([]);
      setZipCode(""); // Clear zip code when zone is cleared
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 py-8 px-4 overflow-y-auto print:bg-white print:py-0">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 print:text-black print:mb-4">
          Vegetable Planting Guide
        </h1>

        <div className="print:hidden">
          <ZipCodeInput
            zipCode={zipCode}
            error={error}
            onSubmit={handleSubmit}
            onChange={handleZipCodeChange}
            zone={zone}
            onZoneChange={handleZoneChange}
          />

          {zone && (
            <CategoryFilter
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />
          )}
        </div>

        {zone && (
          <PlantingCalendar
            zone={zone}
            plantingGuide={plantingGuide}
            selectedCategories={selectedCategories}
          />
        )}
      </div>
    </div>
  );
};

export default App;
