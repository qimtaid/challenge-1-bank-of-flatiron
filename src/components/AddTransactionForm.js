import React, {useState} from "react";

function AddTransactionForm({onAddTransaction}) {

  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventdefault();
    onAddTransaction({date, description, category, amount});
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input 
          type="date" 
          value={date}
          onChange={(e)=> setDate(e.target.value)}
          name="date" 
          placeholder="Date" 
 
           />

          <input 
          type="text"
          value={description} 
          onChange={(e)=>setDescription(e.target.value)}
          name="description" 
          placeholder="Description" 
          />

          <input 
          type="text" 
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          name="category" 
          placeholder="Category" 

          />

          <input 
          type="number" 
          value={amount}
          onChange={(e)=>setAmount(e.target.value)}
          name="amount" 
          placeholder="Amount" 
          step="0.01" 

          />


        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
