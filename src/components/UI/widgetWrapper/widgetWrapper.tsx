import styles from "./widgetWrapper.module.scss";

import type { PropsWithChildren } from "react";

export const WidgetWrapper = ({ children }: PropsWithChildren<unknown>) => {
  return <div className={styles.wrapper}>{children}</div>;
};
