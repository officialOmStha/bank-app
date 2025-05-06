import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Hero } from "./components/hero"
import { Load } from "./components/Load";
import { Send } from "./components/sendMoney"
import { Statements } from "./components/Statement";

export default function App() {
  const [accBalance, setAccBalance] = useState(100000);
  const [transactions, setTransactions] = useState([]);

  const updateBalance = (newBalance) => setAccBalance(newBalance);

  const updateTransactions = (txn) =>
    setTransactions((prev) => [...prev, txn]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Hero
              accBalance={accBalance}
              transactions={transactions}
            />
          }
        />
        <Route
          path="/send"
          element={
            <Send
              accBalance={accBalance}
              updateBalance={updateBalance}
              updateTransactions={updateTransactions}
            />
          }
        />
        <Route
          path="/load"
          element={
            <Load
              accBalance={accBalance}
              updateBalance={updateBalance}
              updateTransactions={updateTransactions}
            />
          }
        />
        <Route
          path="/statements"
          element={<Statements />}
        />
      </Routes>
    </Router>
  );
}
