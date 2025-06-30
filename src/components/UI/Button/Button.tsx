import React, { FormEvent } from "react";
import styles from "./Button.module.scss";

interface IButton {
  text: string;
  click?: () => void;
  type: any;
}

const Button = ({ text, click, type }: IButton) => {
  return (
    <button className={styles.button} type={type}>
      {text}
    </button>
  );
};

export default Button;
