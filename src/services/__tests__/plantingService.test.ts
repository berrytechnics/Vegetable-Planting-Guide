import { getHardinessZone } from '../hardinessZoneService';
import { getPlantingGuide, getPlantingRecommendations } from '../plantingService';

jest.mock('../hardinessZoneService', () => {
  const originalModule = jest.requireActual('../hardinessZoneService');
  return {
    ...originalModule,
    getApiKey: jest.fn(() => 'dummy-key'),
    getHardinessZone: jest.fn(),
  };
});

const mockedGetHardinessZone = getHardinessZone as jest.Mock;

describe('PlantingService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getPlantingRecommendations', () => {
    it('should return planting recommendations for a valid zone', () => {
      const zone = '7';
      const recommendations = getPlantingRecommendations(zone);

      expect(recommendations).toBeDefined();
      expect(Array.isArray(recommendations)).toBe(true);
      expect(recommendations.length).toBeGreaterThan(0);

      // Check structure of returned recommendations
      recommendations.forEach(vegetable => {
        expect(vegetable).toHaveProperty('vegetable');
        expect(vegetable).toHaveProperty('category');
        expect(vegetable).toHaveProperty('daysToHarvest');
        expect(vegetable).toHaveProperty('plantingMonths');
        expect(Array.isArray(vegetable.plantingMonths)).toBe(true);
      });
    });

    it('should return empty array for invalid zone', () => {
      const recommendations = getPlantingRecommendations('invalid-zone');
      expect(recommendations).toEqual([]);
    });
  });

  describe('getPlantingGuide', () => {
    beforeEach(() => {
      mockedGetHardinessZone.mockResolvedValue('7');
    });

    it('should return planting guide for valid zip code', async () => {
      const result = await getPlantingGuide('10001');

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      result.forEach(recommendation => {
        expect(recommendation).toHaveProperty('vegetable');
        expect(recommendation).toHaveProperty('category');
        expect(recommendation).toHaveProperty('daysToHarvest');
        expect(recommendation).toHaveProperty('plantingMonths');
      });
      expect(getHardinessZone).toHaveBeenCalledWith('10001');
    });

    it('should throw error for invalid zip code', async () => {
      mockedGetHardinessZone.mockRejectedValue(new Error('Invalid zip code'));

      await expect(getPlantingGuide('invalid')).rejects.toThrow('Failed to get planting guide');
    });

    it('should handle empty zip code', async () => {
      mockedGetHardinessZone.mockImplementationOnce((zip: string) => {
        if (!zip) throw new Error('Zip code is required');
        return Promise.resolve('7');
      });
      await expect(getPlantingGuide('')).rejects.toThrow('Zip code is required');
    });
  });
}); 