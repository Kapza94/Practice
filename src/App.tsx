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
import Message from "./Message";
import produce from "immer";

const App = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true}: bug))
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        console.log(bug);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;
