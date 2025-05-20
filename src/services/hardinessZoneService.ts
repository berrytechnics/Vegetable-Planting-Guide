/**
 * Service for retrieving USDA hardiness zone information
 */

export function getApiKey() {
  // In test environment
  if (process.env.NODE_ENV === 'test') {
    return process.env.VITE_RAPIDAPI_KEY || '';
  }
  
  // In browser environment
  if (typeof window !== 'undefined') {
    return (window as any).ENV?.VITE_RAPIDAPI_KEY || '';
  }
  
  return '';
}

/**
 * Gets the USDA hardiness zone for a given zip code using the RapidAPI service
 * @param zipCode - The 5-digit US zip code to look up
 * @returns Promise that resolves to the hardiness zone number (e.g., "7")
 * @throws Error if the API request fails or returns invalid data
 */
export async function getHardinessZone(zipCode: string): Promise<string> {
  if (!zipCode) {
    throw new Error('Zip code is required');
  }
  try {
    const response = await fetch(
      `https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zipCode}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': getApiKey() || '',
          'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch hardiness zone data');
    }

    const data = await response.json();
    const rawZone = data.zone || data.hardiness_zone || 'Unknown';
    // Extract just the number from the zone (e.g., "7b" -> "7")
    return rawZone.replace(/[^0-9]/g, '');
  } catch (error) {
    throw new Error('Failed to get hardiness zone data');
  }
}
