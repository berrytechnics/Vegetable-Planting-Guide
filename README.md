# Vegetable Planting Guide

A React application that provides planting recommendations for vegetables based on USDA hardiness zones. Users can enter their zip code to get personalized planting recommendations for their area.

## Features

- Look up USDA hardiness zone by zip code
- View planting recommendations organized by month
- Responsive calendar layout
- Real-time validation of zip code input
- Comprehensive database of common vegetables and their planting times

## Project Structure

```
src/
├── components/         # React components
│   ├── ZipCodeInput.tsx
│   └── PlantingCalendar.tsx
├── constants/         # Application constants
│   └── plantingData.ts
├── services/         # API and data services
│   └── plantingService.ts
├── types/           # TypeScript type definitions
│   └── planting.ts
├── App.tsx          # Main application component
└── index.css        # Global styles
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite

## API

The application uses the [phzmapi.org](https://phzmapi.org/) API to look up USDA hardiness zones by zip code.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 