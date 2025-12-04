export enum Mode {
  DASHBOARD = 'DASHBOARD',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  KAHOOT = 'KAHOOT',
  VISUAL = 'VISUAL',
  VOCABULARY = 'VOCABULARY',
  MEMORY = 'MEMORY',
  SPEAKING = 'SPEAKING',
  ARCADE = 'ARCADE',
  GENERATOR = 'GENERATOR'
}

export enum Language {
  EN = 'EN',
  RU = 'RU',
  UZ = 'UZ'
}

export interface VocabItem {
  id: string;
  word: string;
  pronunciation: string;
  pos: string; // part of speech
  definition: string;
  example: string;
  translation_ru: string;
  translation_uz: string;
}

export interface QuizQuestion {
  id: number;
  quizSet: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface GapFillExercise {
  id: string;
  title: string;
  textParts: string[]; // Text segments around gaps
  answers: string[]; // The correct answers for the gaps
  hints: string[]; // Infinitive verbs provided
}

export interface TimelineEvent {
  id: string;
  type: 'SIMPLE' | 'CONTINUOUS';
  label: string;
  description: string;
  translation_ru: string;
  translation_uz: string;
}