import { useState } from "react";

import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full flex-col gap-10 h-[100vh] flex justify-center items-center">
        <h1>REACT + VITE + TAILWIND + SHADCN</h1>
        <Button className={"cursor-pointer"}>Shadcn</Button>
      </div>
    </>
  );
}

export default App;
