import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResultCard } from '../components/ResultCard';
import { ChevronAnimation } from '../components/ChevronAnimation';
import { QuizResultState } from '../types/quiz';
import { questions } from '../data/questions';

export const ResultPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve calculated results from router navigation state
  const state = location.state as QuizResultState | null;

  // Safe fallback if the user navigates directly to /result
  const totalQuestions = state?.totalQuestions ?? questions.length;
  const score = state?.score ?? 0;
  const correctAnswers = state?.correctAnswers ?? score;
  const incorrectAnswers = state?.incorrectAnswers ?? Math.max(0, totalQuestions - score);
  const percentage = state?.percentage ?? Math.round((score / totalQuestions) * 100);

  const handleRetake = () => {
    // Navigate back to the quiz page, starting fresh from Question 1
    navigate('/quiz');
  };

  const handleHome = () => {
    // Navigate back to the home page
    navigate('/');
  };

  return (
    <div className="page-container page-result">
      <div className="result-outer-wrapper">
        <ChevronAnimation speed="slow" className="chevron-result-banner" />
        <ResultCard
          score={score}
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
          percentage={percentage}
          onRetake={handleRetake}
          onHome={handleHome}
        />
      </div>
    </div>
  );
};
