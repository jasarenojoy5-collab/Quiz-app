import React from 'react';

interface QuizHeaderProps {
  title?: string;
  currentQuestion: number;
  totalQuestions: number;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({
  title = "Frontend Quiz",
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <header className="quiz-header">
      <div className="quiz-header-branding">
        <span className="quiz-icon" aria-hidden="true">⚡</span>
        <h1 className="quiz-title">{title}</h1>
      </div>
      <div
        key={`badge-${currentQuestion}`}
        className="quiz-header-badge badge-bounce"
        aria-label={`Question ${currentQuestion} of ${totalQuestions}`}
      >
        <span className="badge-dot" aria-hidden="true" />
        Question {currentQuestion} / {totalQuestions}
      </div>
    </header>
  );
};
