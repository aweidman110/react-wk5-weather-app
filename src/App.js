import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <div className="footer">
          This project was coded by{" "}
          <a
            href="https://github.com/aweidman110"
            target="_blank"
            rel="noreferrer"
          >
            Aika Weidman
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/aweidman110/react-wk5-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://react-wk5-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </div>
      </div>
    </div>
  );
}
