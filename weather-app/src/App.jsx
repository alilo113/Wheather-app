import "./index.css";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(e) {
    e.preventDefault();
    setCity("");
    const key = import.meta.env.VITE_REACT_APP_API_KEY;
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.name);
      console.log(data.sys.country);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="weather">
      <h2>Current Weather</h2>
      <form onSubmit={fetchWeatherData}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      <div>
        {weatherData && (
          <div>
            <p>Location: {weatherData.name}, {weatherData.sys.country}</p>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Description: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;