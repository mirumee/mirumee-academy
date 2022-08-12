import React, { PropsWithChildren } from "react";
import { clsx } from "clsx";

import styles from "./Accodion.module.css";
import arrowIcon from "./arrowIcon.svg";

interface AccordionProps extends PropsWithChildren {
  title: string;
  isOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  isOpen = false,
  title,
}) => {
  const [open, setOpen] = React.useState(isOpen);

  const arrowStyles = clsx(styles.arrow, open && styles.rotate);

  return (
    <div className={styles.container}>
      <div className={styles.summary} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <img className={arrowStyles} src={arrowIcon} />
      </div>
      {open && (
        <div className={styles.details}>
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};
