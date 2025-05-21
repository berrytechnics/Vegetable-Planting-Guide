/**
 * Service for retrieving USDA hardiness zone information using the RapidAPI service.
 * This service provides functionality to look up plant hardiness zones based on US zip codes.
 * It includes rate limiting to prevent API abuse and proper error handling for various scenarios.
 */

const MIN_REQUEST_INTERVAL = 1000; // 1 second between requests to respect API rate limits
let lastRequestTime = 0;

/**
 * Retrieves the RapidAPI key from environment variables.
 * @returns The RapidAPI key or an empty string if not configured
 */
export function getApiKey(): string {
  return import.meta.env.VITE_RAPIDAPI_KEY || '';
}

/**
 * Gets the USDA hardiness zone for a given zip code.
 * @param zipCode - The 5-digit US zip code to look up
 * @returns Promise that resolves to the hardiness zone number (e.g., "7")
 * @throws Error if:
 *   - Zip code is empty
 *   - API key is not configured
 *   - API request fails
 *   - Rate limit is exceeded
 *   - Invalid zip code format
 */
export async function getHardinessZone(zipCode: string): Promise<string> {
  if (!zipCode) {
    throw new Error('Zip code is required');
  }

  // Implement rate limiting
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    await new Promise(resolve => setTimeout(resolve, MIN_REQUEST_INTERVAL - timeSinceLastRequest));
  }

  try {
    const apiKey = getApiKey();
    
    if (!apiKey) {
      throw new Error('API key is not configured. Please check your environment variables.');
    }

    const response = await fetch(
      `https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zipCode}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com',
        },
      }
    );

    lastRequestTime = Date.now();

    if (!response.ok) {
      switch (response.status) {
        case 401:
          throw new Error('API key is invalid or expired. Please check your RapidAPI key configuration.');
        case 429:
          throw new Error('Rate limit exceeded. Please wait a moment before trying again.');
        case 400:
          throw new Error('Invalid zip code format. Please enter a valid 5-digit US zip code.');
        default:
          throw new Error(`Failed to fetch hardiness zone data: ${response.statusText}`);
      }
    }

    const data = await response.json();
    const rawZone = data.zone || data.hardiness_zone || 'Unknown';
    return rawZone.replace(/[^0-9]/g, '');
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to get hardiness zone data');
  }
}
