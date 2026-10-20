import React from 'react';

interface AnswerOptionProps {
  choice: string;
  index: number;
  isSelected: boolean;
  onSelect: (choice: string) => void;
  disabled?: boolean;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export const AnswerOption: React.FC<AnswerOptionProps> = ({
  choice,
  index,
  isSelected,
  onSelect,
  disabled = false,
}) => {
  const label = OPTION_LABELS[index] || String(index + 1);

  return (
    <button
      type="button"
      className={`answer-option ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(choice)}
      disabled={disabled}
      aria-pressed={isSelected}
      style={{ '--option-index': index } as React.CSSProperties}
    >
      <span className="option-badge" aria-hidden="true">
        {label}
      </span>
      <span className="option-text">{choice}</span>
      <span className="option-radio" aria-hidden="true">
        <span className="option-radio-dot" />
      </span>
    </button>
  );
};
