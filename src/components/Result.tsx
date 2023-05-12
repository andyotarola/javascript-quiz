import { useResult } from '../hooks/useResult'
import { useQuestionStore } from '../store/questions'
import { Box, Button, Modal, Typography } from '@mui/material'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const singularOrPlural = (count: number, textSingular: string) => {
  return count === 1 ? textSingular : `${textSingular}s`
}

export default function Result () {
  const { incorrects, corrects, isEnd } = useResult()
  const resetGame = useQuestionStore(state => state.resetGame)

  const handleClick = () => {
    resetGame()
  }

  return (
    <>
      <Modal
        open={isEnd}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Tu puntaje
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            ✅ {corrects} {singularOrPlural(corrects, 'correcta')} - ❌ {incorrects} {singularOrPlural(incorrects, 'incorrecta')}
          </Typography>
          <div style={{ marginTop: '16px' }}>
            <Button onClick={handleClick}>
              ¡Empezar de nuevo!
            </Button>
          </div>
        </Box>
      </Modal>

    </>
  )
}
