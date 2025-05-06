import { useLocation } from "react-router-dom";

export const Statements = ({ accBalance }) => {
  const { state } = useLocation();
  const { transactions } = state || {};

  return (
    <div className="p-4">
        <h1>Balance : {accBalance}</h1>
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>

      {transactions && transactions.length > 0 ? (
        <ul className="list-disc pl-5">
          {transactions.map((txn, index) => (
            <li key={index}>
              {txn.type}: Rs. {txn.amount} on {txn.date}
            </li>
          ))}
        </ul>
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
};
