import InfoBlock from "./InfoBlock";

/**
 * Visited – отображает популярные ссылки.
 */

const Visited = () => {
  const links = [
    { title: "Недвижимость", description: "о сталинках" },
    { title: "Маркет", description: "люстры и светильники" },
    { title: "Авто.ру", description: "привод 4x4 до 500 000" },
  ];

  return (
    <InfoBlock title="Посещаемое">
      <ul className="visited-cont">
        {links.map((link, index) => (
          <li key={index}>
            <a href="https://example.com/news1">
              <strong>{link.title}</strong> — {link.description}{" "}
            </a>
          </li>
        ))}
      </ul>
    </InfoBlock>
  );
};

export default Visited;
