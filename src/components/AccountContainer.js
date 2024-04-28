import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({transactions}) {
  return (
    <div>
      <Search 
        onSearch={()=> console.log("Searching...")}
      />
      <AddTransactionForm 
        onAddTransactionForm={()=> console.log("Add transaction...")}
      />
      <TransactionsList 
        transactions={transactions}
      />
    </div>
  );
}

export default AccountContainer;
