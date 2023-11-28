import { ThemeProvider} from '@react95/core';
import Desktop from './components/Desktop';
import './App.scss'

function App() {
  return (
    <>
     <ThemeProvider theme='storm'>
     <div className="scanlines"></div>
      <Desktop />
    </ThemeProvider>
    </>
  )
}

export default App
