import React from "react";
import BikesList from "../BikesList";

function BikeHub({ stolen }) {
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
