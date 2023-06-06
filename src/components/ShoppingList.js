import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({ items }) {
const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select> */}
        <Filter onCategoryChange={handleCategoryChange} />
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          
            <Item key={item.id} name={item.name} category={item.category} />
          
        ))}
      </ul>
    </div>
  );
}



// function ShoppingList({ items, selectedCategory, handleCategoryChange }) {
//   const itemsToDisplay = items.filter((item) => {
//     if (selectedCategory === "All") return true;
//     return item.category === selectedCategory;
//   });

//   return (
//     <div className="ShoppingList">
//       <ul className="Items">
//         <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
//         {itemsToDisplay.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//       {/* <Filter selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} /> */}
//     </div>
//   );
// }


export default ShoppingList;
