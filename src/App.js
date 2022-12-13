import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Students from "./pages/Students";

function App() {
  const [studentDataGlobal, setStudentData] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setStudentData={setStudentData} />} />
          <Route
            path="/students"
            element={<Students studentDataGlobal={studentDataGlobal} />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
