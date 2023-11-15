import "./index.css"
import { useState } from "react";

function App() {
  const data = {
    temperature: 25,
    description: 'Sunny',
    city: 'New York',
    country: 'US'
  };

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState()

  async function fetchWheaderData(e){
    e.preventDefault(); // Prevent default form submission
    setCity("")
    const key = "e547bf9a8904d13ac7b15b4de27445cf"
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error) 
    }
  }

  return (
    <div className="weather">
      <h2>Current Weather</h2>
      <form onSubmit={fetchWheaderData}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => {setCity(e.target.value)}}
        />
        <button type="submit">Get Weather</button>
      </form>
      <div>
        <p>Location: {data.city}, {data.country}</p>
        <p>Temperature: {data.temperature}°C</p>
        <p>Description: {data.description}</p>
      </div>
    </div>
  );
}

export default App