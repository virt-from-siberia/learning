import classes from "./event-item.module.css";
import Button from "../ui/button";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  const humanReadableDate = new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
        </div>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Explore event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
