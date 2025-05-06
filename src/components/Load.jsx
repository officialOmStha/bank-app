import { useState } from "react";
import { DiVim } from "react-icons/di";
import { HiH1 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export const Load = ({ accBalance, updateBalance, updateTransactions }) => {
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleLoad = (e) => {
    e.preventDefault();
    const num = Number(amount);

    if (isNaN(num) || num <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    updateBalance(accBalance + num);

    updateTransactions({
      type: "Credit",
      amount: num,
      date: new Date().toLocaleString(),
    });

    navigate("/");
  };

  return (
    <div>
    <h1> Balance : {accBalance} </h1>
    <form onSubmit={handleLoad} className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Load Money</h2>

      <label className="block mb-2">Enter Amount:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border border-gray-400 rounded"
      />

      <button
        type="submit"
        className="mt-4 w-full bg-green-500 text-white py-2 rounded"
      >
        Load
      </button>
    </form>
    </div>
  );
};
