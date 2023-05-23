import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transactions, getTransactions } = useContext(GlobalContext);
  const userId = JSON.parse(localStorage.getItem("user"))["_id"];
  useEffect(() => {
    getTransactions({
      userid: userId,
    });
  }, []);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
