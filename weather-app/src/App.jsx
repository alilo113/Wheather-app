import "./index.css"

function App() {
  const weatherData = {
    temperature: 25,
    description: 'Sunny',
    city: 'New York',
    country: 'US'
  };

  return (
    <div className="weather">
      <h2>Current Weather</h2>
      <form>
        <input
          type="text"
          placeholder="Enter city"
        />
        <button type="submit">Get Weather</button>
      </form>
      <div>
        <p>Location: {weatherData.city}, {weatherData.country}</p>
        <p>Temperature: {weatherData.temperature}°C</p>
        <p>Description: {weatherData.description}</p>
      </div>
    </div>
  );
}

export default App
