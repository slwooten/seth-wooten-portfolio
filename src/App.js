import React from "react";

import './App.css';

import './fonts/Roboto.ttf';
import AboutMe from "./sections/AboutMe";
import Header from "./sections/Header";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Profile />
      <Projects />
      <AboutMe />
    </div>
  )
}

export default App;
