import React from "react";
import './styles/App.css';
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import WeatherPage from "./pages/WeatherPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <Router>
            <div className="App">
              <Navbar />
                <Routes>
                  <Route path="/weatherPage" element={<WeatherPage/>}/>
                  <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
      </Router>
  );
}

export default App;
