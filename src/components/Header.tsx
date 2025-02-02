import { useState, useEffect } from "react";
import "../styles/Header.css";

/**
 * Header – отображает ссылки навигации, строку поиска с кнопкой и
 * пример фразы, который меняется каждые 5 секунд.
 */
const Header = () => {
  // Данные для списка ссылок
  const linksData = [
    { text: "Видео", link: "https://example.com/videos" },
    { text: "Картинки", link: "https://example.com/images" },
    { text: "Новости", link: "https://example.com/news" },
    { text: "Карты", link: "https://example.com/maps" },
    { text: "Маркет", link: "https://example.com/market" },
    { text: "Переводчик", link: "https://example.com/translator" },
    { text: "Эфир", link: "https://example.com/broadcast" },
    { text: "Ещё", link: "https://example.com/more" },
  ];

  // Массив примеров фраз для поиска
  const examplePhrases = [
    "фаза луны сегодня",
    "погода в Москве",
    "новости спорта",
    "курс доллара",
    "программа телепередач",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Автоматическая смена примера фразы каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex(
        (prevIndex) => (prevIndex + 1) % examplePhrases.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Функция для "поиска"
  const handleSearch = (query?: string) => {
    const finalQuery = query || searchQuery;
    console.log("Ищем:", finalQuery);
    // Здесь можно добавить функциональность реального поиска
  };

  // Функция для обработки нажатия на пример фразы
  const handleExampleClick = () => {
    const selectedPhrase = examplePhrases[currentPhraseIndex];
    setSearchQuery(selectedPhrase);
    handleSearch(selectedPhrase);
  };

  return (
    <div className="header">
      {/* Ссылки навигации */}
      <div className="header__links">
        <ul className="links-list">
          {linksData.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Контейнер с логотипом и поисковой строкой */}
      <div className="search-container">
        <div className="logo">
          my<span className="highlight">Яндекс</span>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Найдётся всё..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={() => handleSearch()}>
          Найти
        </button>
      </div>

      {/* Пример фразы под строкой поиска */}
      <div className="example-phrase">
        Например,{" "}
        <span className="example-link" onClick={handleExampleClick}>
          {examplePhrases[currentPhraseIndex]}
        </span>
      </div>
    </div>
  );
};

export default Header;
