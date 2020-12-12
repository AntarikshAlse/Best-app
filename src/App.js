import React from "react";
import { useState } from "react";
import "./styles.css";
import { AppCategory } from "./appdata.js";

const categoryArray = Object.keys(AppCategory);
export default function App() {
  const [mainkeys, setkey] = useState("MUSIC");

  function clickhandler(appGenre) {
    setkey(appGenre);
  }

  return (
    <div className="App">
      <h1 className="title">Best Apps for 2020</h1>
      <h3 className="headings">
        Stop browsing through thousands of apps and reviews,get the best curated
        apps based on catogery
      </h3>
      <div className="nav">
        {categoryArray.map((appGenre) => {
          return (
            <button id="genre" onClick={() => clickhandler(appGenre)}>
              {appGenre}
            </button>
          );
        })}
      </div>

      {AppCategory[mainkeys].map((app) => {
        return (
          //   <div className = "categoryCard">
          //  {/* <img src={app.image} className="image" alt="place"></img> */}
          // <h4 className="name">Name :{app.Name}</h4>
          // <p className="description">Description: {app.Description}</p>
          // {/* <a class="links">link :{app.links}</a> */}
          // </div>

          <div className="Card">
            <div className="cardImage">
              <img src={app.image} className="image" alt="app"></img>
            </div>

            <div className="cardInfo">
              <h4 className="name">{app.Name}</h4>
              <p className="description">{app.Description}</p>
              <a class="links" href={app.links}>
                <button>Go</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
