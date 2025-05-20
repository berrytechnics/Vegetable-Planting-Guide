import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlantingTipsModal } from '../PlantingTipsModal';

describe('PlantingTipsModal', () => {
  const mockTips = [
    'Plant in well-draining soil',
    'Water regularly but avoid overwatering',
    'Provide full sun exposure',
    'Harvest when fruits are firm and fully colored'
  ];

  let onClose: jest.Mock;
  const defaultProps = {
    isOpen: true,
    onClose: () => {},
    plantName: 'Tomatoes',
    tips: mockTips
  };

  beforeEach(() => {
    onClose = jest.fn();
  });

  it('renders when open', () => {
    const { getByText } = render(<PlantingTipsModal {...defaultProps} onClose={onClose} />);
    expect(getByText('Planting Tips for Tomatoes')).toBeInTheDocument();
    mockTips.forEach(tip => {
      expect(getByText((content: string, node: Element | null): boolean => {
        const hasText = (node: Element | null): boolean =>
          Boolean(node?.textContent?.replace(/\s+/g, ' ').includes(tip));
        const nodeHasText = hasText(node);
        const childrenDontHaveText = Array.from(node?.children || []).every(
          child => !hasText(child as Element)
        );
        return nodeHasText && childrenDontHaveText;
      })).toBeInTheDocument();
    });
  });

  it('does not render when closed', () => {
    const props = {
      ...defaultProps,
      isOpen: false,
      onClose,
    };
    const { queryByText } = render(<PlantingTipsModal {...props} />);
    expect(queryByText('Planting Tips for Tomatoes')).not.toBeInTheDocument();
    mockTips.forEach(tip => {
      expect(queryByText((content: string, node: Element | null): boolean => {
        const hasText = (node: Element | null): boolean =>
          Boolean(node?.textContent?.replace(/\s+/g, ' ').includes(tip));
        const nodeHasText = hasText(node);
        const childrenDontHaveText = Array.from(node?.children || []).every(
          child => !hasText(child as Element)
        );
        return nodeHasText && childrenDontHaveText;
      })).not.toBeInTheDocument();
    });
  });

  it('calls onClose when close button is clicked', async () => {
    const { getByRole } = render(<PlantingTipsModal {...defaultProps} onClose={onClose} />);
    const closeButton = getByRole('button');
    await userEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });

  it('calls onClose when clicking outside the modal', async () => {
    const { getByTestId } = render(<PlantingTipsModal {...defaultProps} onClose={onClose} />);
    const modalOverlay = getByTestId('modal-overlay');
    await userEvent.click(modalOverlay);
    expect(onClose).toHaveBeenCalled();
  });

  it('displays correct plant name in title', () => {
    const props = {
      ...defaultProps,
      plantName: 'Carrots',
      onClose,
    };
    const { getByText } = render(<PlantingTipsModal {...props} />);
    expect(getByText('Planting Tips for Carrots')).toBeInTheDocument();
  });
}); 