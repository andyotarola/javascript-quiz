import { useQuestionStore } from '../store/questions'

export const useResult = () => {
  let corrects = 0
  let incorrects = 0

  const questions = useQuestionStore(state => state.questions)

  questions.forEach(question => {
    const { userSelectedAnswer, correctAnswer } = question

    if (userSelectedAnswer != null && correctAnswer === userSelectedAnswer) corrects++
    else incorrects++
  })

  const isEnd = questions.every(question => question.userSelectedAnswer !== undefined)

  return {
    isEnd,
    corrects,
    incorrects
  }
}
