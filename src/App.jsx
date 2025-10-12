import Timer from './components/Timer';
import Time from './components/Time';
import TimerFunc from './components/TimerFunc';
import Counter from './components/Counter';
import { useState } from 'react'

function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
      <div className="container text-center mt-5">
          <h1 className="mb-4">React Timer ⏱️</h1>

          {isVisible && (
              <div className="mb-4">
                  <Timer />
              </div>
          )}
        <button type="button" onClick={() => setIsVisible(!isVisible)} className="btn btn-primary">Unmount Timer</button>
        {/*  <Counter />*/}
    </div>
  )
}

export default App
