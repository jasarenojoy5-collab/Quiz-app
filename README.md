# React + TypeScript Animated Quiz Application

A modern, responsive, animated, and student-friendly Quiz Application built with **React**, **TypeScript**, **Vite**, and **React Router**, following all requirements from `react quiz app activities.pdf`.

---

## 🚀 Features & Implementation

### 1. Requirements from PDF Activities
* **Home Page**: Application title, short description, quiz highlights, and an animated "Start Quiz" button.
* **Quiz Page**: 10 curated multiple-choice questions covering HTML, CSS, JavaScript, React, and TypeScript with 4 choices per question and 1 correct answer.
* **Question Navigation & State Management**: Real-time tracking of current question, selected choice, user score, and quiz progress.
* **Score Calculation**: Accurately calculates final score, percentage, correct answers, and incorrect answers after the last question without duplication.
* **Result Page**: Displays total questions, correct count, incorrect count, final score, percentage, animated count-up numbers, dynamic feedback badge, "Retake Quiz" button, and "Return Home" button.
* **Routing**: Fully functioning client-side routing between `/` (Home), `/quiz` (Quiz), and `/result` (Results).
* **Componentization**: Clean separation into reusable components (`QuestionCard`, `AnswerOption`, `QuizHeader`, `ProgressBar`, `ResultCard`, `ChevronAnimation`).

### 2. Continuous Left-Moving Chevron Animation
* Direction: **`❮ ❮ ❮ ❮ ❮ ❮`** (moving continuously from right to left).
* Seamless infinite looping without jumps, gaps, or layout shift using CSS `translateX(0)` to `translateX(-50%)` keyframes on twin sequence groups.
* Edge gradient masks (`mask-image: linear-gradient`) for smooth fades.
* Rhythmic highlight accents and glow effects on chevrons.
* Purely decorative (`aria-hidden="true"`, `pointer-events: none`, `user-select: none`), preventing any interference with keyboard navigation or answer selection.

### 3. Component Animations
* **Home Page**: Staggered entrance animations for badge, title, description, tags, and Start Quiz button with interactive hover glow and arrow micro-interaction.
* **Question Card**: Subtle slide-in entrance animation triggered on every question change.
* **Answer Choices**: Staggered entrance cascading down options A–D, smooth hover lift, active glow ring, and spring pop animation on the radio indicator.
* **Next Button**: Attention pulse and animated arrow nudge when an answer is selected, with click tactile compression.
* **Progress Bar**: Smooth cubic-bezier width transition, glowing indicator dot, and continuous shimmer reflection sweep.
* **Quiz Header**: Energetic badge pop and breathing dot indicator whenever the question number advances.
* **Result Card**: Smooth count-up animation for score and percentage using the custom `useCountUp` hook, staggered entrance for statistics cards, and rotating retry icon on hover.
* **Accessibility**: Full `@media (prefers-reduced-motion: reduce)` support and keyboard `:focus-visible` styling.

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── AnswerOption.tsx       # Reusable answer choice button with selection states & animations
│   ├── ChevronAnimation.tsx   # Continuous left-moving chevron decorative marquee
│   ├── ProgressBar.tsx        # Animated progress bar with shimmer sweep & percentage
│   ├── QuestionCard.tsx       # Card rendering question text and staggered answer choices
│   ├── QuizHeader.tsx         # Header with branding and animated question counter badge
│   └── ResultCard.tsx         # Results display with animated score count-up & stats grid
│
├── pages/
│   ├── HomePage.tsx           # Landing page with title, description, and Start Quiz CTA
│   ├── QuizPage.tsx           # Quiz engine with question navigation and state tracking
│   └── ResultPage.tsx         # Results summary with Retake Quiz and Return Home navigation
│
├── hooks/
│   └── useCountUp.ts          # Custom hook for smooth animated number count-ups
│
├── data/
│   └── questions.ts           # 10 multiple-choice questions (array of objects)
│
├── types/
│   └── quiz.ts                # TypeScript interfaces (Question, QuizResultState)
│
├── styles/
│   └── quiz.css               # Modular stylesheet reference
│
├── App.tsx                    # Client-side router configuration (React Router)
├── main.tsx                   # React root mount point
└── index.css                  # Global styles, animations, variables, and media queries
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```
