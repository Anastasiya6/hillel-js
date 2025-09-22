import Button from "./components/Button.jsx";
import Result from "./components/Result.jsx";

function App() {

  return (
 
    <>
      <Button id={1} smile={'😀'} count={0}/>
      <Button id={2} smile={'😎'} count={0}/>
      <Button id={3} smile={'😘'} count={0}/>
      <Button id={4} smile={'😍'} count={0}/>
        <Result />
    </>
  )
}

export default App
