import React, { useState } from "react";
import "./styles.css";
import { foodInfo } from "./list";
export default function App() {
  const FoodList = ["All Food", "Veg Food", "Non Veg Food"];

  console.log("FoodList", FoodList);
  const [foodtype, setfoodtype] = useState("All Food");

  function foodHandler(type) {
    setfoodtype(type);
  }
  return (
    <div className="App">
      <h1>Food</h1>
      <h2>Tasty Food!!</h2>
      <hr />
      <div className="FoodList">
        {FoodList.map((type) => {
          return (
            <button key={type} value={type} onClick={() => foodHandler(type)}>
              {type}
            </button>
          );
        })}
      </div>
      <div>
        {foodInfo[foodtype].map((food) => {
          return (
            <div className="food">
              <div className="food-info">
                <h1>
                  <em>{food.name}</em>{" "}
                </h1>

                <h3>Rating : {food.Rating}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
