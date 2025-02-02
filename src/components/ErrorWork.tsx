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
        <h3>Работа над ошибками</h3>
        <p>Смотрите на myЯндекс и запоминайте</p>
      </div>
    </div>
  );
};

export default ErrorWork;
