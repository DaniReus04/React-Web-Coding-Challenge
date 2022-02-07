import { useState, useEffect } from "react";
import Search from "../../components/Search";
import ReactPaginate from "react-paginate";

function Home() {
  const [bikes, setBikes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchBikes = async () => {
    setLoading(true);
    console.log("currentPage:", currentPage);
    await fetch(
      `https://bikeindex.org/api/v3/search?page=${currentPage}&per_page=10&stolenness=stolen`
    ).then((res) => res.json().then((res) => setBikes(res.bikes)));
    console.log("currentPage:", currentPage);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  useEffect(() => {
    fetchBikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("bikes:", bikes);

  const stolenBike = bikes.filter((bike) => bike.stolen);

  const handleSelectPage = (data) => {
    let currentlyPage = data.selected + 1;
    setCurrentPage(currentlyPage);
  };

  return (
    <div className="w-full">
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          {" "}
          <Search stolen={stolenBike} />
          <ReactPaginate
            nextLabel={"Next >"}
            previousLabel={"< Prev"}
            pageCount={10}
            pageRangeDisplayed={3}
            marginPagesDisplayed={0}
            breakLabel={""}
            onPageChange={handleSelectPage}
            containerClassName={"flex justify-center justify-around"}
            pageClassName={
              "border-2 border-black h-full px-2 font-medium shadow-md hover:bg-slate-800 hover:text-white"
            }
            previousClassName={
              "border-2 border-black h-full px-2 font-medium shadow-md hover:bg-slate-800 hover:text-white"
            }
            nextClassName={
              "border-2 border-black h-full px-2 font-medium shadow-md hover:bg-slate-800 hover:text-white"
            }
          />{" "}
        </>
      )}
    </div>
  );
}

export default Home;
