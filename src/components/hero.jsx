import { useNavigate } from "react-router-dom";

export const Hero = ({ accBalance, transactions }) => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Balance: Rs. {accBalance}</h2>

      <div className="grid grid-cols-3 gap-8 mb-6">
        <div
          className="flex justify-center items-center p-4 min-h-[100px] min-w-[80px] border-2 border-black cursor-pointer"
          onClick={() => navigate("/load")}
        >
          Load Money
        </div>

        <div
          className="flex justify-center items-center p-4 min-h-[40px] min-w-[40px] border-2 border-black cursor-pointer"
          onClick={() => navigate("/send")}
        >
          Send Money
        </div>

        <div
          className="flex justify-center items-center p-4 min-h-[40px] min-w-[40px] border-2 border-black cursor-pointer"
          onClick={() => navigate("/statements", { state: { transactions } })}
        >
          Statements
        </div>
        <div className="flex justify-center items-center p-4 min-h-[100px] min-w-[80px] border-2 border-black">Top up</div>
        <div className="flex justify-center items-center p-4 min-h-[40px] min-w-[40px] border-2 border-black">Recharge</div>
        <div className="flex justify-center items-center p-4 min-h-[40px] min-w-[40px] border-2 border-black">Bills</div>
        <div className="flex justify-center items-center p-4 min-h-[100px] min-w-[80px] border-2 border-black">Electricity</div>
        <div className="flex justify-center items-center p-4 min-h-[40px] min-w-[40px] border-2 border-black">Water</div>
        <div className="flex justify-center items-center p-4 min-h-[40px] min-w-[40px] border-2 border-black">Profile</div>
      </div>
    </div>
  );
};
