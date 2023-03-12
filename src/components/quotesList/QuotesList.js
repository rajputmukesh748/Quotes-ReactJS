import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import QuotesItem from "./QuotesItem";
import { GetAllQuotes } from "../../apiService/QuotesApi";
import { Link } from "react-router-dom";

function QuotesList() {
  const [quotesList, setQuotesList] = useState([]);

  useEffect(() => {
    console.log("dfsdfdsf", "sdfsdfsdf ");
    fetchQuotesList();
  }, []);

  const fetchQuotesList = async () => {
    const response = await GetAllQuotes();
    setQuotesList(response.quotes);
  };

  return (
    <div>
      <Header title={"All Quotes"} />
      <Link to={"/todayQuote"}>
        <button>Today Quotes</button>
      </Link>
      {quotesList.map((item) => {
        return <QuotesItem key={item.id} quote={item} />;
      })}
    </div>
  );
}

export default QuotesList;
