import "../styles/InfoBlock.css";

/**
 * InfoBlock – универсальный компонент для отображения заголовка и контента.
 * @param {string} title – Заголовок блока.
 * @param {React.ReactNode} children – Содержимое блока.
 */
interface InfoBlockProps {
  title: string;
  children: React.ReactNode;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, children }) => {
  return (
    <div className="info-block">
      <a href="https://example.com/news1">
        <h3 className="info-title">{title}</h3>
      </a>

      <div className="info-content">{children}</div>
    </div>
  );
};

export default InfoBlock;
