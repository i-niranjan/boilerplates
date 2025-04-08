import { useState } from "react";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex gap-10 flex-col w-full justify-center items-center h-[100vh]">
        <div>
          <h2 className="text-2xl">
            REACT + VITE + TAILWIND + SHADCN + MAGICUI
          </h2>
        </div>
        <div className="">
          <ScratchToReveal
            width={250}
            height={250}
            minScratchPercentage={70}
            className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
            gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
          >
            <p className="text-9xl">😎</p>
          </ScratchToReveal>
        </div>
      </div>
    </>
  );
}

export default App;
