import CardWrapper from "@/components/loayout/CardWrapper/CardWrapper";
import styles from "./TableBlock.module.scss";
import type { PropsWithChildren } from "react";

interface IProps {
  header: Array<{ text: string }>;
}

export const TableBlock = ({ children, header }: PropsWithChildren<IProps>) => {
  return (
    <CardWrapper>
      <table className={styles.table}>
        <thead>
          <tr>
            {header.map((el, indx) => (
              <td key={indx}>{el.text}</td>
            ))}
          </tr>
        </thead>
        {children}
      </table>
    </CardWrapper>
  );
};
