import { useState, useEffect } from "react";
import InfoBlock from "./InfoBlock";
import "../styles/Maps.css";
/**
 * Maps – отображает карты с автоматической сменой страны каждые 5 секунд.
 */
const Maps = () => {
  const maps = [
    { country: "Германии", link: "https://example.com/germany" },
    { country: "России", link: "https://example.com/russia" },
    { country: "Швеции", link: "https://example.com/sweden" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const selectedCountry = maps[currentIndex].country;
  const selectedLink = maps[currentIndex].link;

  // Смена страны каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % maps.length);
    }, 5000);

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, []);

  return (
    <InfoBlock title={`Карта ${selectedCountry}`}>
      <div className="maps-content">
        <a
          href={selectedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          Расписание
        </a>
      </div>
    </InfoBlock>
  );
};

export default Maps;
