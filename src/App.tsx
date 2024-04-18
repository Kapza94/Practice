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
import ExpandableText from "./Components/ExpandableText";

const App = () => {
  const handleClick = () => {};

  return (
    <div>
      <ExpandableText maxChars={10}>Hello World</ExpandableText>
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default App;
