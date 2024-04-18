import React from "react";

let count = 0;

const Message = () => {
  count++;
  console.log("Message called");
  return <div>Message {count}</div>;
};

export default Message;
