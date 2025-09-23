import Button from "./components/Button.jsx";
import Result from "./components/Result.jsx";
import { useState } from 'react';

function App() {
    const items = [
        {id:0, smile:'😀'},
        {id:1, smile:'😎'},
        {id:2, smile:'😘'},
        {id:3, smile:'😍'},
    ];
    const [smiles, setSmiles] = useState(Array(items.length).fill(null));
    const [smile, setSmile] = useState('');
    function handleClick(i) {
        const addSmiles = [...smiles];
        addSmiles[i] = ++addSmiles[i];
        setSmiles(addSmiles);
    }
    function showSmile() {
        const maxIndex = smiles.reduce((bestIndex, currentValue, currentIndex, array) => {
            return currentValue > array[bestIndex] ? currentIndex : bestIndex;
        }, 0);
        setSmile(items.find(i => i.id === maxIndex)?.smile);
    }
  return (

    <>
      <Button id={1} smile={'😀'} count={0} value={smiles[0]} onButtonClick={() => handleClick(0)}/>
      <Button id={2} smile={'😎'} count={0} value={smiles[1]} onButtonClick={() => handleClick(1)}/>
      <Button id={3} smile={'😘'} count={0} value={smiles[2]} onButtonClick={() => handleClick(2)}/>
      <Button id={4} smile={'😍'} count={0} value={smiles[3]} onButtonClick={() => handleClick(3)}/>
        <button  onClick={showSmile}>Winner is </button>
        {smile}
    </>
  )
}

export default App
