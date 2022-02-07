import { useState, useEffect } from "react";
import Search from "../../components/Search";
import ReactPaginate from "react-paginate";

function Home() {
  const [bikes, setBikes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchBikes = async (currentlyPage = 1) => {
    setLoading(true);
    await fetch(
      `https://bikeindex.org/api/v3/search?page=${currentlyPage}&per_page=10&stolenness=stolen`
    ).then((res) =>
      res.json().then((res) => {
        setBikes(res.bikes);
        setCurrentPage(currentlyPage);
      })
    );
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };

  useEffect(() => {
    fetchBikes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stolenBike = bikes.filter((bike) => bike.stolen);

  const handleSelectPage = async (data) => {
    let currentlyPage = data.selected + 1;
    await fetchBikes(currentlyPage);
    console.log("data:", data);
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
            nextLabel={
              <button
                onClick={() => {
                  fetchBikes(currentPage + 1);
                }}
              >
                Next &gt;&gt;
              </button>
            }
            previousLabel={
              <button
                onClick={() => {
                  fetchBikes(currentPage - 1);
                }}
              >
                &lt;&lt; Prev
              </button>
            }
            pageCount={10}
            pageRangeDisplayed={10}
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
