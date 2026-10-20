import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  percentage: number;
  onRetake: () => void;
  onHome: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({
  score,
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  percentage,
  onRetake,
  onHome,
}) => {
  // Smooth animated count-up numbers
  const displayScore = useCountUp(score, 1000);
  const displayPercentage = useCountUp(percentage, 1100);
  const displayCorrect = useCountUp(correctAnswers, 900);
  const displayIncorrect = useCountUp(incorrectAnswers, 900);

  // Performance feedback determination
  let feedbackMessage = "Keep studying and you'll get there!";
  let feedbackBadge = "Good Effort";
  let feedbackEmoji = "💪";

  if (percentage === 100) {
    feedbackMessage = "Flawless score! You completely mastered the quiz!";
    feedbackBadge = "Perfect Score!";
    feedbackEmoji = "🏆";
  } else if (percentage >= 80) {
    feedbackMessage = "Outstanding performance! You have strong frontend fundamentals.";
    feedbackBadge = "Excellent Job!";
    feedbackEmoji = "🌟";
  } else if (percentage >= 50) {
    feedbackMessage = "Good job! You passed, but review the topics you missed.";
    feedbackBadge = "Quiz Passed!";
    feedbackEmoji = "👍";
  }

  return (
    <div className="result-card result-animate-entrance">
      {/* Header section with badge & title */}
      <div className="result-header">
        <span className="result-badge result-badge-animate">
          {feedbackBadge} {feedbackEmoji}
        </span>
        <h2 className="result-title">Quiz Completed!</h2>
        <p className="result-subtitle">{feedbackMessage}</p>
      </div>

      {/* Main Score Hero display with animated numbers */}
      <div className="score-hero score-hero-animate">
        <span className="score-hero-label">Your Final Score</span>
        <div className="score-hero-digits">
          <span className="score-current" aria-label={`Score: ${score}`}>
            {displayScore}
          </span>
          <span className="score-divider">/</span>
          <span className="score-total">{totalQuestions}</span>
        </div>
        <div className="percentage-tag" aria-label={`Percentage: ${percentage}%`}>
          {displayPercentage}% Accuracy
        </div>
      </div>

      {/* Detailed Stats Breakdown Grid */}
      <div className="result-stats-grid">
        <div className="stat-card stat-correct stat-animate-1">
          <div className="stat-icon" aria-hidden="true">✓</div>
          <div className="stat-info">
            <span className="stat-number">{displayCorrect}</span>
            <span className="stat-label">Correct Answers</span>
          </div>
        </div>

        <div className="stat-card stat-incorrect stat-animate-2">
          <div className="stat-icon" aria-hidden="true">✗</div>
          <div className="stat-info">
            <span className="stat-number">{displayIncorrect}</span>
            <span className="stat-label">Incorrect Answers</span>
          </div>
        </div>

        <div className="stat-card stat-total stat-animate-3">
          <div className="stat-icon" aria-hidden="true">📋</div>
          <div className="stat-info">
            <span className="stat-number">{totalQuestions}</span>
            <span className="stat-label">Total Questions</span>
          </div>
        </div>
      </div>

      {/* Navigation action buttons */}
      <div className="result-actions result-actions-animate">
        <button
          type="button"
          className="btn btn-primary btn-action-retake"
          onClick={onRetake}
          aria-label="Retake Quiz"
        >
          <span className="btn-icon-spin" aria-hidden="true">🔄</span>
          <span>Retake Quiz</span>
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-action-home"
          onClick={onHome}
          aria-label="Return Home"
        >
          <span className="btn-icon-home" aria-hidden="true">🏠</span>
          <span>Return Home</span>
        </button>
      </div>
    </div>
  );
};
