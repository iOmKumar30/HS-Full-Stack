import { Colorbar } from "./Colorbar";
import { useState } from "react";
function App() {
  const[bgColor, setBgColor] = useState("white");
  return (
    <div className="min-h-screen w-full relative" style={{ backgroundColor: bgColor }}>
      <Colorbar setBgColor={setBgColor} />
    </div>
  );
}

export default App; 
