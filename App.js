import React, { useState } from "react";
import "./styles.css";
const AllFood = {
  "🍕": "Pizza",
  "🍔": " Hamburger",
  "🧁": " Cupcake",
  "🍨": "Ice Cream",
  "🥪": "Sandwich",
  "🍖": "Meat",
  "🍗": " Poultry Leg",
  "🧇": "Waffle",
  "🥩": "Cut of Meat"
};

var food = Object.keys(AllFood);

export default function App() {
  const [meaning, setmeaning] = useState("");
  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = AllFood[userInput];
    if (meaning === undefined) {
      var meaning = "We do not have this in our database";
    }
    setmeaning(meaning);
  }
  function emojiclick(emoji) {
    var meaning = AllFood[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>input outt!</h1>
      <input onChange={inputHandler}></input>
      <h2>{meaning}</h2>
      <ul>
        <li
          style={{
            display: "inline",
            padding: "1rem",
            margin: "auto"
          }}
        >
          <a
            style={{
              textDecoration: "none",
              padding: "2rem",
              fontWeight: "bold"
            }}
            href="/"
          >
            <span style={{ border: "1px solid", padding: "0.5rem" }}>
              AllFood
            </span>
          </a>
          <a href="https://qvh4e.csb.app" style={{ textDecoration: "none" }}>
            <span
              style={{
                border: "1px solid",
                padding: "0.5rem"
              }}
            >
              VegFood
            </span>
          </a>
          <a
            href="https://f13fp.csb.app"
            style={{
              textDecoration: "none",
              padding: "2rem"
            }}
          >
            <span style={{ border: "1px solid", padding: "0.5rem" }}>
              NonVegFood
            </span>
          </a>
        </li>
      </ul>
      <h3>We Know</h3>
      {food.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclick(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
import React, { useState } from "react";
import "./styles.css";
const AllFood = {
  "🍕": "Pizza",
  "🍔": " Hamburger",
  "🧁": " Cupcake",
  "🍨": "Ice Cream",
  "🥪": "Sandwich",
  "🍖": "Meat",
  "🍗": " Poultry Leg",
  "🧇": "Waffle",
  "🥩": "Cut of Meat"
};

var food = Object.keys(AllFood);

export default function App() {
  const [meaning, setmeaning] = useState("");
  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = AllFood[userInput];
    if (meaning === undefined) {
      var meaning = "We do not have this in our database";
    }
    setmeaning(meaning);
  }
  function emojiclick(emoji) {
    var meaning = AllFood[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>input outt!</h1>
      <input onChange={inputHandler}></input>
      <h2>{meaning}</h2>
      <ul>
        <li
          style={{
            display: "inline",
            padding: "1rem",
            margin: "auto"
          }}
        >
          <a
            style={{
              textDecoration: "none",
              padding: "2rem",
              fontWeight: "bold"
            }}
            href="/"
          >
            <span style={{ border: "1px solid", padding: "0.5rem" }}>
              AllFood
            </span>
          </a>
          <a href="https://qvh4e.csb.app" style={{ textDecoration: "none" }}>
            <span
              style={{
                border: "1px solid",
                padding: "0.5rem"
              }}
            >
              VegFood
            </span>
          </a>
          <a
            href="https://f13fp.csb.app"
            style={{
              textDecoration: "none",
              padding: "2rem"
            }}
          >
            <span style={{ border: "1px solid", padding: "0.5rem" }}>
              NonVegFood
            </span>
          </a>
        </li>
      </ul>
      <h3>We Know</h3>
      {food.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclick(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
