import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { format } from "date-fns";
import Location from "../../Assets/Images/location.png";

function Cases() {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fecthById = () => {
    fetch(`https://bikeindex.org:443/api/v3/bikes/${id}`).then((res) =>
      res.json().then((res) => setDetails(res.bike))
    );
    setTimeout(() => {
      setLoading(false);
    }, 700);
  };
  useEffect(() => {
    fecthById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "Chave de API 1",
    googleMapsApiKey: "AIzaSyD_Tq0rIO4qY3-QqDVcSxzjc2pDept-59U",
  });

  if (id === undefined) {
    <div>Page not Found!</div>;
  }

  console.log("lat:", details.stolen_record);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1 className="text-2xl font-medium">
            Stolen {details.title}({details.frame_colors})
          </h1>
          <p className="text-lg">
            <strong>Stolen</strong>{" "}
            {format(new Date(details.date_stolen), "MMM do, haaa")} CET at{" "}
            {details.stolen_location}
          </p>
          {details.stolen_record.latitude === null ? (
            <>
              <figure>
                <img src={Location} alt="location" />
              </figure>
              <p className="font-semibold">There is no location!</p>
            </>
          ) : (
            <div>
              {isLoaded ? (
                <GoogleMap
                  center={{
                    lat: details.stolen_record.latitude,
                    lng: details.stolen_record.longitude,
                  }}
                  zoom={8}
                />
              ) : (
                <p>There is no location!</p>
              )}
            </div>
          )}
          <h2 className="text-xl font-medium py-4">Description of incident</h2>
          {details.description ? (
            <p>{details.description}</p>
          ) : (
            <p>No description!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Cases;
