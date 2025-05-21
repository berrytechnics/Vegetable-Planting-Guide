import React, { useEffect, useRef } from 'react';

interface PlantingTipsModalProps {
  isOpen: boolean;
  onClose: () => void;
  plantName: string;
  tips: string[];
}

/**
 * A modal component that displays planting tips for a specific plant
 */
export const PlantingTipsModal: React.FC<PlantingTipsModalProps> = ({
  isOpen,
  onClose,
  plantName,
  tips,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      data-testid="modal-overlay" 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div 
        ref={modalRef} 
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Planting Tips for {plantName}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="space-y-3">
          {tips.map((tip, index) => (
            <p key={index} className="text-gray-700">
              • {tip}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}; 