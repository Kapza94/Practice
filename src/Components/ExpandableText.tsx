import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
  onClick: () => void;
}

const ExpandableText = ({ children, maxChars = 100, onClick }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded === true ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
