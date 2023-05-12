import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Header from './components/Header'
import StartGame from './components/StartGame'
import { useQuestionStore } from './store/questions'
import Game from './components/Game'

function App () {
  const questions = useQuestionStore(state => state.questions)

  return (
    <>
      <Header />
      <main>
        {questions.length === 0 && <StartGame />}
        {questions.length > 0 && <Game />}

        <footer style={{ marginTop: '1em', textAlign: 'center' }}>
          Desarrollado por <a href='https://andyotarola.vercel.app/' style={{ color: 'yellow' }}>Andy Otarola</a>
        </footer>
      </main>
    </>
  )
}

export default App
