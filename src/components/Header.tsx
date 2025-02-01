/**
 * Header – отображает логотип и строку поиска.
 */

const Header = () => {
  return (
    <header>
      <h1>Яндекс</h1>
      <input type="text" placeholder="Найдётся всё..." />
      <button>Найти</button>
    </header>
  );
};

export default Header;
