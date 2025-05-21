# Vegetable Planting Guide

A React application that provides planting recommendations for vegetables based on USDA hardiness zones. Users can enter their zip code to get personalized planting recommendations for their area.

## Features

- Look up USDA hardiness zone by zip code
- View planting recommendations organized by month
- Responsive calendar layout
- Real-time validation of zip code input
- Comprehensive database of common vegetables and their planting times
- Detailed growing instructions for each vegetable
- Companion planting recommendations
- Care and maintenance tips

## Project Structure

```
src/
├── components/         # React components
│   ├── ZipCodeInput.tsx    # Input component for zip code entry
│   └── PlantingCalendar.tsx # Calendar display of planting recommendations
├── constants/         # Application constants
│   ├── plantingData.ts     # Vegetable database and planting information
│   └── plantingTips.ts     # Growing tips and care instructions
├── services/         # API and data services
│   ├── hardinessZoneService.ts  # USDA zone lookup service
│   └── plantingService.ts       # Planting recommendations service
├── types/           # TypeScript type definitions
│   ├── planting.ts          # Core type definitions
│   └── apiverve__hardinesszone.d.ts  # API client types
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── setupTests.ts    # Test configuration and setup
├── vite-env.d.ts    # Vite environment type definitions
└── index.css        # Global styles
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with your RapidAPI key:
   ```
   VITE_RAPIDAPI_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage Examples

### Looking up a Hardiness Zone
```typescript
import { getHardinessZone } from './services/hardinessZoneService';

// Get the hardiness zone for a zip code
try {
  const zone = await getHardinessZone('74011');
} catch (error) {
  if (error instanceof Error) {
    console.error('Error:', error.message);
  }
}
```

### Getting Planting Recommendations
```typescript
import { getPlantingGuide } from './services/plantingService';

// Get planting recommendations for a zip code
try {
  const recommendations = await getPlantingGuide('12345');
} catch (error) {
  if (error instanceof Error) {
    console.error('Error:', error.message);
  }
}
```

### Error Handling
- If you call `getHardinessZone` or `getPlantingGuide` with an empty zip code, an error with the message `Zip code is required` will be thrown.
- If the API request fails or returns invalid data, a descriptive error will be thrown (e.g., `Failed to get hardiness zone data`, `Failed to get planting guide`).
- Always use try/catch when calling these functions in your own code.

## Running & Writing Tests

This project uses **Jest** and **React Testing Library** for unit and integration tests.

### Run all tests
```bash
npm test
```

### Test file locations
- All test files are located in `src/**/__tests__/*.test.ts(x)`
- Example: `src/services/__tests__/plantingService.test.ts`

### Writing tests
- Use Jest for service and utility functions
- Use React Testing Library for component tests
- Mock API calls and environment variables as needed
- Example test for error handling:
  ```typescript
  it('should throw error for empty zip code', async () => {
    await expect(getPlantingGuide('')).rejects.toThrow('Zip code is required');
  });
  ```

## API

The application uses the [phzmapi.org](https://phzmapi.org/) API to look up USDA hardiness zones by zip code.

### Endpoints

#### Get Hardiness Zone
- **URL**: `https://plant-hardiness-zone.p.rapidapi.com/zipcodes/{zipcode}`
- **Method**: `GET`
- **Headers**:
  - `X-RapidAPI-Key`: Your RapidAPI key
  - `X-RapidAPI-Host`: plant-hardiness-zone.p.rapidapi.com

#### Response Format
```json
{
  "zone": "7b",
  "temperature_range": "-5 to 0°F",
  "coordinates": {
    "latitude": 40.7128,
    "longitude": -74.0060
  }
}
```

## Technologies Used

- React 18+
- TypeScript 5+ (strict mode enabled)
- Tailwind CSS 3+
- Vite 4+
- Jest & React Testing Library
- RapidAPI for USDA zone data

## Troubleshooting

- **Tests fail due to environment variables:**
  - Ensure you have a `.env` file with `VITE_RAPIDAPI_KEY` set.
- **API errors or network issues:**
  - Check your RapidAPI key and network connection.
  - The API may have rate limits or downtime.
- **TypeScript errors:**
  - The codebase uses strict TypeScript settings. Make sure your code and tests are properly typed.
- **Mocking issues in tests:**
  - Ensure you are mocking services and API calls as shown in the test files.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and formatting
- Add appropriate TypeScript types for all new code
- Include JSDoc comments for all functions and components
- Write tests for new features
- Update documentation as needed

## License

This project is licensed under the MIT License - see the LICENSE file for details. 