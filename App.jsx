import React, { useState } from "react";
import "./App.css";

function App() {
  // Initial list of books
  const [books, setBooks] = useState([
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "Atomic Habits", author: "James Clear" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [search, setSearch] = useState(""); // for search
  const [newTitle, setNewTitle] = useState(""); // for adding book
  const [newAuthor, setNewAuthor] = useState(""); // for adding book

  // Filter books based on search input
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  // Add new book
  const addBook = (e) => {
    e.preventDefault();
    if (newTitle.trim() && newAuthor.trim()) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  // Remove book by index
  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <div className="library-container">
      <h1>📚 Library Management</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* Add Book Form */}
      <form onSubmit={addBook} className="add-form">
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>

      {/* Book List */}
      <ul className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <li key={index} className="book-item">
              <span>
                <strong>{book.title}</strong> by {book.author}
              </span>
              <button onClick={() => removeBook(index)}>Remove</button>
            </li>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </ul>
    </div>
  );
}

export default App;
