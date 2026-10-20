import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { QuizHeader } from '../components/QuizHeader';
import { ProgressBar } from '../components/ProgressBar';
import { QuestionCard } from '../components/QuestionCard';
import { ChevronAnimation } from '../components/ChevronAnimation';
import { QuizResultState } from '../types/quiz';

export const QuizPage: React.FC = () => {
  const navigate = useNavigate();

  // State management tracking question index, selected choice, and total score
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);

  const totalQuestions = questions.length;
  const currentQ = questions[currentQuestion];
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  // Handle selecting an answer (allows changing selection prior to clicking Next)
  const handleSelectAnswer = (choice: string) => {
    setSelectedAnswer(choice);
  };

  // Handle moving to the next question or completing the quiz
  const handleNext = () => {
    if (selectedAnswer === null) return;

    // Check if the student's answer is correct
    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    const updatedScore = isCorrect ? score + 1 : score;

    if (!isLastQuestion) {
      // Advance to the next question
      setScore(updatedScore);
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      // Calculate final quiz metrics after the final question
      const correctAnswers = updatedScore;
      const incorrectAnswers = totalQuestions - updatedScore;
      const percentage = Math.round((updatedScore / totalQuestions) * 100);

      const resultData: QuizResultState = {
        score: updatedScore,
        totalQuestions,
        correctAnswers,
        incorrectAnswers,
        percentage,
      };

      // Navigate to Result Page with calculated metrics
      navigate('/result', { state: resultData });
    }
  };

  return (
    <div className="page-container page-quiz">
      <div className="quiz-wrapper quiz-wrapper-entrance">
        {/* Continuous Left-Moving Decorative Chevron Animation Banner */}
        <ChevronAnimation speed="normal" className="chevron-quiz-banner" />

        <QuizHeader
          title="Frontend Quiz"
          currentQuestion={currentQuestion + 1}
          totalQuestions={totalQuestions}
        />

        <ProgressBar
          current={currentQuestion + 1}
          total={totalQuestions}
        />

        <QuestionCard
          questionNumber={currentQuestion + 1}
          totalQuestions={totalQuestions}
          questionText={currentQ.question}
          choices={currentQ.choices}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          isAnswered={false}
        />

        <div className="quiz-footer">
          <button
            type="button"
            className={`btn btn-primary btn-next ${selectedAnswer !== null ? 'btn-next-ready' : ''}`}
            onClick={handleNext}
            disabled={selectedAnswer === null}
            aria-label={isLastQuestion ? "Submit Final Answers" : "Proceed to Next Question"}
          >
            <span>{isLastQuestion ? "Submit Quiz" : "Next Question"}</span>
            <span className="btn-next-arrow" aria-hidden="true">
              {isLastQuestion ? "🏁" : "→"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
