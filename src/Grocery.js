import React, { useContext } from 'react';
import { GroceryContext } from "./context/context";

function Grocery() {

    const {
        groceryItem: {id, grocery, isGrabbed },
        handleDeleteGroceryById,
        handleGrabbedGroceryById
    } = useContext(GroceryContext);

    return (
        <div>
            <span style={{ textDecoration: isGrabbed ? "line-through" : ""}}>{grocery}</span>
           <button onClick={() => handleGrabbedGroceryById(id)}>Grabbed</button>
           <button onClick={() => handleDeleteGroceryById(id)}>Delete</button>
        </div>
    )
}

export default Grocery

