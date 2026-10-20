import React from 'react';

interface ChevronAnimationProps {
  className?: string;
  speed?: 'normal' | 'slow' | 'fast';
}

/**
 * Continuous Left-Moving Chevron Animation
 * Direction: ❮ ❮ ❮ ❮ ❮ ❮ (moving right to left)
 * Seamlessly loops using CSS keyframes without gaps or jumps.
 * Completely decorative (aria-hidden, pointer-events none).
 */
export const ChevronAnimation: React.FC<ChevronAnimationProps> = ({
  className = '',
  speed = 'normal',
}) => {
  // Array of 16 chevrons per sequence group to guarantee complete viewport coverage
  const chevrons = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    isHighlighted: i % 4 === 0, // Highlight every 4th chevron for subtle rhythmic accent
  }));

  const speedClass = `chevron-speed-${speed}`;

  return (
    <div
      className={`chevron-marquee-container ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className={`chevron-marquee-track ${speedClass}`}>
        {/* First group */}
        <div className="chevron-marquee-group">
          {chevrons.map((item) => (
            <span
              key={`group-1-${item.id}`}
              className={`chevron-item ${item.isHighlighted ? 'chevron-highlighted' : ''}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="chevron-icon-svg"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </span>
          ))}
        </div>

        {/* Second identical duplicate group for seamless infinite looping */}
        <div className="chevron-marquee-group" aria-hidden="true">
          {chevrons.map((item) => (
            <span
              key={`group-2-${item.id}`}
              className={`chevron-item ${item.isHighlighted ? 'chevron-highlighted' : ''}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="chevron-icon-svg"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

