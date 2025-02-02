import NewsList from "./components/NewsList";
import Header from "./components/Header";
import ExchangeRates from "./components/ExchangeRates";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NewsList />
      <ExchangeRates />
      <Header />
    </div>
  );
}

export default App;
