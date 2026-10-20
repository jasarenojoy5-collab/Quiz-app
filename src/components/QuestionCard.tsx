import React from 'react';
import { AnswerOption } from './AnswerOption';

interface QuestionCardProps {
  questionNumber: number;
  totalQuestions: number;
  questionText: string;
  choices: string[];
  selectedAnswer: string | null;
  onSelectAnswer: (choice: string) => void;
  isAnswered?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  questionNumber,
  totalQuestions,
  questionText,
  choices,
  selectedAnswer,
  onSelectAnswer,
  isAnswered = false,
}) => {
  return (
    <div
      key={`question-card-${questionNumber}`}
      className="question-card question-animate-entrance"
    >
      <div className="question-card-meta">
        <span className="question-counter">
          Question {questionNumber} of {totalQuestions}
        </span>
        <span className="question-instruction">Choose 1 correct answer</span>
      </div>

      <h2 className="question-title">{questionText}</h2>

      <div
        className="options-list"
        role="group"
        aria-label={`Choices for Question ${questionNumber}`}
      >
        {choices.map((choice, index) => (
          <AnswerOption
            key={`q${questionNumber}-choice-${index}`}
            choice={choice}
            index={index}
            isSelected={selectedAnswer === choice}
            onSelect={onSelectAnswer}
            disabled={isAnswered}
          />
        ))}
      </div>
    </div>
  );
};
