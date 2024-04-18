// import ListGroup from "./Components/ListGroup";
// import Button from "./Components/Button/Button";
// import "./App.css";
// import Like from "./Components/Like";

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
//       <Button>CLICK ME</Button>
//       <Like onClick={() => console.log("Clicked")} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";

const App = () => {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const handleClick = () => {};

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
};

export default App;
