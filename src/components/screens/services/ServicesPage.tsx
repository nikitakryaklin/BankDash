import Widget from "@/components/UI/Widget/Widget";
import styles from "./ServicesPage.module.scss";
import { SERVICES_LIST, WIDGET_DATA } from "./ServicesPage.data";
import { WidgetWrapper } from "@/components/UI/widgetWrapper/widgetWrapper";
import { ListItem } from "@/components/UI/ListItem/ListItem";
import { ListItemElement } from "@/components/UI/ListItem/ListItem.element";

const ServicesPage = () => {
  return (
    <div className={styles.wrapper}>
      <WidgetWrapper>
        {WIDGET_DATA.map((el) => (
          <Widget
            key={el.id}
            title={el.text}
            text={el.title}
            color={el.color}
            className={styles.widget}
          >
            {el.icon}
          </Widget>
        ))}
      </WidgetWrapper>
      <h2>Bank Services List</h2>
      <div className={styles.listWrapper}>
        {SERVICES_LIST.map((el) => (
          <ListItem
            icon={el.icon}
            color={el.color}
            isButton={true}
            key={el.id}
            className={styles.listElement}
          >
            <ListItemElement title={el.title} text={el.text} />
            <ListItemElement
              title={el.description_title}
              text={el.discription_text}
            />
            <ListItemElement
              title={el.description_title}
              text={el.discription_text}
            />
            <ListItemElement
              title={el.description_title}
              text={el.discription_text}
            />
          </ListItem>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
