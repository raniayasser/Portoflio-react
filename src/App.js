// ------------------------------{ Libraries }----------------------------

import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashLoader } from "react-spinners/";

//-----------------------------{ components  }--------------------
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="preloaderr">
          <HashLoader color="#f87765" className="loader" />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Projects" element={<Projects />} />
          
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
