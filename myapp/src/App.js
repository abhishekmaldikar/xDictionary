import React, { useState } from "react";

const dictionaryData = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = () => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const foundWord = dictionaryData.find(entry => entry.word.toLowerCase() === normalizedSearchTerm);
    if (foundWord) {
      setSearchResult(foundWord.meaning);
    } else {
      setSearchResult("Word not found in the dictionary.");
    }
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        <p>Definition:</p>
        <p>{searchResult}</p>
      </div>
    </div>
  );
}

export default App;
