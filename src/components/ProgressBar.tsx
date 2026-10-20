import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.min(Math.max(Math.round((current / total) * 100), 0), 100);

  return (
    <div className="progress-container" aria-label="Quiz progress">
      <div
        className="progress-bar-track"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        >
          <div className="progress-bar-shimmer" aria-hidden="true" />
          <span className="progress-bar-glow-dot" aria-hidden="true" />
        </div>
      </div>
      <div className="progress-text">
        <span className="progress-step-indicator">
          Question <strong className="text-highlight">{current}</strong> of {total}
        </span>
        <span className="progress-percentage-label">{percentage}% Completed</span>
      </div>
    </div>
  );
};
