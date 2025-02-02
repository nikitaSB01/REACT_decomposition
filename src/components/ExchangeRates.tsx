import "../styles/ExchangeRates.css";

/**
 * ExchangeRates – отображает курсы валют и нефти.
 */

const ExchangeRates = () => {
  // Данные о курсах валют и нефти

  const rates = [
    { name: "USD MOEX", value: 63.52, change: +0.09 },
    { name: "EUR MOEX", value: 70.86, change: +0.14 },
    { name: "НЕФТЬ", value: 64.9, change: +1.63 },
  ];

  // Функция для отображения изменения курса с плюсом или минусом
  const formatChange = (change: number) => {
    const sign = change >= 0 ? "+" : "-";
    return `${sign}${Math.abs(change).toFixed(2)}`;
  };

  return (
    <div className="exchange-rates">
      {rates.map((rate, index) => (
        <div key={index} className="rate-item">
          <span className="rate-name">{rate.name}</span>
          <span className="rate-value">{rate.value.toFixed(2)}</span>
          <span
            className={`rate-change ${
              rate.change >= 0 ? "positive" : "negative"
            }`}
          >
            {formatChange(rate.change)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ExchangeRates;
