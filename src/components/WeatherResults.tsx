import React from 'react'

const WeatherResults = () => {
  return (
    <>
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
    </>
  )
}

export default WeatherResults