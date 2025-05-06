import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Send = ({ accBalance, updateBalance, updateTransactions }) => {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleSend = (e) => {
    e.preventDefault();
    const num = Number(amount);

    if (isNaN(num) || num <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (num > accBalance) {
      alert("Insufficient balance.");
      return;
    }

    updateBalance(accBalance - num);

    updateTransactions({
      type: "Debit",
      amount: num,
      date: new Date().toLocaleString(),
    });

    navigate("/");
  };

  return (
    <div>
      <h1>Balance: {accBalance} </h1>
    <form onSubmit={handleSend} className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Send Money</h2>

      <label className="block mb-2">Enter Amount:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border border-gray-400 rounded"
      />

      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
      >
        Send
      </button>
    </form>
    </div>
  );
};