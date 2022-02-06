import React from "react";
import BikesList from "../BikesList";
import { format } from "date-fns";

function BikeHub({ stolen, txt, initial, final, endDate, startDate, querry }) {
  const title = stolen.map((item) => item.title);
  console.log("title:", title);

  const date = stolen.map((item) => item.date_stolen * 1000);
  console.log("date:", date);

  // if (initial) {
  //   const start = format(startDate, "T");
  // }
  // if (final) {
  //   const end = format(endDate, "T");
  // }

  const teste = stolen.filter((item) => item.title.includes(querry));
  console.log("teste:", teste);

  if (txt) {
    return (
      <div className="flex w-full">
        <ul className="w-full">
          {teste.map((bike) => (
            <BikesList key={bike.id} bike={bike} />
          ))}
        </ul>
      </div>
    );
  } else if (txt && teste.length === 0) {
    return <div>Empty Search</div>;
  }

  return (
    <div className="flex w-full">
      <ul className="w-full">
        {stolen.map((bike) => (
          <BikesList key={bike.id} bike={bike} />
        ))}
      </ul>
    </div>
  );
}

export default BikeHub;
