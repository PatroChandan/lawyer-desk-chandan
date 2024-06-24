import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CommingSoon from "./components/CommingSoon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsFeed" element={<CommingSoon />} />
        <Route path="/findLowers" element={<CommingSoon />} />
        <Route path="/connections" element={<CommingSoon />} />
        <Route path="/charts" element={<CommingSoon />} />
      </Routes>
    </>
  );
}

export default App;
