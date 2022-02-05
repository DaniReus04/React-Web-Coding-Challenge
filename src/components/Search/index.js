import { useState } from "react";
import DatePicker from "react-datepicker";
import Calendar from "../../Assets/Images/calendar.png";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setMonth(startDate.getMonth() + 1)
  );
  return (
    <form className="flex w-full h-full mx-0">
      <input
        className="border-2 border-black h-7 w-1/2 py-1 px-2 font-mediums"
        placeholder="Search case description"
        type="text"
      />
      <div className="flex px-2">
        <DatePicker
          className="bg-neutral-200"
          previousMonthButtonLabel="<"
          nextMonthButtonLabel=">"
          placeholderText="From"
          value={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <img src={Calendar} alt="calendar" className="w-10" />
      </div>
      <div className="flex">
        <DatePicker
          className="bg-neutral-200"
          previousMonthButtonLabel="<"
          nextMonthButtonLabel=">"
          placeholderText="To"
          value={endDate}
          onChange={(date) => setEndDate(date)}
        />
        <img src={Calendar} alt="calendar" className="w-10" />
      </div>
      <button
        onClick={(e) => e.preventDefault()}
        className="border-2 border-black h-full px-2 font-medium shadow-md"
      >
        Find cases
      </button>
    </form>
  );
}

export default Search;
