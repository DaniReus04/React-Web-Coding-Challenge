import { useState } from "react";
import DatePicker from "react-datepicker";
import Calendar from "../../Assets/Images/calendar.png";
import BikeHub from "../BikeHub";

function Search({ stolen }) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [querry, setQuerry] = useState("");
  const [loading, setLoading] = useState(false);

  const [txt, setTxt] = useState(false);
  const [initialDate, setInitialDate] = useState(false);
  const [finalDate, setFinalDate] = useState(false);

  if (startDate > endDate) {
    setStartDate(endDate);
  }
  if (startDate > endDate) {
    setEndDate(startDate);
  }

  const query = (e) => {
    setQuerry(e.target.value);
  };

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    if (querry.length > 0) {
      setTxt(true);
      console.log("txt:", txt);
    }
    if (endDate !== undefined) {
      setFinalDate(true);
      console.log("final:", finalDate);
    }
    if (startDate !== undefined) {
      setInitialDate(true);
      console.log("initial:", initialDate);
    }
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  return (
    <>
      <form className="flex w-full h-full mx-0" onSubmit={onSubmit}>
        <input
          className="border-2 border-black h-7 w-1/2 py-1 px-2 font-mediums"
          placeholder="Search case description"
          onChange={query}
          type="text"
        />
        <div className="flex px-2">
          <DatePicker
            className="bg-neutral-200"
            previousMonthButtonLabel="<"
            nextMonthButtonLabel=">"
            placeholderText="From"
            type="date"
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
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
            type="date"
            dateFormat="dd/MM/yyyy"
            selected={endDate}
            minDate={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => setEndDate(date)}
          />
          <img src={Calendar} alt="calendar" className="w-10" />
        </div>
        {querry || startDate || endDate ? (
          <button
            onClick={onSubmit}
            className="border-2 border-black h-full px-2 font-medium shadow-md"
            type="submit"
          >
            Find cases
          </button>
        ) : (
          <button
            onClick={(e) => e.preventDefault()}
            className="border-2 border-slate-500 h-full px-2 text-slate-500 shadow-md"
            disabled
          >
            Find cases
          </button>
        )}
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <BikeHub
          stolen={stolen}
          txt={txt}
          initial={initialDate}
          final={finalDate}
          querry={querry}
          startDate={startDate}
          endDate={endDate}
        />
      )}
    </>
  );
}

export default Search;
