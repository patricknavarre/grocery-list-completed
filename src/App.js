import React , { useEffect, useState } from 'react';
import "./App.css"

import GroceryInput from "./GroceryInput";

function App() {

  function showGroceryInput() {
    return <GroceryInput />;
  }



  return (
    <div className="App">
    {showGroceryInput()}
    </div>
  );
}

export default App;
