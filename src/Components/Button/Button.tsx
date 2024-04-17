import React from "react";
import styled from "styled-components";
import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const butn = styled.button`
  color: red;
  border-radius: 5px;
`;

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={[styles.btn, styles["btn-" + color]].join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
// className={"btn btn-" + color}
