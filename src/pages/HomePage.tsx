import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronAnimation } from '../components/ChevronAnimation';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <div className="page-container page-home">
      <div className="home-card home-card-entrance">
        {/* Continuous Left-Moving Chevron Decorative Strip */}
        <ChevronAnimation speed="normal" className="chevron-home-strip" />

        <div className="home-badge home-animate-badge">
          <span className="home-badge-sparkle">✨</span> Interactive Frontend Challenge
        </div>

        <h1 className="home-title home-animate-title">
          Welcome to the<br />
          <span className="text-gradient">Frontend Quiz!</span>
        </h1>

        <p className="home-description home-animate-desc">
          Test your knowledge across HTML, CSS, JavaScript, React, and TypeScript.
          Work through at your own pace and review your final score and stats!
        </p>

        <div className="quiz-summary-tags home-animate-tags">
          <span className="summary-tag">🎯 10 Questions</span>
          <span className="summary-tag">⏱️ Self-Paced</span>
          <span className="summary-tag">📊 Score & Percentage</span>
        </div>

        <div className="home-action-wrapper home-animate-btn">
          <button
            type="button"
            className="btn btn-primary btn-large btn-glow btn-start-quiz"
            onClick={handleStart}
            aria-label="Start Quiz"
          >
            <span>Start Quiz</span>
            <span className="btn-arrow-icon" aria-hidden="true">🚀</span>
          </button>
        </div>
      </div>
    </div>
  );
};
