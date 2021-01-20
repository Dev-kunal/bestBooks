import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [bookstoShow, setBooksToShow] = useState("fiction");

  const booksCollection = {
    javascript: [
      { name: "Eloquent Js", rating: "4/5" },
      { name: "You Don't Know JS", rating: "3.5/5" }
    ],
    fiction: [
      { name: "The Alchemist", rating: "4.8/5" },
      { name: "Beloved", rating: "3.8/5" }
    ],
    selfhelp: [
      { name: "Think and Grow Rich", rating: "4.5/5" },
      { name: "Rich Dad Poor Dad ", rating: "4/5" }
    ]
  };

  var booksCategory = Object.keys(booksCollection);

  function handlebtnClick(type) {
    setBooksToShow(type);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>📚 bestBooks</h1>
        <p>check out my favourite Books. Select a category to get started </p>
        {booksCategory.map((category) => (
          <button className="button" onClick={() => handlebtnClick(category)}>
            {category}
          </button>
        ))}
        <hr />
        <ul style={{ listStyle: "none" }}>
          {booksCollection[bookstoShow].map((book) => (
            <li>
              <div className="list-div">
                {book.name}
                <div style={{ fontSize: "smaller" }}>{book.rating}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
