/* import { useState } from "react"; */
import "../styles/Header.css";

/**
 * Header – отображает логотип, поисковую строку и кнопку поиска в одну линию.
 */

const Header = () => {
  // Данные для списка ссылок
  const linksData = [
    { text: "Видео", link: "https://example.com/videos" },
    { text: "Картинки", link: "https://example.com/images" },
    { text: "Новости", link: "https://example.com/news" },
    { text: "Карты", link: "https://example.com/maps" },
    { text: "Маркет", link: "https://example.com/market" },
    { text: "Переводчик", link: "https://example.com/market" },
    { text: "Эфир", link: "https://example.com/market" },
    { text: "еще", link: "https://example.com/market" },
  ];

  return (
    <header className="header">
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
      <div className="header__body">
        <div className="logo">
          my<span className="highlight">Яндекс</span>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Найдётся всё..."
        />
        <button className="search-button">Найти</button>
      </div>
      <div className="header__footer"></div>
    </header>
  );
};

export default Header;
