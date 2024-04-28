import React,{useState} from "react";

function Search({onSearch}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="ui large fluid icon input">
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search your Recent Transactions"
        onChange={(e) => setSearchTerm(e.target.value)}
      /> 
      <i className="circular search link icon"></i>
      </form>
    </div>
  );
}

export default Search;
