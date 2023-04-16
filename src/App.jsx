import { useState, useEffect } from "react";
import "./App.css";
import { getColor } from "./color-service";

export function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("red");

  const increase = () =>{ setCounter(counter+1);}
  const decrease = () =>{ setCounter(counter-1);}
  const reset = () =>{ setCounter(counter-counter);}

  
  useEffect(() => {
    if (counter > 3) {
      setColor("blue");
    }
  }, [counter]);

  return (
    <div>
      <h1>Ada School - React Hooks</h1>

      <div>
        <span className={color}>Counter:{counter}</span>
      </div>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
