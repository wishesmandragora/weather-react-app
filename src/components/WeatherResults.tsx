import React from 'react'
import { WeatherType } from '../types'

interface Props {
  weather: WeatherType | null
}

const WeatherResults: React.FC<Props> = ({ weather }) => {
  return (
    <>
      {weather && (
        <>
          <section className="location">
            <div className="city">
              <h1>{weather.name}</h1>
              <span className="country">{weather?.country}</span>
              <div className="date"></div>
            </div>
          </section>
          <div className="current">
            <div className="temp">
              <span className="num">{weather.temperature}</span>
              <span></span>
            </div>
            <div className="weather">{weather.description}</div>
          </div>
        </>
      )}
    </>
  );
};


export default WeatherResults