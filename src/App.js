import React , { useEffect, useState } from 'react';
import { GroceryInputContext, GroceryContext} from "./context/context";

import GroceryInput from "./GroceryInput";
import Grocery from "./Grocery"

import "./App.css"


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

  function addGrocery(grocery) {
    console.log(grocery);
  }

  function showGroceryInput() {
    return <GroceryInputContext.Provider value={{ addGrocery }}>
    <GroceryInput />
    </GroceryInputContext.Provider>;
  }

  function showGrocery() {
    return groceryArray.map((item) => {
      return (
        <GroceryContext.Provider 
        key={item.id} 
        value={{
          groceryItem: item,
        }}
        >
        <Grocery />
        </GroceryContext.Provider>
      )
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
