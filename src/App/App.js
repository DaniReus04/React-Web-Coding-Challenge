import { useState, useEffect } from "react";
import Home from "../Pages/Home";
import Header from "../components/Header";

function App() {
  const [bikes, setBikes] = useState([]);

  const fetchBikes = () => {
    fetch(
      "https://bikeindex.org/api/v3/search?per_page=12&stolenness=stolen"
    ).then((res) => res.json().then((res) => setBikes(res.bikes)));
  };
  useEffect(() => {
    fetchBikes();
  }, []);
  return (
    <>
      <div className="w-full max-w-5xl mt-0 mx-auto">
        <Header />
        <Home bikes={bikes} />
      </div>
    </>
  );
}

export default App;
