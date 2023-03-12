import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import { GetTodayQuotes } from "../../apiService/QuotesApi";
import QuotesItem from "../quotesList/QuotesItem";

function TodayQuotes() {
  const [todayQuote, setTodayQuote] = useState();

  useEffect(() => {
    getTodayQuote();
  }, []);

  const getTodayQuote = async () => {
    const response = await GetTodayQuotes();
    console.log("dfsdfsdf  ", response);
    setTodayQuote(response);
  };

  return (
    <div>
      <Header title="Today Quote" />
      {todayQuote ? <QuotesItem quote={todayQuote} /> : null}
    </div>
  );
}

export default TodayQuotes;
