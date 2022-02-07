import React from "react";
import BikesList from "../BikesList";
import { format } from "date-fns";

function BikeHub({ stolen, txt, initial, final, endDate, startDate, querry }) {
  const title = stolen.filter((item) => item.title.includes(querry));
  console.log(
    "initial:",
    initial,
    "txt:",
    txt,
    "final:",
    final,
    "titleLength:",
    title.length
  );

  if (txt && title.length > 0 && initial === false && final === false) {
    console.log("1");
    return (
      <div className="flex w-full">
        <ul className="w-full">
          {title.map((bike) => (
            <BikesList key={bike.id} bike={bike} />
          ))}
        </ul>
      </div>
    );
  }
  if (txt && title.length === 0 && initial === false && final === false) {
    console.log("2");
    return <div>Empty Search</div>;
  }
  if (initial && txt === false && final === false) {
    console.log("3");
    const start = format(startDate, "T");
    const beginDate = stolen.filter((item) => item.date_stolen * 1000 >= start);
    return (
      <div className="flex w-full">
        <ul className="w-full">
          {beginDate.map((bike) => (
            <BikesList key={bike.id} bike={bike} />
          ))}
        </ul>
      </div>
    );
  }
  if (final && txt === false && initial === false) {
    console.log("4");
    const end = format(endDate, "T");
    const finalDate = stolen.filter((item) => item.date_stolen * 1000 <= end);
    return (
      <div className="flex w-full">
        <ul className="w-full">
          {finalDate.map((bike) => (
            <BikesList key={bike.id} bike={bike} />
          ))}
        </ul>
      </div>
    );
  }
  if (txt && initial && final === false) {
    console.log("5");
    const start = format(startDate, "T");
    const beginDate = stolen.filter((item) => item.date_stolen * 1000 >= start);
    const txtInitDate = beginDate.filter((item) => item.title.includes(querry));
    return (
      <div className="flex w-full">
        <ul className="w-full">
          {txtInitDate.map((bike) => (
            <BikesList key={bike.id} bike={bike} />
          ))}
        </ul>
      </div>
    );
  }
  if (txt && final && initial === false) {
    console.log("6");
    const end = format(endDate, "T");
    const finalDate = stolen.filter((item) => item.date_stolen * 1000 <= end);
    const txtFinalDate = finalDate.filter((item) =>
      item.title.includes(querry)
    );
    return (
      <div className="flex w-full">
        <ul className="w-full">
          {txtFinalDate.map((bike) => (
            <BikesList key={bike.id} bike={bike} />
          ))}
        </ul>
      </div>
    );
  }
  if (txt && initial && final) {
    console.log("7");
    const start = format(startDate, "T");
    const beginDate = stolen.filter((item) => item.date_stolen * 1000 >= start);
    const end = format(endDate, "T");
    const txtInitDate = beginDate.filter((item) => item.title.includes(querry));
    const txtInterval = txtInitDate.filter(
      (item) => item.date_stolen * 1000 <= end
    );
    return (
      <div className="flex w-full">
        <ul className="w-full">
          {txtInterval.map((bike) => (
            <BikesList key={bike.id} bike={bike} />
          ))}
        </ul>
      </div>
    );
  }
  if (initial && final && txt === false) {
    console.log("8");
    const start = format(startDate, "T");
    const beginDate = stolen.filter((item) => item.date_stolen * 1000 >= start);
    const end = format(endDate, "T");
    const interval = beginDate.filter((item) => item.date_stolen * 1000 <= end);
    return (
      <div className="flex w-full">
        <ul className="w-full">
          {interval.map((bike) => (
            <BikesList key={bike.id} bike={bike} />
          ))}
        </ul>
      </div>
    );
  }
  if (txt === false && initial === false && final === false) {
    console.log("9");
    return (
      <div className="flex w-full">
        <ul className="w-full">
          {stolen.map((bike) => (
            <BikesList key={bike.id} bike={bike} />
          ))}
        </ul>
      </div>
    );
  } else {
    console.log("10");
    return <div className="text-red-600">Error</div>;
  }
}

export default BikeHub;
