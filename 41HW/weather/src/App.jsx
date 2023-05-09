function App() {
  return (
    <section className="weather">
      <div className="container">
        <h2 className="weather_title">
          CSS Weather Forecast <i className="wi wi-day-sunny"></i>
        </h2>
        <div className="weather_inner">
          <ul className="weather_row">
            <li className="weather_content weather_content--lisbon weather_content--width-2">
              <WeatherInfo
                cityName="Lisbon"
                temp="21"
                iconClass="wi-day-sunny"
              />
            </li>
            <li className="weather_content weather_content--paris">
              <WeatherInfo cityName="Paris" temp="11" iconClass="wi-rain" />
            </li>
            <li className="weather_content weather_content--belgrade">
              <WeatherInfo
                cityName="Belgrade"
                temp="15"
                iconClass="wi-day-cloudy"
              />
            </li>
            <li className="weather_content weather_content--venice">
              <WeatherInfo
                cityName="Venice"
                temp="21"
                iconClass="wi-day-cloudy-high"
              />
            </li>
            <li className="weather_content weather_content--tel-avive">
              <WeatherInfo cityName="Tel-Avive" temp="32" iconClass="wi-hot" />
            </li>
            <li className="weather_content weather_content--cair">
              <WeatherInfo cityName="Cair" temp="21" iconClass="wi-day-sunny" />
            </li>
            <li className="weather_content weather_content--new-york">
              <WeatherInfo
                cityName="New-York"
                temp="17"
                iconClass="wi-day-sleet-storm"
              />
            </li>
            <li className="weather_content weather_content--new-delhi">
              <WeatherInfo cityName="New-Delhi" temp="17" iconClass="wi-rain" />
            </li>
            <li className="weather_content weather_content--san-francisco weather_content--width-2">
              <WeatherInfo
                cityName="San-Francisco"
                temp="15"
                iconClass="wi-day-sunny-overcast"
              />
            </li>
            <li className="weather_content weather_content--tokyo">
              <WeatherInfo
                cityName="Tokyo"
                temp="8"
                iconClass="wi-night-clear"
              />
            </li>

            <li className="weather_content weather_content--sydney weather_content--width-4">
              <WeatherInfo
                cityName="Sydney"
                temp="25"
                iconClass="wi-night-cloudy"
              />
            </li>
          </ul>
        </div>
        <p className="weather_text">
          Have a nice day and don't forget umbrella if you are in New Delhi now!
        </p>
      </div>
    </section>
  );
}

function WeatherInfo({ cityName, temp, iconClass }) {
  return (
    <>
      <p className="city_name">{cityName}</p>
      <div className="weather_temperature">
        <p className="temperature">{temp}°C</p>
        <i className={`wi ${iconClass}`}></i>
      </div>
    </>
  );
}

export default App;
