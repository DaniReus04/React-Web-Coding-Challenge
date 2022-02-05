import { useState } from "react";
import DatePicker from "react-datepicker";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      Search page
      <DatePicker
        className="bg-neutral-200"
        previousMonthButtonLabel="<"
        nextMonthButtonLabel=">"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
}

export default Search;
