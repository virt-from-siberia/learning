import { useRef } from "react";
import Button from "../ui/button";
import classes from "./events-search.module.css";

function EventsSearch(props) {
  const { onSearch } = props;

  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    onSearch(selectedYear, selectedMonth);
  };

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="7">June</option>
            <option value="8">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Fined Events</Button>
    </form>
  );
}

export default EventsSearch;
