import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { format } from "date-fns";

function Cases() {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const fecthById = () => {
    fetch(`https://bikeindex.org:443/api/v3/bikes/${id}`).then((res) =>
      res.json().then((res) => setDetails(res.bike))
    );
  };
  useEffect(() => {
    fecthById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "Chave de API 1",
    googleMapsApiKey: "AIzaSyBvnFqiMUdg4DTZWU0UgBuKkQU02w63tg8",
  });

  if (id === undefined) {
    <div>Page not Found!</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-medium">
        Stolen {details.title}({details.frame_colors})
      </h1>
      <p className="text-lg">
        <strong>Stolen</strong> CET at {details.stolen_location}
      </p>
      {isLoaded ? <GoogleMap /> : <p>There is no location!</p>}
      <h2 className="text-xl font-medium">Description of incident</h2>
      {details.description ? (
        <p>{details.description}</p>
      ) : (
        <p>No description!</p>
      )}
    </div>
  );
}

export default Cases;
