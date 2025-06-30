import clsx from "clsx";
import styles from "./CardWrapper.module.scss";

import type { PropsWithChildren } from "react";

interface ICardWrapper {
  className?: string;
}

export default function CardWrapper({
  children,
  className,
}: PropsWithChildren<ICardWrapper>) {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>;
}
