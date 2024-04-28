import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions}) {
  if (!transactions || transactions.length === 0) {
    return <div>No transactions found.</div>;
  }
  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        </thead>
       
      <tbody>       
        {transactions.map((transaction)=>(
          <Transaction 
          index={transaction.id}
          transaction={transaction}
          />
        ))}       
      </tbody>
    </table>
    
  );
}


export default TransactionsList;
