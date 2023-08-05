import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import WeatherResults from "./components/WeatherResults";
import { WeatherType } from "./types";

const API_URL = 'http://api.openweathermap.org'

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [weather, setWeather] = useState<WeatherType | null>(null);
 
  const getWeatherData = (term: string) => {
    fetch(
      `${API_URL}/data/2.5/weather?q=${term}&units=metric&lang=en&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const transformedData: WeatherType = {
          name: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          description: data.weather[0].description,
          minTemp: data.main.temp_min,
          maxTemp: data.main.temp_max
          // Add other properties from the API response as needed
        };
        setError('');
        setWeather(transformedData);
      })
      .catch((e) => {
        setError(e.message)
      })
  }

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    // getWeatherData(e.target.value)
  }

  const handleSearchTermSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    getWeatherData(searchTerm);
  }

  return (
    <div className="wrapper">
      <header className="search-header">
        <h1>Search for weather in <span>your country</span></h1>
        <SearchInput searchTerm={searchTerm} changeSeachTerm={handleSearchTermChange} />
        <button type="submit" className="btn" onClick={handleSearchTermSubmit}>Submit</button>
      </header>

      <main>
        {error ? <p className="error-message">{error}</p> : <WeatherResults weather={weather} />}
      </main>
    </div>
  );
}

export default App;
