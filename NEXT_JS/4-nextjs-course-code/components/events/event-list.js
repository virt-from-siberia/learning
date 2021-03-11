import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((event) =>  (
        <EventItem {...event} />
      ))}
    </ul>
  );
}
export default EventList;
