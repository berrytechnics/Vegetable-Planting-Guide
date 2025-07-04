import React, { useState } from 'react';
import { PlantingTipsModal } from './PlantingTipsModal';

interface SeedlingIconProps {
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
  disabled?: boolean;
  plantName?: string;
  tips?: string[];
}

/**
 * A clickable seedling icon that displays planting tips in a modal when clicked
 */
export default function SeedlingButton({
  onClick,
  disabled,
  plantName,
  tips = [],
}: SeedlingIconProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const SIZE = '20';

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (disabled) return;
    if (onClick) onClick(e);
    if (plantName && tips.length > 0) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div title="Growing Tips">
        <svg
          onClick={handleClick}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className={`iconify iconify--fxemoji transition-transform duration-200 ${!disabled ? 'hover:scale-110 hover:cursor-pointer' : ''}`}
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
          width={SIZE}
          height={SIZE}
          aria-label="Growing Tips"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill={disabled ? '#000000' : '#2BA52E'}
              d="M500.216 29.351l-.259-.18c-6.914-4.92-16.501-10.586-27.578-15.388c-22.155-9.584-49.682-12.911-75.307-7.301c-25.641 5.537-49.393 19.942-65.75 37.609c-8.17 8.87-14.637 17.865-18.961 25.111a118.835 118.835 0 0 0-3.096 5.363c-1.5.636-3.019 1.32-4.527 2.106c-5.98 2.97-12.223 6.707-18.178 11.419c-5.983 4.674-11.791 10.167-17.204 16.305c-5.447 6.122-10.313 12.985-14.809 20.169c-4.529 7.181-8.399 14.823-11.885 22.586l-2.544 5.849l-2.288 5.912l-1.138 2.952l-1.017 2.972l-2.018 5.925c-.632 1.976-1.195 3.957-1.79 5.923c-.563 1.971-1.223 3.919-1.695 5.882l-.351 1.356c-2.977-4.441-6.186-8.574-9.602-12.304c-3.897-4.253-8-8.038-12.168-11.384c-8.354-6.688-17.021-11.458-25.014-14.84a105.989 105.989 0 0 0-12.94-4.4l.057-.201h.001v-.001h-.001s-3.876-2.797-10.027-5.934c-6.197-3.259-14.661-6.831-24.249-9.533c-19.173-5.387-42.047-5.064-62.378 2.355c-20.352 7.362-38.179 21.765-49.599 38.017c-5.7 8.156-9.992 16.225-12.727 22.627l-.083.188c-2.706 6.173-.128 13.413 5.868 16.491l.232.119c6.197 3.258 14.661 6.831 24.249 9.533c19.173 5.387 42.047 5.064 62.378-2.355c20.352-7.361 38.179-21.764 49.599-38.017a136.338 136.338 0 0 0 6.776-10.746a72.113 72.113 0 0 1 9.494 3.313c5.337 2.363 11.128 5.642 16.684 10.226c2.769 2.295 24.518 25.017 24.518 51.223a69.483 69.483 0 0 1 1.225 13.53l-.119 17.4l-.253 35.583l-1.357 190.767v.278c.077 10.779 39.11 10.501 39.033-.278l-1.357-190.767l-.1-14.001c.189-.991.285-2.016.273-3.064l-.121-11.022l-.022-2.753l.046-2.894l.099-6.52c.003-2.317.137-4.834.251-7.478c.131-2.642.2-5.433.397-8.324l.659-9.017c.244-3.114.637-6.305.961-9.604c.741-6.577 1.705-13.479 2.98-20.545l.459-2.668l.554-2.659l1.117-5.38c.341-1.819.856-3.584 1.279-5.396c.453-1.8.873-3.624 1.356-5.431l1.556-5.401l.781-2.716l.89-2.674l1.781-5.37l2.002-5.275c2.745-6.993 5.806-13.851 9.405-20.2c3.569-6.36 7.425-12.414 11.731-17.736c4.278-5.345 8.844-10.094 13.524-14.137c4.658-4.083 9.522-7.294 14.173-9.9c1.726-1.022 3.473-1.84 5.162-2.63c6.662 4.506 15.33 9.458 25.182 13.729c22.154 9.584 49.682 12.911 75.307 7.301c25.641-5.538 49.393-19.943 65.75-37.609c8.17-8.871 14.637-17.866 18.961-25.112l.13-.213c4.257-6.977 2.337-16.088-4.368-20.761z"
            ></path>
          </g>
        </svg>
      </div>
      {plantName && tips.length > 0 && (
        <PlantingTipsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          plantName={plantName}
          tips={tips}
        />
      )}
    </>
  );
}
