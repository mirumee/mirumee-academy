import React, { PropsWithChildren } from "react";

import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "error" | "success";
}

export const Button: React.FunctionComponent<
  PropsWithChildren<ButtonProps>
> = ({ children, variant = "primary", ...props }) => {
  const buttonClasses = `${styles.btn} ${styles[variant]}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

Button.displayName = "Button";
