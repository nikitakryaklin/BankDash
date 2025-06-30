import clsx from "clsx";
import styles from "./Widget.module.scss";

import type { PropsWithChildren } from "react";

interface IProp {
  title: string;
  text: string;
  color: string;
  className?: string;
}

export default function Widget({
  children,
  title,
  text,
  color,
  className,
}: PropsWithChildren<IProp>) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.content}>
        <div className={styles.icon} style={{ background: `${color}3a` }}>
          {children}
        </div>
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
