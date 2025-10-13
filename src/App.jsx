import Timer from './components/Timer';

import TimerFunc from './components/TimerFunc';

import { useState } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
      <div className="container text-center mt-5">
          <h1 className="mb-4">React Timer ⏱️</h1>

          {isVisible && (
              <div className="mb-4">
                  <TimerFunc />
              </div>
          )}
        <button type="button" onClick={() => setIsVisible(!isVisible)} className="btn btn-primary">Unmount Timer</button>
    </div>
  )
}

export default App
