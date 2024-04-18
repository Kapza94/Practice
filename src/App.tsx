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

import React from "react";
import Message from "./Message";

const App = () => {
  return (
    <div>
      <Message />

    </div>
  );
};

export default App;
