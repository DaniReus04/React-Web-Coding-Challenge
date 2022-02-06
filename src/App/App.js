import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Header from "../components/Header";
import Cases from "../Pages/Cases";

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
      <Router basename={process.env.PUBLIC_URL}>
        <div className="w-full max-w-5xl mt-0 mx-auto">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home bikes={bikes} />} />
            <Route exact path="/case/:id" element={<Cases />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
