import "../styles/Header.css";

/**
 * Header – отображает ссылки навигации и строку поиска с кнопкой,
 * при этом логотип выравнивается по горизонтали с поисковой строкой.
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
        />
        <button className="search-button">Найти</button>
      </div>
    </div>
  );
};

export default Header;
