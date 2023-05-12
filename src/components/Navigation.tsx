import { Stack, IconButton } from '@mui/material'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material'
import { useQuestionStore } from '../store/questions'

export default function Navigation () {
  const questions = useQuestionStore(state => state.questions)
  const currentQuestion = useQuestionStore(state => state.currentQuestion)
  const nextQuestion = useQuestionStore(state => state.nextQuestion)
  const prevQuestion = useQuestionStore(state => state.prevQuestion)

  return (
    <Stack direction='row' gap={4} justifyContent='center' alignItems='center'>
      <IconButton onClick={prevQuestion} disabled={currentQuestion === 0}>
        <ArrowBackIosNew />
      </IconButton>

      {currentQuestion + 1} / {questions.length}

      <IconButton onClick={nextQuestion} disabled={currentQuestion >= questions.length - 1}>
        <ArrowForwardIos />
      </IconButton>
    </Stack>
  )
}
