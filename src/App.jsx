import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Passion from "./components/Passion/Passion";
import Strength from "./components/Strength/Strength";
import Contact from "./components/Contact/Contact";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Passion />
      <Strength />
      <Contact />
    </div>
  );
}

export default App;
