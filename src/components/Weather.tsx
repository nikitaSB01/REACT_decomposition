import InfoBlock from "./InfoBlock";
import "../styles/Weather.css";

/**
 * Weather – отображает информацию о погоде.
 */

const Weather = () => {
  return (
    <InfoBlock title="Погода">
      <div className="weather-content">
        <img
          src="./free-icon-weather-forecast-6333682.png"
          alt="Погода"
          className="weather-icon"
        />
        <span className="temperature">+17°</span>
        <div className="weather-details">
          <span>Утром +17°,</span>
          <span>днём +20°</span>
        </div>
      </div>
    </InfoBlock>
  );
};

export default Weather;
