import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuotesList from "./components/quotesList/QuotesList";
import TodayQuotes from "./components/todayQuotes/TodayQuotes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={QuotesList} exact />
        <Route path="/todayQuote" Component={TodayQuotes} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
