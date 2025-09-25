import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter book title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
