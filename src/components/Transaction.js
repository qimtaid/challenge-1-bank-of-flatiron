import React from "react";


function Transaction({ transaction}) {
  
  return (
    <tr key={transaction.index}>
     
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>
  );
}

export default Transaction;
