/**
 * Service for retrieving USDA hardiness zone information using the RapidAPI service
 */


const MIN_REQUEST_INTERVAL = 1000; // 1 second between requests
let lastRequestTime = 0;

export function getApiKey(): string {
  return process.env.VITE_RAPIDAPI_KEY || '';
}

/**
 * Gets the USDA hardiness zone for a given zip code
 * @param zipCode - The 5-digit US zip code to look up
 * @returns Promise that resolves to the hardiness zone number (e.g., "7")
 * @throws Error if the API request fails or returns invalid data
 */
export async function getHardinessZone(zipCode: string): Promise<string> {
  if (!zipCode) {
    throw new Error('Zip code is required');
  }

  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < MIN_REQUEST_INTERVAL) {
    await new Promise(resolve => setTimeout(resolve, MIN_REQUEST_INTERVAL - timeSinceLastRequest));
  }

  try {
    const apiKey = await getApiKey();
    
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
