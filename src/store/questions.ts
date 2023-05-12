import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Question } from '../types'
import confetti from 'canvas-confetti'

interface State {

  questions: Question[]
  currentQuestion: number
  setQuestion: (questions: Question[]) => void
  selectedAnswer: (indexAnswer: number, questionId: number) => void
  nextQuestion: () => void
  prevQuestion: () => void
  resetGame: () => void
}

const initialState = {
  questions: [],
  currentQuestion: 0
}

export const useQuestionStore = create<State>()(persist((set, get) => ({
  ...initialState,
  setQuestion: (questions: Question[]) => {
    set({ questions })
  },
  nextQuestion: () => {
    set((state) => ({
      currentQuestion: state.currentQuestion + 1
    }))
  },
  prevQuestion: () => {
    set((state) => ({
      currentQuestion: state.currentQuestion - 1
    }))
  },
  resetGame: () => {
    set({ ...initialState })
  },
  selectedAnswer: (indexAnswer, questionId) => {
    const { questions } = get()
    const newQuestion = structuredClone(questions) as Question[]

    const questionIndex = newQuestion.findIndex(question => question.id === questionId)
    const questionInfo = newQuestion[questionIndex]

    const isCorrectAnswer = questionInfo.correctAnswer === indexAnswer

    if (isCorrectAnswer) confetti()

    newQuestion[questionIndex] = {
      ...questionInfo,
      userSelectedAnswer: indexAnswer,
      isCorrectAnswer
    }

    set({ questions: newQuestion })
  }
}), { name: 'questions' }))
