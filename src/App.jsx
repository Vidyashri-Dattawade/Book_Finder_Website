import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // info or error message

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setMessage("Please enter a book title to search!");
      setBooks([]);
      return;
    }

    setLoading(true);
    setMessage("");
    fetch(`https://openlibrary.org/search.json?title=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs);
        if (data.docs.length === 0) setMessage("No books found!");
        setLoading(false);
      })
      .catch(() => {
        setMessage("Failed to fetch books!");
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      {loading && <p className="info">Loading...</p>}
      {message && <p className="error">{message}</p>}
      <BookList books={books} />
    </div>
  );
}

export default App;
