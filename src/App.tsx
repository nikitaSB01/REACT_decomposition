import "./App.css";
import Header from "./components/Header";
import ExchangeRates from "./components/ExchangeRates";
import NewsList from "./components/NewsList";
import ErrorWork from "./components/ErrorWork";
import Advertising from "./components/Advertising";

function App() {
  return (
    <div className="App">
      {/* Основной контент (все блоки в столбец) */}
      <div className="content">
        <div className="top-section">
          <div>
            <NewsList />
            <ExchangeRates />
          </div>
          <ErrorWork />
        </div>
        {/* Шапка с логотипом и поисковой строкой */}
        <div className="header-container">
          <Header />
        </div>
        <Advertising />
      </div>
    </div>
  );
}

export default App;
