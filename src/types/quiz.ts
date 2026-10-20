export interface Question {
  id: number;
  question: string;
  choices: string[];
  correctAnswer: string;
}

export interface QuizResultState {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  percentage: number;
}

