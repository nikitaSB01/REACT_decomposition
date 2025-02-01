import { useState } from "react";
import "../styles/NewsList.css";

/**
 * NewsList – отображает новости по выбранной теме с иконками и ссылками.
 */
const NewsList = () => {
  const [activeTab, setActiveTab] = useState("Сейчас в СМИ");

  // Новости для разных вкладок
  const newsData: Record<
    string,
    { icon: string; text: string; link: string }[]
  > = {
    "Сейчас в СМИ": [
      {
        icon: "🌐",
        text: "Путин упростил получение автомобильных номеров",
        link: "https://example.com/news1",
      },
      {
        icon: "📰",
        text: "В команде Зеленского раскрыли план реформ на Украине",
        link: "https://example.com/news2",
      },
      {
        icon: "✈️",
        text: "«Турпомощь» прокомментировала гибель россиян в Анталье",
        link: "https://example.com/news3",
      },
    ],
    "В России": [
      {
        icon: "⚖️",
        text: "Суд закрыл дело Демарти против России",
        link: "https://example.com/news4",
      },
      {
        icon: "💨",
        text: "Россия снизила экспорт газа в Европу",
        link: "https://example.com/news5",
      },
      {
        icon: "🏟️",
        text: "В Москве построят новый спортивный комплекс",
        link: "https://example.com/news6",
      },
    ],
    Рекомендуем: [
      {
        icon: "🏠",
        text: "Как выбрать новую квартиру в 2025 году",
        link: "https://example.com/news7",
      },
      {
        icon: "📱",
        text: "Топ-5 гаджетов, которые стоит купить в этом году",
        link: "https://example.com/news8",
      },
      {
        icon: "💼",
        text: "Самые перспективные профессии будущего",
        link: "https://example.com/news9",
      },
    ],
  };

  // Функция для форматирования даты
  const formatDate = () => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date().toLocaleDateString("ru-RU", options);
  };

  return (
    <div className="news-list">
      {/* Навигация по темам */}
      <div className="news-tabs">
        {Object.keys(newsData).map((tab) => (
          <button
            key={tab}
            className={tab === activeTab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Дата и время */}
      <div className="news-date">{formatDate()}</div>

      {/* Список новостей */}
      <ul className="news-items">
        {newsData[activeTab].map((news, index) => (
          <li key={index} className="news-item">
            <span className="news-icon">{news.icon}</span>
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              {news.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
