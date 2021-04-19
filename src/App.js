import React , { useEffect, useState } from 'react';
import "./App.css"

import GroceryInput from "./GroceryInput";
import Grocery from "./Grocery"

let groceryObj = [
  {
    id: 1, 
    grocery: "lobster",
    isGrabbed: false,
  },
  {
    id: 2,
    grocery: "steak",
    isGrabbed: false,
  }, 
  {
    id: 3,
    grocery: "cheese",
    isGrabbed: false,
  }
]

function App() {

  const [groceryArray, setGroceryArray] = useState(groceryObj)

  function showGroceryInput() {
    return <GroceryInput />;
  }

  function showGrocery() {
    return groceryArray.map((item) => {
      return <Grocery key={item.id} />
    })
  }



  return (
    <div className="App">
    {showGroceryInput()}
    {showGrocery()}
    </div>
  );
}

export default App;
