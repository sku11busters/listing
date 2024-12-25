import React from "react";
import items from "./data/etsy.json";
import Listing from "./comonents/Listing";
import "./css/main.css";

const App: React.FC = () => {
  return (
      <Listing items={items} />
  );
};

export default App;
