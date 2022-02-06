import noImage from "../../Assets/Images/no-image-available.png";
import { format } from "date-fns";
import { Link } from "react-router-dom";

function BikesList({ bike }) {
  return (
    <li key={bike.id} className="py-4">
      <div className="flex border-2 border-black">
        <figure className="w-36 py-6 px-4">
          {bike.thumb ? (
            <img
              src={bike.thumb}
              alt={bike.title}
              className="border-2 border-black"
            />
          ) : (
            <img
              src={noImage}
              alt={bike.title}
              className="border-2 border-black"
            />
          )}
        </figure>
        <div className="flex flex-col justify-center py-4 font-medium">
          <Link to={`/case/${bike.id}`} className="text-blue-700">
            {bike.title}({bike.frame_colors})
          </Link>
          {bike.description ? <p>{bike.description}</p> : <p>No description</p>}
          <p>
            {format(new Date(bike.date_stolen * 1000), "EEE LLL d u")} -{" "}
            {bike.stolen_location}
          </p>
        </div>
      </div>
    </li>
  );
}

export default BikesList;
