import React from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`;

function App() {
  return (
    <div className="wrapper">
      <header>
        <input
          type="text"
          autoComplete="off"
          className="search-box"
          placeholder="Search for a city..."
        />
      </header>

      <main>
        <section className="location">
          <div className="city">
            <h1 aria-hidden="true"></h1>
            <div className="date"></div>
          </div>
        </section>
        <div className="current">
          <div className="temp">
            <span className="num"></span>
            <span></span>
          </div>
          <div className="weather"></div>
          <div className="hi-low"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
