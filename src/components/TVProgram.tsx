import InfoBlock from "./InfoBlock";
import "../styles/TVProgram.css";
/**
 * TVProgram – отображает телепрограмму.
 */

const TVProgram = () => {
  const shows = [
    { time: "02:00", title: "ТНТ. Best", channel: "THT International" },
    { time: "02:15", title: "Джинглики", channel: "Карусель INT" },
    { time: "02:25", title: "Наедине со всеми", channel: "Первый" },
  ];

  return (
    <InfoBlock title="Телепрограмма">
      <ul className="program__ul">
        {shows.map((tv, index) => (
          <li key={index}>
            <a href="https://example.com/news1">
              <span className="span-time">{tv.time}</span>{" "}
              <strong>{tv.title}</strong> <span>{tv.channel}</span>
            </a>
          </li>
        ))}
      </ul>
    </InfoBlock>
  );
};

export default TVProgram;
