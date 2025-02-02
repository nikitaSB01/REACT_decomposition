import "../styles/Advertising.css";
import { useState, useEffect } from "react";

/**
 * Advertising – отображает блок рекламы.
 */

const Advertising = () => {
  // массив объектов с раекламой
  const advertising = [
    {
      name: "Форсаж",
      link: "https://example.com/news11",
      icon: "./2f9bf082d54fe9523462b67add05718e-348099.jpg",
    },
    {
      name: "Пираты Карибского моря",
      link: "https://example.com/news10",
      icon: "./1920x.webp",
    },
    {
      name: "Чужой",
      link: "https://example.com/news12",
      icon: "./i(2).webp",
    },
  ];

  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  // Смена рекламы каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % advertising.length);
    }, 5000);

    return () => clearInterval(interval); // Очищаем интервал при размонтировании компонента
  }, []);

  const currentAd = advertising[currentAdIndex];

  return (
    <div className="advertising-box">
      <div className="advertising-container">
        <a href={currentAd.link} target="_blank" rel="noopener noreferrer">
          <img
            src={currentAd.icon}
            alt={currentAd.name}
            className="advertising-image cover"
          />
        </a>
      </div>
    </div>
  );
};

export default Advertising;
