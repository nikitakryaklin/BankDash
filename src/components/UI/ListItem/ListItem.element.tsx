import styles from "./ListItem.element.module.scss";

export const ListItemElement = ({
  title,
  text,
  color,
}: {
  title: string;
  text: string;
  color?: string;
}) => {
  return (
    <div>
      <h3 style={{ color: `${color}` }}>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
