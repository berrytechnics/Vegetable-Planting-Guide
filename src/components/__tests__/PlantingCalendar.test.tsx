import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { VegetableCategory } from '../../types/planting';
import { PlantingCalendar } from '../PlantingCalendar';

describe('PlantingCalendar', () => {
  const mockPlantingGuide = [
    {
      vegetable: 'Tomatoes',
      category: VegetableCategory.FRUIT,
      daysToHarvest: 60,
      plantingMonths: ['3', '4', '5', '6', '7'],
    },
    {
      vegetable: 'Carrots',
      category: VegetableCategory.ROOT,
      daysToHarvest: 70,
      plantingMonths: ['2', '3', '4', '8', '9', '10'],
    },
  ];

  const defaultProps = {
    zone: '7a',
    plantingGuide: mockPlantingGuide,
    selectedCategories: [VegetableCategory.FRUIT, VegetableCategory.ROOT],
  };

  it('renders all months of the year', () => {
    const { getByText } = render(<PlantingCalendar {...defaultProps} />);
    
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    months.forEach(month => {
      expect(getByText(month)).toBeInTheDocument();
    });
  });

  it('displays vegetables in their planting months', () => {
    const { getAllByText } = render(<PlantingCalendar {...defaultProps} />);
    
    // Check for tomatoes in March (should appear at least once)
    expect(getAllByText('Tomatoes').length).toBeGreaterThan(0);
    
    // Check for carrots in February (should appear at least once)
    expect(getAllByText('Carrots').length).toBeGreaterThan(0);
  });

  it('filters vegetables based on selected categories', () => {
    const props = {
      ...defaultProps,
      selectedCategories: [VegetableCategory.FRUIT],
    };
    
    const { getAllByText, queryByText } = render(<PlantingCalendar {...props} />);
    
    // Should show tomatoes (FRUIT category)
    expect(getAllByText('Tomatoes').length).toBeGreaterThan(0);
    
    // Should not show carrots (ROOT category)
    expect(queryByText('Carrots')).not.toBeInTheDocument();
  });

  it('shows no vegetables when no categories are selected', () => {
    const props = {
      ...defaultProps,
      selectedCategories: [],
    };
    
    const { queryByText } = render(<PlantingCalendar {...props} />);
    
    expect(queryByText('Tomatoes')).not.toBeInTheDocument();
    expect(queryByText('Carrots')).not.toBeInTheDocument();
  });

  it('displays the hardiness zone', () => {
    const { getByTestId } = render(<PlantingCalendar {...defaultProps} />);
    expect(getByTestId('zone-label')).toHaveTextContent('Zone 7a');
  });
}); 