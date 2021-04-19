import React from 'react'

const GroceryInput = () => {
    function handleGrocerySubmit() {}


    return (
        <form onSubmit={handleGrocerySubmit}>
        <input type="text" />
        <button type="submit"> Submit Grocery </button>
            
        </form>
    )
}

export default GroceryInput
