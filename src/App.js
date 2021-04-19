import React , { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

import { GroceryInputContext, GroceryContext} from "./context/context";

import GroceryInput from "./GroceryInput";
import Grocery from "./Grocery"

import "./App.css"


let groceryObj = [
  {
    id: uuidv4(), 
    grocery: "lobster",
    isGrabbed: false,
  },
  {
    id: uuidv4(),
    grocery: "steak",
    isGrabbed: false,
  }, 
  {
    id: uuidv4(),
    grocery: "cheese",
    isGrabbed: false,
  }
]

function App() {

  const [groceryArray, setGroceryArray] = useState(groceryObj)

  function addGrocery(grocery) {
    let newAddedGroceryArray = [
      ...groceryArray,
      {
        id: uuidv4(),
        grocery,
        isGrabbed: false,
      }
    ]

    setGroceryArray(newAddedGroceryArray)
    console.log(grocery);
  }

  function showGroceryInput() {
    return <GroceryInputContext.Provider value={{ addGrocery }}>
    <GroceryInput />
    </GroceryInputContext.Provider>;
  }

  function handleDeleteGroceryById(id) {
    // console.log(id);
    let newFilteredGroceryArray = groceryArray.filter((item) => item.id !== id);

    setGroceryArray(newFilteredGroceryArray)
  }

  function handleGrabbedGroceryById(id) {
    console.log(id);
  }

  function showGrocery() {
    return groceryArray.map((item) => {
      return (
        <GroceryContext.Provider 
        key={item.id} 
        value={{
          groceryItem: item,
          handleDeleteGroceryById,
          handleGrabbedGroceryById
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
