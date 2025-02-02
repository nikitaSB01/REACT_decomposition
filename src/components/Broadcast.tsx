import InfoBlock from "./InfoBlock";

/**
 * Broadcast – отображает эфирные передачи.
 */

const Broadcast = () => {
  const broadcasts = [
    { icon: "▶️", title: "Управление как искусство", channel: "Успех" },
    { icon: "▶️", title: "Ночь. Мир в это время", channel: "earthTV" },
    { icon: "▶️", title: "Андрей Возн...", channel: "Совершенно секретно" },
  ];

  return (
    <InfoBlock title="Эфир">
      <ul className="broadcast__ul">
        {broadcasts.map((broadcast__ul, index) => (
          <li key={index}>
            <a href="https://example.com/news1">
              <span>{broadcast__ul.icon}</span>{" "}
              <strong>{broadcast__ul.title}</strong>{" "}
              <span>{broadcast__ul.channel}</span>
            </a>
          </li>
        ))}
      </ul>
    </InfoBlock>
  );
};

export default Broadcast;
