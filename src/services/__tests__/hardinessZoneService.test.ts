import { getHardinessZone } from '../hardinessZoneService';

jest.mock('../hardinessZoneService', () => {
  const originalModule = jest.requireActual('../hardinessZoneService');
  return {
    ...originalModule,
    getApiKey: jest.fn(() => 'dummy-key'),
  };
});

describe('HardinessZoneService', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  describe('getHardinessZone', () => {
    it('should return hardiness zone string for a valid zip code', async () => {
      const mockResponse = {
        zone: '7a',
        temperature_range: '0°F to 5°F',
        latitude: 40.7128,
        longitude: -74.0060,
      };

      global.fetch = jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse),
        })
      );

      const result = await getHardinessZone('10001');
      expect(result).toEqual('7');
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('10001'),
        expect.any(Object)
      );
    });

    it('should throw an error for an invalid zip code', async () => {
      global.fetch = jest.fn().mockImplementationOnce(() =>
        Promise.resolve({
          ok: false,
          status: 400,
          statusText: 'Bad Request',
        })
      );

      await expect(getHardinessZone('invalid')).rejects.toThrow('Invalid zip code format. Please enter a valid 5-digit US zip code.');
    });

    it('should throw an error when the API is unavailable', async () => {
      global.fetch = jest.fn().mockImplementationOnce(() =>
        Promise.reject(new Error('Network error'))
      );

      await expect(getHardinessZone('10001')).rejects.toThrow('Network error');
    });

    it('should handle empty zip code', async () => {
      await expect(getHardinessZone('')).rejects.toThrow('Zip code is required');
    });
  });
}); 