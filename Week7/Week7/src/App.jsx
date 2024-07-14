import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// lets simulate a slower network to actually see the "Loading..."
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Lazy load the components
const Landing = React.lazy(() =>
  delay(3000).then(() => import("./Components/Landing"))
);
const Dashboard = React.lazy(() =>
  delay(3000).then(() => import("./Components/Dashboard"))
);

function App() {
  return (
    <>
      <div>
        <h1>Hi This is the Top Bar</h1>
      </div>

      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
