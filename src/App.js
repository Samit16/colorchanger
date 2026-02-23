import { useState } from 'react';
import Square from './Square';
import Input from './Input';

function App() {
  const [colorValue, setColorvalue] = useState("");

  return (
    <div className="App">
      <Square colorValue={colorValue}/>
      <Input 
        colorValue={colorValue} 
        setColorValue={setColorvalue}/>
    </div>
  );
}

export default App;
