import './App.css'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  return (
    <div className="App">
      <input 
        type="text" 
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={
          e => {
            if (e.key === "Enter") {
              let newOutput = '';
              newOutput = output + "\n" + "$" + input + "\n";
              setOutput(newOutput);
              setInput('');
            }
          }
        }
      />
      <div className="terminal">
        {output}
      </div>
    </div>
  )
}

export default App