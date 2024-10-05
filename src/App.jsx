import { useState } from 'react'
import usagiImage from './assets/usagi.webp'
import usagiSound from './assets/usagi-sound.mp3'
import './App.css'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  const playSound = () => {
    setIsPlaying(true)
    const audio = new Audio(usagiSound)
    audio.play()
    audio.onended = () => setIsPlaying(false)
  }

  return (
    <div className="app">
      <h1>Welcome to Usagi World!</h1>
      <div className="card" onClick={playSound}>
        <img src={usagiImage} alt="Usagi" className="usagi-image" />
      </div>
    </div>
  )
}

export default App