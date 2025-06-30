import { LucideLoaderCircle } from "lucide-react";
import styles from "./Loader.module.scss";

export const Loader = (color: { color: string }) => {
  return (
    <div className={styles.loader}>
      <LucideLoaderCircle style={{ fill: "none", stroke: `${color}` }} />
    </div>
  );
};
