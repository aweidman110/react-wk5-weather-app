import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
  
        <Weather />
        
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/aweidman110"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Aika Weidman
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/aweidman110/react-wk5-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          💻
        </footer>
      </div>
    </div>
  );
}
