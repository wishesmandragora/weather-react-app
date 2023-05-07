import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import WeatherResults from "./components/WeatherResults";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`;

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className="wrapper">
      <header>
        <SearchInput searchTerm={searchTerm} changeSeachTerm={handleSearchTermChange} />
      </header>

      <main>
        <WeatherResults />
      </main>
    </div>
  );
}

export default App;
