import clsx from "clsx";
import styles from "./Switcher.module.scss";

export const Switcher = ({
  arg,
  toggle,
}: {
  arg: boolean;
  toggle: () => void;
}) => {
  return (
    <div
      className={clsx(styles.wrapper, arg && styles.isActive)}
      onClick={toggle}
    >
      <span></span>
    </div>
  );
};
