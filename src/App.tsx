import "./App.css";
import Header from "./components/Header";
import ExchangeRates from "./components/ExchangeRates";
import NewsList from "./components/NewsList";
import ErrorWork from "./components/ErrorWork";
import Advertising from "./components/Advertising";
import Weather from "./components/Weather";
import Visited from "./components/Visited";
import TVProgram from "./components/TVProgram";
import Broadcast from "./components/Broadcast";

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
        <div className="bottom-section">
          <div>
            <Weather />
            <Visited />
          </div>
          <div>
            <TVProgram />
          </div>
          <div>
            <Broadcast />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
