import noImage from "../../Assets/Images/no-image-available.png";
import { format } from "date-fns";

function BikesList({ bikes }) {
  let stolenBike = bikes.filter((bike) => bike.stolen === true);

  console.log("bikes:", stolenBike);
  return (
    <div>
      <ul>
        {stolenBike.map((bike) => (
          <li key={bike.id}>
            {bike.thumb ? (
              <img src={bike.thumb} alt={bike.title} />
            ) : (
              <img src={noImage} alt={bike.title} />
            )}
            <br />
            {bike.title}({bike.frame_colors})
            <br />
            {bike.description ? (
              <p>{bike.description}</p>
            ) : (
              <p>No description</p>
            )}
            <p>
              {format(new Date(bike.date_stolen * 1000), "EEE LLL d u")} -{" "}
              {bike.stolen_location}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BikesList;
