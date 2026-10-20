import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: "When did JavaScript first appear?",
    choices: ["1998", "1997", "1995", "1999"],
    correctAnswer: "1995"
  },
  {
    id: 2,
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Machine Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    id: 3,
    question: "What is the primary purpose of CSS?",
    choices: [
      "To structure a webpage",
      "To style a webpage",
      "To create databases",
      "To compile JavaScript"
    ],
    correctAnswer: "To style a webpage"
  },
  {
    id: 4,
    question: "Which React hook is primarily used to manage local component state?",
    choices: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: "useState"
  },
  {
    id: 5,
    question: "What is TypeScript primarily known as?",
    choices: [
      "A replacement for HTML",
      "A typed superset of JavaScript",
      "A backend database engine",
      "A CSS styling preprocessor"
    ],
    correctAnswer: "A typed superset of JavaScript"
  },
  {
    id: 6,
    question: "Which HTML tag is used to define an internal stylesheet?",
    choices: ["<css>", "<script>", "<style>", "<stylesheet>"],
    correctAnswer: "<style>"
  },
  {
    id: 7,
    question: "In React Router, which component is used to navigate between routes without page reloads?",
    choices: ["<Link>", "<a>", "<Href>", "<RouteLink>"],
    correctAnswer: "<Link>"
  },
  {
    id: 8,
    question: "What does DOM stand for in web development?",
    choices: [
      "Data Object Model",
      "Document Object Model",
      "Digital Ordinance Map",
      "Direct Operation Method"
    ],
    correctAnswer: "Document Object Model"
  },
  {
    id: 9,
    question: "Which CSS property is used to create space inside an element's border?",
    choices: ["margin", "padding", "border-spacing", "gap"],
    correctAnswer: "padding"
  },
  {
    id: 10,
    question: "In React, what are props primarily used for?",
    choices: [
      "Passing data from parent to child components",
      "Storing global application databases",
      "Styling DOM elements directly",
      "Executing server-side background queries"
    ],
    correctAnswer: "Passing data from parent to child components"
  }
];

