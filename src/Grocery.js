import React, { useContext } from 'react';
import { GroceryContext } from "./context/context";

function Grocery() {

    const {
        groceryItem: {id, grocery },
        handleDeleteGroceryById,
        handleGrabbedGroceryById
    } = useContext(GroceryContext);

    return (
        <div>
           {grocery}
           <button onClick={() => handleGrabbedGroceryById(id)}>Grabbed</button>
           <button onClick={() => handleDeleteGroceryById(id)}>Delete</button>
        </div>
    )
}

export default Grocery

