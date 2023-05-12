export interface Question {
  id: number
  title: string
  code: string
  answers: string[]
  correctAnswer: number
  userSelectedAnswer?: number
  isCorrectAnswer?: boolean
}
