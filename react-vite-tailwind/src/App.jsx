import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full flex justify-center bg-blue-400 border ">
        <h2>TAILWIND + VITE + REACT</h2>
      </div>
    </>
  );
}

export default App;
