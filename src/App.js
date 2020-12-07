import React, { useState } from "react";
import "./styles.css";

var musicGenres = {
  Sad_mood: [
    { name: "Ae Dil hai mushkil", singer: "Arijit Singh" },
    { name: "Hamari Adhuri Kahani", singer: "Arijit Singh" }
  ],

  Party_mood: [
    { name: "Naach meri raani", singer: "Guru Randhawa" },
    { name: "Binding Lights", singer: "The Weeknd" }
  ],

  Long_drive_mood: [
    { name: "Buzzcut Season", singer: "Lorde" },
    { name: "Sever the ties", singer: "Esther Sparkles" }
  ],

  Happy_mood: [
    { name: "Takeaway", singer: "The chainsmokers" },
    { name: "Unforgettable", singer: "NEIMY" },
    { name: "Never Before", singer: "Ashley Wallbridge" }
  ]
};
export default function App() {
  const [selectGenre, setGenre] = useState("Happy_mood");
  function musicClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>🎵 Mood Music 🎶</h1>
      <p style={{ fontSize: "medium " }}>
        {" "}
        Checkout my favourite music based on your mood. Select a mood to get
        started.
      </p>

      <div>
        {Object.keys(musicGenres).map((genre) => (
          <button
            onClick={() => musicClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#D1FAE5",
              borderRadius: "1rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicGenres[selectGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                border: "1px solid #93C5FD",
                padding: "1rem",
                width: "80%",
                alignItems: "center",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}> {music.singer} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
