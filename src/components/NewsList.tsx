import { useState } from "react";
import "../styles/NewsList.css";

/**
 * NewsList – отображает новости по выбранной теме с иконками и ссылками.
 * Ограничивает текст до 52 символов и показывает только 3 самые новые новости.
 */
const NewsList = () => {
  const [activeTab, setActiveTab] = useState("Сейчас в СМИ");
  const [showAll, setShowAll] = useState(false); // Состояние для отображения всех новостей

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
      {
        icon: "✈️",
        text: "БУБУБУ прокомментировала гибель россиян в Анталье",
        link: "https://example.com/news4",
      },
    ],
    "В России": [
      {
        icon: "⚖️",
        text: "Суд закрыл дело Демарти против России",
        link: "https://example.com/news5",
      },
      {
        icon: "💨",
        text: "Россия снизила экспорт газа в Европу",
        link: "https://example.com/news6",
      },
      {
        icon: "🏟️",
        text: "В Москве построят новый спортивный комплекс",
        link: "https://example.com/news7",
      },
    ],
    Рекомендуем: [
      {
        icon: "🏠",
        text: "Как выбрать новую квартиру в 2025 году",
        link: "https://example.com/news8",
      },
      {
        icon: "📱",
        text: "Топ-5 гаджетов, которые стоит купить в этом году",
        link: "https://example.com/news9",
      },
      {
        icon: "💼",
        text: "Самые перспективные профессии будущего",
        link: "https://example.com/news10",
      },
    ],
  };

  // Функция для обрезки текста до 52 символов
  const truncateText = (text: string, maxLength: number = 52) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
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

  // Получаем новости для выбранной вкладки
  const currentNews = newsData[activeTab];
  const displayedNews = showAll ? currentNews : currentNews.slice(0, 3); // Показываем 3 или все новости

  return (
    <div className="news-list">
      {/* Навигация по темам */}
      <div className="news-tabs">
        {Object.keys(newsData).map((tab) => (
          <button
            key={tab}
            className={tab === activeTab ? "active" : ""}
            onClick={() => {
              setActiveTab(tab);
              setShowAll(false); // Скрываем дополнительные новости при смене вкладки
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Дата и время */}
      <div className="news-date">{formatDate()}</div>

      {/* Список новостей */}
      <ul className="news-items">
        {displayedNews.map((news, index) => (
          <li key={index} className="news-item">
            <span className="news-icon">{news.icon}</span>
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              {truncateText(news.text)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
