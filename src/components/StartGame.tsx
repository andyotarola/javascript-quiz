import { Button } from '@mui/material'
import { useQuestionStore } from '../store/questions'
import { Question } from '../types'
import { LIMIT_QUESTIONS } from '../constants'

export default function StartGame () {
  const setQuestion = useQuestionStore(state => state.setQuestion)

  const handleClick = async () => {
    const res = await fetch('/data.json')
    const json = await res.json() as Question[]
    const question = json.sort(() => Math.random() - 0.5).slice(0, LIMIT_QUESTIONS)
    setQuestion(question)
  }

  return (
    <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center' }}>
      <Button onClick={() => { void handleClick() }} variant='contained'>
        ¡Empezar el juego!
      </Button>
    </div>
  )
}
