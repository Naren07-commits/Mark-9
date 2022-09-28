import React from "react";
import "./styles.css";
import { useState } from "react";

const musicList = {
  POP: [
    {
      name: "Blinding Lights -by The Weeknd",
      rating: "( 5/5 rating ⭐⭐⭐⭐⭐ )",
    },
    {
      name: "Rolling in the Deep -by Adele",
      rating: " ( 4/5 rating ⭐⭐⭐⭐ )",
    },
    { name: "As it was -by harry styles", rating: " ( 4/5 rating ⭐⭐⭐⭐ )" },
  ],

  ROMANCE: [
    {
      name: "Perfect -by Ed sheeran",
      rating: " ( 4/5 rating ⭐⭐⭐⭐⭐ )",
    },
    { name: "At Last -by Etta James", rating: "( 3/5 rating ⭐⭐⭐ )" },
    {
      name: "Thinking out loud -by Ed sheeran",
      rating: "( 4/5 rating ⭐⭐⭐⭐ )",
    },
  ],
  EDM: [
    { name: "Faded -by Alan Walker", rating: "( 5/5 rating ⭐⭐⭐⭐⭐ )" },
    { name: "Wake me Up -by Avicii ", rating: "( 4/5 rating ⭐⭐⭐⭐ )" },
    { name: "Alone -by Marshmello", rating: "( 4/5 rating ⭐⭐⭐⭐ )" },
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState("EDM");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>🎶 Music 🎶</h1>
      <p style={{ fontSize: "smaller", textAlign: "center" }}>
        {" "}
        Checkout my favorite musics. Select a genre to get started{" "}
      </p>

      <div style={{ textAlign: "center" }}>
        {Object.keys(musicList).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "skyblue",
              borderRadius: "0.3rem",
              fontWeight: "600",
              padding: "0.7rem  1.3rem",
              border: "1px solid black",
              margin: "1rem 0.5rem",
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicList[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                background: "skyblue",
                padding: "1rem 0.7rem",
                width: "70%",
                border: "1px solid grey",
                margin: "1rem auto",
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", textAlign: "left" }}>
                {" "}
                {music.name}{" "}
              </div>
              <div style={{ fontSize: "smaller", textAlign: "right" }}>
                {" "}
                {music.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
