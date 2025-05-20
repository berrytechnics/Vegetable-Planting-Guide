import React, { useState } from "react";
import { CategoryFilter } from "./components/CategoryFilter";
import { PlantingCalendar } from "./components/PlantingCalendar";
import { ZipCodeInput } from "./components/ZipCodeInput";
import "./index.css";
import { getHardinessZone } from "./services/hardinessZoneService";
import { getPlantingRecommendations } from "./services/plantingService";
import { PlantingRecommendation, VegetableCategory } from "./types/planting";

/**
 * Main application component for the Vegetable Planting Guide
 * Handles zip code input, hardiness zone lookup, and planting recommendations
 */
const App: React.FC = () => {
  const [zipCode, setZipCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [zone, setZone] = useState<string>("");
  const [plantingGuide, setPlantingGuide] = useState<PlantingRecommendation[]>(
    []
  );
  const [selectedCategories, setSelectedCategories] = useState<
    VegetableCategory[]
  >(Object.values(VegetableCategory));

  /**
   * Handles changes to the zip code input
   * @param value - The new zip code value
   */
  const handleZipCodeChange = (value: string) => {
    // Only allow digits and limit to 5 characters
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 5);
    setZipCode(numericValue);
    
    // Clear error if input is valid
    if (numericValue.length === 5) {
      setError("");
    } else if (numericValue.length > 0) {
      setError("Please enter a 5-digit zip code");
    } else {
      setError("");
    }
  };

  /**
   * Handles form submission to get planting recommendations
   * @param e - The form event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipCode) {
      setError("Please enter a zip code");
      return;
    }

    try {
      setPlantingGuide([]);
      const zone = await getHardinessZone(zipCode);
      setZone(zone);
      const recommendations = getPlantingRecommendations(zone);
      setPlantingGuide(recommendations);
    } catch (err) {
      setError("Failed to get hardiness zone. Please try again.");
    }
  };

  /**
   * Handles changes to category selection
   * @param category - The category being toggled
   */
  const handleCategoryChange = (category: VegetableCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 py-8 px-4 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Vegetable Planting Guide
        </h1>

        <ZipCodeInput
          zipCode={zipCode}
          error={error}
          onSubmit={handleSubmit}
          onChange={handleZipCodeChange}
        />

        {zone && (
          <>
            <CategoryFilter
              selectedCategories={selectedCategories}
              onCategoryChange={handleCategoryChange}
            />

            <PlantingCalendar
              zone={zone}
              plantingGuide={plantingGuide}
              selectedCategories={selectedCategories}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
