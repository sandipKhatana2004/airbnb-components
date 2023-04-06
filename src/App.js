import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import CardList from "./Components/CardList";
import DetailsPage from "./Components/DetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Router>
        <Routes>
          <Route exact path="/" element={<CardList />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
