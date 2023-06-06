import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//    const [items, setItems] = useState(itemData);


//   function handleDarkModeClick() {
//     setIsDarkMode((isDarkMode) => !isDarkMode);
//   }

//   return (
//     <div className={"App " + (isDarkMode ? "dark" : "light")}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={handleDarkModeClick}>
//           {isDarkMode ? "Dark" : "Light"} Mode</button>
//       </header>
//         <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
//         <ShoppingList items={items} />
//       </div>
//   );
// }


function App() {
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />

      <ShoppingList items={items} selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
    </div>
  );
}




export default App;
