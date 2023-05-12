import { Stack, Typography, Card, List, ListItemButton, ListItemText } from '@mui/material'
import { useQuestionStore } from '../store/questions'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Navigation from './Navigation'
import Result from './Result'

export default function Game () {
  const questions = useQuestionStore(state => state.questions)
  const currentQuestion = useQuestionStore(state => state.currentQuestion)
  const selectedAnswer = useQuestionStore(state => state.selectedAnswer)
  const question = questions[currentQuestion]

  const getColor = (index: number): string => {
    if (question.userSelectedAnswer === undefined) return 'transparent'

    if (index !== question.correctAnswer && index !== question.userSelectedAnswer) return 'transparent'

    if (question.correctAnswer === index || question.correctAnswer === question.userSelectedAnswer) return 'green'
    return 'red'
  }

  return (
    <>
      <Navigation />
      <Card variant='outlined' sx={{ bgcolor: '#222', padding: '1em', textAlign: 'left', minWidth: '400px' }}>
        <Stack direction='column' spacing={4} sx={{ marginTop: '1em' }}>
          <Typography variant='h6' component='h3'>
            {question.title}
          </Typography>
          <SyntaxHighlighter language='javascript' style={gradientDark}>
            {question.code}
          </SyntaxHighlighter>

          <List sx={{ bgcolor: '#333' }} disablePadding>
            {question.answers.map((answer, index) => (
              <ListItemButton
                disabled={question.userSelectedAnswer !== undefined}
                key={index}
                onClick={() => selectedAnswer(index, question.id)}
                sx={{ bgcolor: getColor(index) }}
              >
                <ListItemText primary={answer} sx={{ textAlign: 'center' }} />
              </ListItemButton>
            ))}
          </List>

        </Stack>
      </Card>

      <Result />
    </>
  )
}
