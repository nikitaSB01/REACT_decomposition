import "../styles/ErrorWork.css";

/**
 * ErrorWork – отображает блок "Работа над ошибками" с изображением и текстом.
 */

const ErrorWork = () => {
  return (
    <div className="error-work">
      <img
        src="./i.webp"
        alt="Работа над ошибками"
        className="error-image"
      ></img>
      <div className="error-text">
        <a
          href="https://example.com/more"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Работа над ошибками</h3>
          <p>Смотрите на myЯндекс и запоминайте</p>
        </a>
      </div>
    </div>
  );
};

export default ErrorWork;
