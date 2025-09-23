import Button from "./components/Button.jsx";
import Result from "./components/Result.jsx";
import { useState } from 'react';

function App() {
    const [smiles, setSmiles] = useState(Array(4).fill(null));
    function handleClick(i) {
        const addSmiles = [...smiles];
        addSmiles[i] = ++addSmiles[i];
        setSmiles(addSmiles);
    }
    function showSquares() {
        console.log(Math.max.apply(null, smiles));
    }
  return (

    <>
      <Button id={1} smile={'😀'} count={0} value={smiles[0]} onButtonClick={() => handleClick(0)}/>
      <Button id={2} smile={'😎'} count={0} value={smiles[1]} onButtonClick={() => handleClick(1)}/>
      <Button id={3} smile={'😘'} count={0} value={smiles[2]} onButtonClick={() => handleClick(2)}/>
      <Button id={4} smile={'😍'} count={0} value={smiles[3]} onButtonClick={() => handleClick(3)}/>
        <button onClick={showSquares}>Показати squares</button>
        <Result />
    </>
  )
}

export default App
